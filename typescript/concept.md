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


