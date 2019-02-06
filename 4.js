//让a,b交换数据
var a = 10;
var b = 20;
var c = a;
a = b;
b = c;
console.log(a, b);


//让e,f交换数据
var e = 10;
var f = 20;
e = e + f;
f = e - f;
e = e - f;
console.log(e, f);

//让g,h交换数据
var g = 10;
var h = 20;
[g, h] = [h, g];
console.log(g, h);  
