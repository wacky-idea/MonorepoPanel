import { AutoLandscape } from "@wacky-idea/react-components/src/AutoLandscape";
import { Helmet } from "react-helmet";

export default function AutoLandscapePage() {


  return (
    <>
      <Helmet>
        <title>网页自动横屏</title>
      </Helmet>
      <div className="auto-landscape-page">
        {/* <AutoLandscape src="https://baidu.com" /> */}
        <AutoLandscape src="http://192.168.20.147:8000/dom/iframe" />
      </div>
    </>
  )
}