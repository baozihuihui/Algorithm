// function trap(height: number[]): number {
//   let result = 0;
//   const length = height.length;
//   if (length < 3) return result;
//   let max = height[0],
//     stack = [];
//   for (let i = 0; i < length; i++) {
//     if (stack.length === 0 && height[i] === 0) {
//       max = height[i + 1];
//       continue;
//     }
//     if (max < height[i]) {
//       while (stack.length !== 0) {
//         result += max - stack[stack.length - 1];
//         stack.pop();
//       }
//       max = height[i];
//     } else if (stack[stack.length - 1] < height[i]) {
//       let j = stack.length - 1;
//       while (stack[j] < height[i]) {
//         result += height[i] - stack[j];
//         stack[j] = height[i];
//         j -= 1;
//       }
//     }
//     stack.push(height[i]);
//   }
//   return result;
// }

const attr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function trap(height: number[]): number {
  let toatlWater = 0;
  let numVt = height;
  while (numVt.length > 1) {
    let leftVt = [];
    for (let i = 0; i < numVt.length; i++) {
      let h = numVt[i];
      if (leftVt.length == 0) {
        leftVt.push(h);
      } else {
        let first = leftVt[0];
        if (h >= first) {
          for (let a = 0; a < leftVt.length; a++) {
            let aL = leftVt[a];
            toatlWater += first - aL;
          }
          leftVt = [h];
        } else {
          leftVt.push(h);
        }
      }
    }
    leftVt.reverse();
    console.log(leftVt);
    numVt = leftVt;
  }

  return toatlWater;
}

console.log(trap(attr));
