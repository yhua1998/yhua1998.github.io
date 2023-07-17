# 等号比较规则

比较规则:
1、两端类型相同，比较值
2、两端存在NaN，返回false
3、undefind、null只有与自身或者相互比较，才会返回true
4、两端都是原始类型，转换成数字比较
5、一端是原始类型，一端是对象类型，把对象转换成原始类型后进入第四步

对象转原始:
1、如果对象拥有`[Symbol.toPrimitive]`方法，调用该方法，若该方法能得到原始值，使用该原始值，得不到原始值抛出异常
2、调用对象的valueOf方法，若该方法能得到原始值，使用该原始值，若得不到原始值，进入下一步
3、调用对象的toString方法，若该方法能得到原始值，使用该原始值，否则抛出异常