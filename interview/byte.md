# Byte Dance(字节跳动)

- 数组去重

要求：对于对象，如果对象属性相同则认为两个对象相同

```javascript
function uniqeArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isSame = false;
    for (let j = 0; j < result.length; j++) {
      if (equals(arr[i], result[j])) {
        isSame = true;
        break;
      }
    }
    if (!isSame) {
      result.push(arr[i]);
    }
  }
  return result;
}

function isPrimitive(item) {
  return (
    item === null || (typeof item !== "object" && typeof item !== "function")
  );
}

function equals(item1, item2) {
  if (isPrimitive(item1) || isPrimitive(item2)) {
    return Object.is(item2, item1);
  }
  let kv1 = item1.entries();
  for (let [k, v] of kv1) {
    if (!equals(item2[k], v)) {
      return false;
    }
  }
  return true;
}
```
