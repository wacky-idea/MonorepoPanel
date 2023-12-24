import { getDevice } from "@wacky-idea/user-agent";
import eruda from "eruda";

if ('eruda' in window) {
  if (getDevice(window.navigator.userAgent) === 'Mobile') {
    eruda.init()
  }
}