function isBalanced(str) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else if (map[str[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}
