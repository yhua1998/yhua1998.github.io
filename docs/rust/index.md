# Rust

## Ownership

### rules

- 每个值都有一个所有者
- 一次只能有一个所有者
- 当所有者超出范围时，值将被删除

> 在 rust 中拥有内存的变量一旦退出作用域，内存就会自动返回。

```rust
let s1 = String::from("hello")
```

![Alt text](image.png)

```rust
let s2 = s1
```

![Alt text](image-1.png)
