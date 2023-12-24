import { isArray } from "@wacky-idea/web-utils/src/Type";
import { Button, Input } from "antd";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function App() {

  useEffect(() => {
    console.log(isArray([1, 2, 3]))
  }, [])

  return (
    <>
      <Helmet>
        <title>开发调试工具库</title>
      </Helmet>
      <Button >123</Button>
      <Input />
    </>
  )
}