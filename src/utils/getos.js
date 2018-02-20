// @flow
export default function getOS() {
  let OS="windows" //Default

  if (navigator.appVersion.indexOf("Win")!==-1)
    OS="windows"
  if (navigator.appVersion.indexOf("Mac")!==-1)
    OS="osx"
  if (navigator.platform.indexOf("BeOS")!==-1)
    OS="beos"
  if (navigator.platform.indexOf("Linux")!==-1) {
    if(navigator.userAgent.indexOf("Android") !== -1)
      OS="android"
    else
      OS="linux"
  }
  if (navigator.platform.indexOf("freebsd")!==-1 || navigator.platform.indexOf("FreeBSD")!==-1)
    OS="freebsd"
  if (navigator.userAgent.indexOf("iPad")!==-1 || navigator.userAgent.indexOf("iPhone")!==-1 || navigator.userAgent.indexOf("iPod")!==-1)
    OS="ios"

  return OS
}
