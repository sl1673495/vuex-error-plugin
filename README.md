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

#### 注意点
action支持两种风格 如果用普通的promise 需要把promise return出去
如果用async函数则不需要
```
fetchTodos ({commit}) {
    return model.getAllTodos().then(data => {
      commit('fillTodos', data)
    })
  }
// 或
async fetchTodos ({commit}) {
    const data = await model.getAllTodos()
    commit('fillTodos', data)
  }  
```