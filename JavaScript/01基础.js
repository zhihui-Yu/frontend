// 可以使用外部文件导入方式，也可以在通过 script 标签的body直接写， js是从上到下顺序执行的。

// 注释方式： // 或者 /* */
// alert("哈哈");


/*
 * JS
 * - 严格区分大小写
 * - 以 ; 结尾，不加的话，浏览器会默认加。但是可能加错
 */

// 声明变量, 变量名称最好见名知意
// - 变量标识符可以包含 字母、数字、_、$
// - 不能用数字开头
// - 不能是关键词、保留字 [var for in ...]
// - 采用驼峰命名法 
var age = 12;
console.log(age);

/*
 * 数据类型
 * - String         字符串，使用双引号或者单引号都行，特殊字符使用 \ 转义
 * - Number         数值
 * - Boolean        布尔
 * - Null           空值 ： typeof 返回 object
 * - Undefined      未定义
 * - Object         对象 [引用类型]
*/

var str = "String 类型";
var num = 123;
var b = true;
var n = null;
var un = undefined;
var obj = { a: 123 };

// 获取变量类型
console.log(typeof un);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof null)


// 获取数字最大值
console.log("数字最大值 = " + Number.MAX_VALUE);
// Infinity, 是一个保留字，typeof 返回的是 number
console.log("超过最大值 = " + Number.MAX_VALUE * Number.MAX_VALUE);

// 精度问题： 不要使用js进行精度要求高的计算
console.log(0.1 + 0.2)

// 类型转换, 
// - 转字符串
//   - 直接调用toString()方法，但是 null 和 undefined没有toString方法，调用会报错。
//   - 使用String()函数: Number | Boolean 内部调用 toString， null 和 undefined 直接转字符串 null | undefined
// - 转数字 
//   - 使用Number() 函数
//     - 纯数字的字符串 -> 对应数字； 包含非数字的字符串 -> NaN
//     - boolean: true -> 1; false -> 0
//     - null -> 0
//     - undefined -> NaN
//   - 使用 parseInt() 函数
//     - 将字符串中有效的数字取出来，从左往右，到第一个非数字位
//   - 使用 parseFloat() 函数
//     - 可以取出浮点数
// - 16进制： 使用 0x开头
// - 8 进制： 使用 0 开头
// - 2 进制： 使用 0b 开头，有些浏览器不支持
// - 转 Boolean
//   - 数字转，0|NaN 为 false，其他都是true
//   - 字符串转： 除了空串，其他都是 true
//   - null | undefined -> false 
//   - 对象 -> true
var a = 123;
console.log(typeof a);
console.log(typeof a.toString());
// console.log(typeof String(a));
console.log(typeof String(null));

console.log(Number("123px"));
console.log(Number(true));
console.log(parseInt("aa123px23"));
console.log(parseInt(true)); // NaN
console.log(parseFloat("123.122px"));

// parseInt(var, 进制)，不指定的话不同浏览器可能解析效果不一样
a = '070';
console.log(parseInt(a, 10));

console.log(typeof typeof true); // string


/**
 * 运算符
 *   对非number类型的值进行运算时，会先转成number，再运算； 任何值与NaN运算都是NaN; 任何值和字符串相加都是拼接,并转型为string
 *   + 
 *    - 两个数字相加
 *    - 两个字符串相加是一个拼接字符串操作
 *   - 
 *    - 将非number转 number后进行运算
 *   * 
 *    - 将非number转 number后进行乘法运算
 *   / 
 *    - 将非number转 number后进行除法运算
 *   %
 *    - 将非number转 number后进行取模运算 -- 取余数
 *  
 * */

console.log(123 + 22);
console.log('123' + '123');
console.log(NaN + '123');

console.log(100 - '1');
console.log(typeof (100 - null));

console.log(100 * true);
console.log(100 * false);

// false -> 0
console.log(100 / false);

console.log(100 % 9);


/**
 * 一元运算符
 * + 正号
 * - 负号
 * -- 自减 影响原变量
 * ++ 自增 影响原变量
 */

var a = 123;
a = +a; // 可以隐式转换为 number 类型
a = -a;
a = --a;
a = a--;
a = a++; // a++ => 返回原变量值
a = ++a; // ++a => 返回+1后的值
console.log(a);

a = a++; // 将 原值赋值给对象，相当于没变化，如果a是字符串，可能发生类型隐式变化
console.log(a);