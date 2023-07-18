# Grid 网格布局

## 布局

- `grid-template-columns/rows`: 显示网格
  - `fr`
  - `repeat`
    - auto-fill
  - `minmax`
- `grid-auto-columns/rows`: 隐式网格

## 基于线元素放置

> 在 grid 项中使用

- `grid-column/row-start/end`
- `grid-colum/row`

> 开始序号为 1，使用简写时开始与结束使用`/`分隔，-1 表示到最后一条分隔线，可以使用负数

## 基于`grid-template-areas`属性放置元素

- `grid-template-areas`:父元素定义区域
  - 需要填满网格的每个格子
  - 对于跨多个格子的元素，重复填写
  - 所有名字只能出现在一个连续的区域，不能在不同的位置出现
  - 一个连续的区域必须是一个矩形
  - 使用`.`让一个格子留空
- `grid-area`:子元素使用区域
