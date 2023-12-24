import { GithubCorner } from '@wacky-idea/react-components/src/GithubCorner'
import { Button, Space } from 'antd'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'
import './Browser.less'
import { tabledataformat } from './data'

export default function BrowserPage() {
  const tabledata = useRef(tabledataformat(window.navigator.userAgent))
  return (
    <>
      <Helmet>
        <title>解析浏览器 ua</title>
      </Helmet>
      <div className="browser-page-wrapper">
        <div className='container'>
          <div className="code">
            {window.navigator.userAgent}
          </div>
          <div className='table-info'>
            <table>
              <thead >
                <tr>
                  {tabledata.current.map((item, index) => (
                    <th key={`name-${index}`}>{item.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {tabledata.current.map((item, index) => (
                    <td key={`value-${index}`}>{item.value}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className='link-btn'>
            <Space>
              <Button>hiwebpage</Button>
              <Button>浪淘网</Button>
              <Button>个人主页</Button>
            </Space>
          </div>
        </div>
      </div>
      <GithubCorner href='https://github.com/wacky-idea/web-utils' author='web-util' />
    </>
  )
}