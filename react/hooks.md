# HOOK

## 使用注意

- HOOK钩子函数只能在组件或自定义HOOK的顶层使用，即不能在条件、循环语句中使用

> 原因：在组件内部通过索引数组或链表存储hook的状态，即有顺序性，当hook在条件、循环等控制语句中使用时，会改变状态数组或链表的原有顺序，因此获取不到正确的先前状态，因为状态更新依赖当前hook的先前状态。

[hook原理](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)