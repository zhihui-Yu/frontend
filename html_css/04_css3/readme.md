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

## CSS3 功能
- 新增的长度单位  rem | vw | vh | vmax | vmin
- 颜色格式        rgba | hsl | hsla
- 选择器          伪类 | 伪元素
- 盒子           box-sizing [盒子大小] | box-shadow [盒子阴影]
- 背景           background-origin[背景图的原点] | background-image | background-repeat | background-clip [外裁剪区域] | background-size [设置背景图尺寸]
- 边框           border-radius
- 文本           text-shadow | white-space [文本换行] | text-overflow [与overflow一起用] | text-decoration [文本修饰] |  -webkit-text-stroke[文本描边]
- 背景渐变       background-image: linear-gradient() | radial-gradient() | repeating-linear-gradient() | repeating-radial-gradient()
- 字体           @font-face 使用
- 字体图标       @font-face 高级
- 2D            transform: translate(-50%,-50%) [位移] | scale(0.8, 0.5) [缩放] | rotate(20deg) [旋转] | skew(20deg,20deg) [扭曲]; transform-origin: 20% 20%;[变换原点]  ps: 多重变换,建议最后旋转，旋转会改变坐标朝向
- 3D            transform-style: preserve-3d;[开启3D视图] | perspective: 100px;[景深] | perspective-origin: 200px 200px;[视角] | transform: translate3d(20px,20px,20px) | rotate3d(1,1,1,30deg) | scale3d(1.5,1.5,1.5); | backface-visibility: hidden; [背部不可见]
- 过渡          transition-property: all;[开启过渡属性] | transition-duration: 10s;[过渡耗时] | transition-delay: 0.3s; | transition-timing-function: step-end;[变化函数]
- 动画           @keyframes name; | animation: name duration timing-function delay iteration-count direction fill-mode;
- 多列布局       columns: count width; | column-gap: 列边距; | column-rule: style color width; | column-span: all;[是否跨列显示: 对标题标签有效]
- 伸缩盒模型     display: flex; | flex-flow: flex-direction + flex-wrap; | justify-content: space-evenly; [主轴对齐方式] | align-items: flex-start;[侧轴对齐方式 - 单行] | align-content: space-around; [侧轴对齐方式 - 多行] | flex-grow: 1; [放大] | flex-shrink: 1; [缩] | order: -1; [排序] | align-self: flex-end;[单独对齐]
- 媒体查询      @media screen and (min-width: 768px) and (max-width: 1200px) 使用 [响应式布局，根据不同屏幕宽度显示样式不同]
- BFC           block formatting context (块级格式上下文)，元素的特殊化， 解决一些元素显示问题


### 水平垂直居中
```css
.outer{
  width:100px;
  height: 100px;
  background-color: #888;
  /* 方案一 */
  justify-content: center;
  align-items: center;
}

.inner{
  width:100px;
  height: 100px;
  background-color: orange;
  /* 方案二 */
  margin: auto;
}
```