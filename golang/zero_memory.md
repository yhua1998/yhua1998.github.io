# 零内存

空结构体

```go
type U struct{}
var u U
var u struct{}
```

## 使用场景

- 实现Set集合类型

由于空结构体不占用实际内存，可以结合map实现set，具体的集合值作为map建，值用空结构体，这样可以节省内存

- 用于通道通信

- 方法接收器