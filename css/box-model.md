# 盒模型

## 块级盒子

- 盒子会在内联方向上扩展并占据父容器在该方向上所有可用空间
- 每个盒子都会换行
- `width`与`height`属性可以发挥作用
- `padding`/`margin`/`border`会将其他元素从当前盒子周围“推开”

## 内联盒子

- 盒子不会换行
- `width`与`height`不会换行
- 垂直方向的`padding`/`margin`/`border`会被应用，但不会把其他处于`inline`状态的盒子推开
- 水平方向的`padding`/`margin`/`border`会被应用，且会把其他处于`inline`状态的盒子推开


## 外部显示类型

- `block`
- `inline`

## 内部显示类型

- `flex`

## 盒模型组成

- `Content Box`

显示内容，大小通过`width`/`height`设置

- `Padding Box`

大小通过`padding`设置

- `Border Box`

- `Margin Box`

### 标准盒模型

> box-sizing: content-box

> 在计算盒子大小时不包括margin部分


### 替代盒模型

> box-sizing:border-box
