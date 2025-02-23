var spiralOrder = function (matrix) {
  const ans = []
  let t = 0
  let r = matrix[0].length - 1
  let b = matrix.length - 1
  let l = 0

  while (true) {
    for (let i = l; i <= r; i++) {
      ans.push(matrix[t][i])
    }
    if (++t > b) break
    for (let i = t; i <= b; i++) {
      ans.push(matrix[i][r])
    }
    if (--r < l) break
    for (let i = r; i >= l; i--) {
      ans.push(matrix[b][i])
    }
    if (--b < t) break
    for (let i = b; i >= t; i--) {
      ans.push(matrix[i][l])
    }
    if (++l > r) return ans
  }
  return ans
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
