// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'Hello Word'
  },
  hi() {
    sayHello().then(data =>{
      this.setData({
        message: data
      })
    })
  }
})
