# State

## react更新分三个阶段
- 触发

组件事件处理程序提交状态变化，触发渲染

- 渲染

组件渲染阶段，重新计算状态快照（新的组件状态），根据触发提交的状态变化计算，返回新的JSX

每次渲染都会有自己的状态快照与事件处理程序

- 提交

判断是否发生变化，变化则提交新的DOM更新



## 更新器函数

更新器函数在渲染阶段运行，当传入值时直接替代，当输入函数时执行函数，并返回值替代，参数为先前值


## 更新对象/嵌套对象

- 突变
- `use-immer`


## 更新数组




## 总结

- 设置状态不会改变当前渲染的状态，而是触发一次新的渲染
- 状态更新处理在事件处理函数执行完成后，这就是批处理
- 要在一个事件中多次更新状态，可以使用更新器函数


