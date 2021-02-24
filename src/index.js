/**
 * テンプレート文字列
 */

const name = "morip";
const age = 50;

// 「私の名前はmoripです。年齢は50歳です。」
const message1 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message1);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("morip1"));

// アロー関数1
const func2 = (str) => {
  return str;
};
console.log(func2("morip2"));

/**
 * アロー関数2
 * 関数内がreturn1列のみの場合は「return」を省略できる
 * returnを省略した場合は「{}」も省略することを忘れずに！
 */
const func3 = (str) => str;
console.log(func2("morip3"));

/**
 * アロー関数・練習課題
 * 引数2つ設定して足し算をする
 */

const func4 = (num1, num2) => num1 + num2;
console.log(func4(3, 4));
