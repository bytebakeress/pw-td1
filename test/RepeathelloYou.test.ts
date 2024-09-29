// tests/repeatHelloYou.test.ts
import { test, expect } from "bun:test";
import { repeatHelloYou } from "../src/hello-func";

test("repeatHelloYou should repeat 'Hello, John!' 5 times", () => {
  const result = repeatHelloYou(5, "John");
  const expected = "Hello, John!\nHello, John!\nHello, John!\nHello, John!\nHello, John!\n";
  expect(result).toBe(expected);
});

test("repeatHelloYou should return error when name is empty", () => {
  const result = repeatHelloYou(3, "");
  expect(result).toBe("Error: Name cannot be empty.");
});
