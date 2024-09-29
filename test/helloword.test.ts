// tests/helloWorld.test.ts
import { test, expect } from "bun:test";
import {  helloWorld } from "../src/hello-func";

test("helloWorld should return 'Hello, World!'", () => {
  const result = helloWorld();
  expect(result).toBe("Hello, World!");
});
