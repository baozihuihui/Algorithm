function trap(height: number[]): number {
  let result = 0;
  const length = height.length;
  if (length < 3) return result;
  let max = height[0],
    stack = [],
    stack2 = [];
  for (let i = 0; i < length; i++) {
    if (stack.length === 0 && height[i] === 0) {
      max = height[i + 1];
      continue;
    }
    if (max < height[i]) {
      while (stack.length !== 0) {
        result += max - stack[stack.length - 1];
        stack.pop();
      }
      max = height[i];
    }
    stack.push(height[i]);
  }
  console.log(stack);
  return result;
}

const attr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(attr));
