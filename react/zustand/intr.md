# Zustand使用

## 简单使用

### 定义Store

```ts
import {create} from 'zustand'

const useStore = create((set)=>({
    bears: 0,
    increaseBears:()=>set((s)=>({bears: s.bears+1}))
}))
```

### 组件中使用

```ts
import {useStore} from './stores/bear'

function BearCounter(){
    const bears = useStore(s=>s.bears)
    return <>{bears}</>
}
```
