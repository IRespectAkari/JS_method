/* ********************************************** *
 * 数値numを小数第N位で切り捨てる関数
 * 例
 * decimalRoundDown(12.345, 0) => 12
 * decimalRoundDown(12.345, 2) => 12.34
 * decimalRoundDown(12.345, 5) => 12.34500
 * decimalRoundDown(12.345, 5, false) => 12.345
 * 
 * @param num = 対象の数値
 * @param N = 小数第N位より下を切り捨てる(0 < N)
 * @param zeroPadding = 指定した小数第N位までゼロ埋めするか否か(規定値は真)
 * @return 小数第N位で切り捨てたnumを文字列で返す(元の小数部分がNより少なくzeroPaddingが真の場合、足りない部分がゼロ埋めされる)
 * ********************************************** */
function decimalRoundDown(num, N, zeroPadding = true) {
  // 整数と小数で分ける
  const s = String(num).split(".");
  // 小数が存在しない、又は存在するがN=0の場合、整数部分を返す
  if (s[1] === undefined || N === 0) {
    return s[0];
  }
  // zeroPaddingが真の場合、小数に0をN個追加
  if (zeroPadding) {
    s[1] += "0".repeat(N);
  }
  // N桁分でｷﾘﾄﾘした小数と整数部分を合わせて文字列として返す
  return `${s[0]}.${s[1].slice(0, N)}`;
}
