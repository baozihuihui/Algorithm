function maxSlidingWindow(nums: number[], k: number): number[] {
  let result = [];
  const length = nums.length;
  let qenue = [];
  let left = 0,
    right = 0;
  if (length < 2) return nums;
  const peek = (arr: number[]) => arr.length;
  let qenueLength = null;
  for (let i = 0; i < length; i++) {
    qenueLength = peek(qenue);
    // 排序双向列表
    while (qenueLength !== -1 && nums[i] > nums[qenue[qenueLength - 1]]) {
      qenue.pop();
      qenueLength -= 1;
    }
    qenue.push(i);
    // 成为窗口时
    if (right - left + 1 === k) {
      result.push(nums[qenue[0]]);
      if (left === qenue[0]) {
        qenue.shift();
      }
      left += 1;
    }
    right += 1;
  }

  return result;
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let width = 3;

const result = maxSlidingWindow(arr, width);

console.log(result);
