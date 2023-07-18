# Float 浮动

浮动会使元素脱离正常文档流，因此其后元素会显示在下方，行盒显示会环绕浮动，而且不能在后方元素添加 margin 推开浮动元素，因为其脱离文档流，因此只能添加到浮动元素。

## 清除浮动

- `clear`
  - `left`
  - `right`
  - `both`

## 清除浮动元素周围元素

使用`.wrapper`包装浮动元素

- 在`.wrapper`后添加元素，并清除其浮动
- 使用`overflow`属性除visibe外的值，原因是创建了BFC
- 使用较新的`display:flow-root`属性