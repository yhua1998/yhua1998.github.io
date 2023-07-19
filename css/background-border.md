# 背景与边

## 背景

- 背景颜色`background-color`

  - rgba(r,g,b,a=0-1)

- 背景图片`background-image`

- 背景图像平铺方式`background-repeat`

  - `no-repeat`
  - `repeat-x`
  - `repeat-y`
  - `repeat`: default

- 背景图像的大小`background-size`

  - `cover`: 保持长宽比的同时覆盖整个盒子区域，可能超出盒子区域
  - `contain`: 保持长宽比的同时尽量覆盖整个区域，但不超出盒子区域
  - 长度/百分比

- 背景图像定位`background-position`

  - 关键字:top center
  - 长度/百分比

上述背景图像属性可以使用逗号分隔给出多个值，将发生堆叠，最前面的在最顶层

- `background-origin`

  - `border/padding/content-box`

  指定 position 的原点

- 渐变背景图像:gradient

- 背景附加`background-attachment`

内容滚动时，背景滚动方式

    - `scroll`:随页面滚动而滚动，因此当页面内容滚动时不会滚动
    - `fixed`: 固定在视口上，当元素或元素内容滚动时都不会滚动
    - `local`: 与元素内容一起滚动

- `background-clip`

背景裁剪，决定背景扩展区域

- `border-box`
- `padding-box`
- `content-box`
- `text`:文字前景色

### 简写

- `background-color`只能在最后一个逗号之后指定
- `background-size`只能立即包含在 position 之后，用`/`分隔

## 边框
