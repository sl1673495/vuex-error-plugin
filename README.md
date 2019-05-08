## vuex全局错误处理插件

```
const handleError = (err) => {
  // 处理错误
  if (err.code === 401) {
    notify({
      content: '请先登录。'
    })
  }
}
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [errorPlugin({
      onActionError: (e) => {
        handleError(e)
      }
    })]
  })
}

```