# let、const和var

类别: JS
状态: 了解

- var在函数外声明是全局变量，函数内是局部变量。不同作用域声明同意变量，会导致错误。
- Js有提升机制，当变量被声明时会在代码执行前提升到作用域顶部。var提升并初始化为undefined。let不会初始化所以会报错。
- let是{}块级作用域。在块级作用域外使用会报错。不同作用域声明不会产生错误。
- const不能重新声明或更新。