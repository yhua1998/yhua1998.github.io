/**
// #region example
输入: n = 12
输出: 1

str = 123456789101112...
// #endregion example
 */

// #region snippet
function charAt(n){
  let start = 1, count = 9, digists = 1
  
  while(n > count * digists){
    n -= count * digists
    count *= 10
    digists++
    start *= 10
  }

  let num = start + Math.ceil(n / digists) - 1
  let index = (n + 1) % digists

  return String(num).charAt(index)
}
// #endregion snippet
