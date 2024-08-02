// 四則演算

/*
体重：68kg
身長：1.7m
計算式：[体重(kg)]÷[身長(m)×身長(m)]
*/

// 変数の宣言
let bodyWeight;
let height;
let bmi;

// 値の代入
bodyWeight = 68;
height = 1.7;
bmi = bodyWeight / (height * height);

// コンソールへの出力
console.log(bmi);