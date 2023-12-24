import { getBrowser, getBrowserVersion, getDevice, getEngine, getOS, getOSVersion } from "@wacky-idea/user-agent"

export interface TabledataType {
  name: string,
  key: string,
  value: string
}
export const tabledataformat = (ua: string): TabledataType[] => (
  [
    {
      name: '浏览器',
      key: 'browser',
      value: getBrowser(ua)
    },
    {
      name: '浏览器版本',
      key: 'browserVersion',
      value: getBrowserVersion(ua)
    },
    {
      name: '浏览器引擎',
      key: 'engine',
      value: getEngine(ua)
    },
    {
      name: '操作系统',
      key: 'os',
      value: getOS(ua)
    },
    {
      name: '操作系统版本',
      key: 'osVersion',
      value: getOSVersion(ua)
    },
    {
      name: '设备类型',
      key: 'device',
      value: getDevice(ua)
    }]
)