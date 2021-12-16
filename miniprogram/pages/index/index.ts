// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'Hello Word'
  },
  hi() {
    sayHello().then(data =>{
      const message = data + ''
      this.setData({
        message
      })
    })
  }
})
