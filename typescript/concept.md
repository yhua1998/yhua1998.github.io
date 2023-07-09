# Concept

typescript是类型化的javascript，在javascript上添加了静态类型检查器。

## 创建组合（复杂）类型的方法

- unions: 联合

```ts 
type MyBool = true | false
```

主要用户描述字符串与数字字面量的集合

获取一个变量类型的方法
|Type| Predicate|
|:-|:-|
|string|typeof s === 'string'|
|number|typeof n === 'number'|
|boolean|typeof b === 'boollean'|
|undefined|typeof u === 'undefined'|
|function|typeof f === 'function'|
|array|Array.isArray(a)|


- generics: 泛型

- intersection: 交叉点 '&'

```ts 
type Combined = {a:number} & {b: string}
```


## 结构类型系统

- typescript类型系统，如果两个变量的形状相同则认为是相同类型
- 比较时，只要变量的一个子集匹配就行

```ts 
interface T{
    x:number,
    y:number
}

const t1 = {x:1,y:2,z:3} // 符合T类型
```

## Gradual Typing: 渐进式类型any

不允许Gradual Typing的方法是在tsconfig.json文件设置noImplicitAny:true或strict:true


