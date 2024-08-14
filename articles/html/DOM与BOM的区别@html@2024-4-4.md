# DOM与BOM的区别

类别: HTML
状态: 了解

## DOM

- DOM是文档对象模型。用于操控HTML和XML文件。
- 是用于处理页面内容的方法和接口。
- 将网页转换成一个对象，通过JS进行访问、修改、增加、删除网页中的各个元素(节点)。获取ID、获取类名、获取节点、获取元素，添加事件。

## BOM

- 是浏览器对象模型(非文档)，提供与浏览器进行交互的方法和API。
- 操控浏览器的历史，前进、后退。
- Cookie，token缓存。打开新窗口等。
- 主要处理浏览器窗口和框架。

## DOM

## 创建

- createElement。

## 增

- appendChild

## 查

- querySelector：所有CSS选择器。
- getElementById。

## 改

- innerHTML
- style属性对应所有CSS，p.style.fonSize。。。
- setAttribute：添加属性，class、style等等。

## 删

- removeChild

## BOM

- url:window.open
- location
- history
- storage
    - local
        - 持久化的本地存储。不主动删除数据不会过期。
        - 大小为5M左右。
        - 本地保存。
    - session
        - 一旦页面被关闭，session数据被删除。
        - 本地保存。
    - cookie
        - 不超过4KB大小的小型文本数据。
        - 在每次请求中都会被发送到服务器，容易暴露。
        - 有expire过期时间。
    - indexDB
        - 存储大量结构化数据（包括文件/blobs）。
        - 存储大没有上限。
        - 是数据库。并且所有操作都是异步的。