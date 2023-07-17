# CSS 选择器

## 选择器种类

- 类型/元素/标签选择器
- 类选择器
- ID 选择器
- 类型属性选择器

  - `[attr]`: 属性存在
  - `[attr=value]`: 属性存在且等于
  - `[attr~=value]`: 多个值，至少一个匹配
  - `[attr|=value]`: 值为value，或开始为value，后面紧接连字符，如:value-xxx

  - `[attr^=value]`: 开头为value子字符串
  - `[attr$=value]`: 结尾值为value子字符串
  - `[attr*=value]`: 值字符串中至少出现一次value

  > 大小写敏感，在闭合`]`前加`i`字符

- 伪类选择器
- 伪元素选择器

## 运算符

- `>` 初代子元素
- 包含使用空格` `
- 相邻使用加号`+`
