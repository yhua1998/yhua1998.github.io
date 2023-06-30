# Goroutine & Channel

## Goroutine

用户级线程，通过携程实现，是在同一内存空间上运行的不同函数


## Channel

用于Goroutine间通信

- 无缓冲Channel，是发送与接收都阻塞的操作
- 有缓冲Channel，当缓冲区满时，执行发送操作会挂起


- 只发送或接收channel用于解决什么问题？

用作函数参数，限定在函数内部只能执行限定操作对channel

- 关闭channel

在关闭channel后不能在发送数据，否则将panic，但可以接收数据，当缓冲区读完时返回对应类型零值

```go
value := <- ch
value, ok := <- ch
```


## select

用于在多个channel间进行非阻塞的数据传输、同步和控制

### 使用场景

- 等待多个通道的消息（多路复用）
- 超时等待通道信息
- 在通道上进行非阻塞读写

select 的主要作用是在处理多个通道时提供了一种高效且易于使用的机制，简化了多个 goroutine 的同步和等待，使程序更加可读、高效和可靠。

