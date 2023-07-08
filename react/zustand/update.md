# 状态更新

## 扁平化更新

在浅层对象上，可以直接返回修改的属性，与原属性进行合并

## 嵌套对象

- 需要使用扩展运算符`...`完成，不能像扁平化更新那样
- 可以使用immer库

```ts
const useStore=create((set)=>({
    bear: {
        count:0
    } ,
    increaseBears:()=>set(produce(state=>{++state.bear.count}))
}))
```

- `optics-ts`
- `ramda`

## 合并

默认情况下，set函数将返回的状态与原有状态进行扁平化合并，想要禁止合并，使用替换可以给set函数传递第二个参数为true



