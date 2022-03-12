export function throttle (fn) {
  let timer = null
  return function (params) {
    let that = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.call(that, params)
      }, 400);
    }
  }
}