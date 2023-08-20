# CSS 3

## 介绍
- CSS3 是CSS2 的升级版本，在C2的基础上，增加了许多强大的功能，从而解决一些实际面临的问题
- CSS3在未来会按照模块化的方式发展：https://www.w3.org/Style/CSS/current-work.html
- CSS3 的新特性如下：
  - 更加使用的选择器   如 动态伪类选择器，目标伪类选择器，伪元素选择器等等
  - 更好的视觉效果     如 圆角，阴影 渐变等
  - 丰富的背景效果     如 支持多个背景图片，同时新增了若干个背景相关的属性
  - 全新的布局方案     如 弹性盒子
  - Web字体           如 可以显示用户电脑没有按照的字体
  - 颜色              如 HSL，HSLA, RGBA 颜色模式，新增opacity属性控制透明度
  - 2D -> 3D 变换     如 旋转 扭曲 缩放 位移等
  - 动画与过度效果     如 让效果的变换更具流线型，平滑性


## CSS3 的私有前缀

- 介绍
  - 不同浏览器内核的私有前缀是不一样的,如：chromium 是 `—webkit-border-radius: 20px;`
- 为什么要私有前缀
  - 由于css 发布后，浏览器可能不会第一时间适配，所以需要给不同内核的浏览器配置不同的样式前缀，如果浏览器觉得可以适配，就会显示出效果，如果不行就没效果。
  ```
  -webkit-border-radius:20px;
  -moz-border-radius:20px;
  -ms-border-radius:20px;
  -o-border-radius:20px;
  border-radius:20px;
  ```
  > 查看CSS3兼容性的网站： https://caniuse.com/

- 常见的浏览器私有前缀
  - Chrom              -webkit-
  - Safari             -webkit-
  - Firefox            -moz-
  - Edge               -webkit-
  - （旧） Opera       -o-
  - （旧） IE          -ms-

> 开发时候，一般都是由编译工具帮我们生成这些私有前缀，所以不用太担心