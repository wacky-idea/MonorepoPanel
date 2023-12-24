import { ComponentType, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import "normalize.css";
import './global.less';
import './global.ts';

// const router: RouteObject[] = [
// {
//   path: "/",
//   Component: lazy(() => import('./pages/TestPage')),
// },
// ];

const router: RouteObject[] = [];
const paths = import.meta.glob('./pages/**/*.tsx')

console.log('paths', paths)

for (const key in paths) {
  router.push({
    path: key.replace('./pages', '').replace(/[I|i]ndex\.tsx/, '').replace('.tsx', ''),
    Component: lazy(paths[key] as () => Promise<{ default: ComponentType; }>),
  })
}

console.log('router', router)

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={createBrowserRouter(router)} />
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={createBrowserRouter(router)} />
)