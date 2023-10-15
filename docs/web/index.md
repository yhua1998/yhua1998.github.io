---
aside: true
---

# WEB

## 网络

### 跨域的五种常见解决方案

跨域是浏览器的一种安全机制，浏览器有一种策略：同源策略，同源策略规定部分请求不能被浏览器所接受。
:::tip
同源策略导致的跨域是浏览器单方面拒绝响应数据，服务器端是处理完毕并做出了响应的
:::

- JQuery的ajax

```js
function callback(){}

$.ajax({
  url:'',
  type: 'get',
  dataType: 'jsonp',
  jsonCallback: "callback"
})
```

- script 标签

设置`src`属性

- 前端代理(开发阶段)

- 服务端代理（Nginx）

- 响应头处理（逻辑层面）

服务端设置响应头，表示安全通行

```js
Access-Control-Allow-Origin: '*'

// * 表示任何
// domain 特定
```