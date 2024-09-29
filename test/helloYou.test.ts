// tests/helloYou.test.ts
import { test, expect } from "bun:test";
import { helloYou} from "../src/hello-func";

test("helloYou should return 'Hello, John!' when name is 'John'", () => {
  const result = helloYou("John");
  expect(result).toBe("Hello, John!");
});

test("helloYou should return error when name is an empty string", () => {
  const result = helloYou("");
  expect(result).toBe("Error: Name cannot be empty.");
});
