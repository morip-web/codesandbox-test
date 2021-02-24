/**
 * テンプレート文字列
 */

const NAME = "morip";
const AGE = 50;

// 「私の名前はmoripです。年齢は50歳です。」
const message1 = `私の名前は${NAME}です。年齢は${AGE}歳です。`;
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

/**
 * 分割代入
 */

// 従来の記法
// const myProfile = {
//   name: "morip",
//   age: 50
// };

// const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message2);

// 分割代入による記法
// const {name, age} = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

// 配列から
const myProfile2 = ["morip", 29];
const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);
