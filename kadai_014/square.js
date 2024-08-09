// アロー関数またはfunctionのいずれかで関数が定義されている
// 引数の二乗の計算結果がコンソールに出力されている


const calculationTotal = (price) => {
  // 与えられた引数priceを二乗し、その値を出力する
  return price * price;
};

// 関数を使用して10の二乗を計算
const result = calculationTotal(10);

// 結果をコンソールに表示
console.log(result); // 出力: 100