# 阿里巴巴面试题

## 题目1: 赋值运算

```js
let a = {n:1}
let b = a
a.x = a = {n:2}

console.log(a.x)
console.log(b.x)
```