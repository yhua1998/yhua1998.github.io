# Ref

> 什么时候使用ref?  
> 当你想要记住组件的某个状态，但又不想状态变化引起新的渲染（再次渲染）的时候。

## ref不能访问其他组件的DOM节点，包括其孩子节点

> 要想访问必须将孩子组件的DOM节点进行暴露

### 暴露方法

使用forwardRef函数API定义组件，函数接收两个参数的组件定义函数，第一个参数为props，第二个参数为ref引用

### 限制暴露

有时并不想暴露DOM节点的所有浏览器API，因此我们可以使用命令式API useImperativeHandle对其进行限制。

```ts
const MyInput = forwardRef((props, ref)=>{

const currentRef = useRef(null)

useImperativeHandle(ref, ()=>({
focus(){
    currentRef.current.focus()
}
}))

return <input ref={currentRef} {...props} />
})

```
