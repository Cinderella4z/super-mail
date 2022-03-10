export function debounce (fn) {
  let timer = null
  return function (...arg) {
    let that = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(that, ...arg);
    }, 200);
  }

}