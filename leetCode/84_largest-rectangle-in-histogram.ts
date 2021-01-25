// function largestRectangleArea(heights: number[]): number {
//   let area = 0,
//     length = heights.length;
//   if (heights.length === 0) {
//     return area;
//   }
//   if (length === 1) {
//     return heights[0];
//   }
//   heights.push(0);
//   length = length + 1;
//   let stack: number[] = [-1];
//   for (let i = 0; i < length; i++) {
//     while (heights[i] < heights[stack[0]]) {
//       const height = heights[stack[0]];
//       const left = stack[1];
//       area = Math.max(area, (i - left - 1) * height);
//       console.log("height", height);
//       console.log("left", left);
//       console.log("right", i);
//       console.log("area", area);
//       console.log("------------");
//       // 不要用头部操作大数组，否则影响性能，执行时间大概 3000ms
//       stack.shift();
//     }
//     stack.unshift(i);
//   }
//   return area;
// }

function largestRectangleArea(heights: number[]): number {
  let area = 0,
    length = heights.length;
  if (heights.length === 0) {
    return area;
  }
  if (length === 1) {
    return heights[0];
  }
  heights.push(0);
  length = length + 1;
  let stack: number[] = [-1];
  for (let i = 0; i < length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack[stack.length - 1]];
      const left = stack[stack.length - 2];
      area = Math.max(area, (i - left - 1) * height);
      console.log("height", height);
      console.log("left", left);
      console.log("i", i);
      console.log("area", area);
      console.log("------------");
      stack.pop();
    }
    stack.push(i);
  }
  return area;
}

// const attr = [1, 1];
// const attr = [2, 1, 5, 6, 2, 3];
// const attr = [2, 4];

// const result = largestRectangleArea(attr);

// console.log(result);
