# CSS

## 常用布局

- 垂直居中方式
  - 行内元素可以用 vertical-algin
  - 其他元素： line-height=height

- 行内元素间空白
  - 父元素设置 font-size:0

- 基线问题导致的元素不对齐
  - 行内元素设置vertical-algin， 不是baseline就行

- 导航栏
  - 使用ul>li 浮动，使得li元素都在一行。 父元素赋予 clear:both; 让宽高撑开

## 知识点

- 块级元素 block
  - css可以设置宽高
  - 独占一行，宽高由内容撑开
  > 块级元素有: html body h1-h6 hr p pre div ul ol li dl dt dd table tbody thead tfoot tr caption form option
- 行内元素 inline
  - css不能设置宽高
  - 不独占一行，宽高由内容撑开
  > 行内元素有：br em strong sup sub del ins a label

- 行内块元素 inline-block
  - css可以设置宽高
  - 不独占一行，宽高由内容撑开
  > 行内块元素： img td th input textarea select button iframe

- 页面设计
  - 版心
    - 重要部分固定长宽，根据主流浏览器设置
    - 高由内容撑开，默认不设置高
  - 响应式布局

- 默认样式
  - p         => 上下margin
  - h1~h6     => 上下margin 字体加粗
  - body      => 外边距 8px
  - a         => 默认字体颜色，下划线
  - ul        => 左padding
  - ..
  - 解决方式：
    - 方案一
      - * {margin:0; padding:0}
      - 只处理了一部分
    - 方案二
      - 自己写一个reset.css 将想清除格式的标签样式写进去
    - 方案3
      - Normalize.css: 清除了一些默认样式，但是保留了一些有价值的默认样式