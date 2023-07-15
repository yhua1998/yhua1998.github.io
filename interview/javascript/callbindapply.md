# 手写call、bind、apply

## 手写call

```
Function.prototype.mycall=function(ctx, ...args){
    ctx = ctx === undefined || ctx=== null ? globalThis:Object(ctx)
    const fn = this
    const key = Symbol("temp")
    Object.defineProperty(ctx, key, {
        enumerable: false,
        value:fn
    })
    const result = ctx[key](...args)
    delete ctx[key]
    return result
}
```

## 手写apply


## 手写bind

