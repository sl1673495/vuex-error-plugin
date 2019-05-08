export const errorPlugin = (config = {}) => {
  const {
    onActionError = (e) => { throw e }
  } = config

  return function (store) {
    const oldDispatch = store.dispatch
    store.dispatch = function dispatch (...args) {
      return oldDispatch.apply(this, args).catch(e => {
        onActionError(e)
      })
    }
  }
}
