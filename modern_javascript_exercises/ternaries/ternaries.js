// Instructions can be found in ternaries.md

export function sayHello(name) {
  const addName = name ? name : "you";
  return `Hello, ${addName}!`;
}
