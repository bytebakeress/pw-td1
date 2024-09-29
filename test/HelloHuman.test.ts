
import { test, expect } from "bun:test";
import { helloHuman } from "../src/hello-func";
import type { Human } from "../src/types";

test("helloHuman should return correct greeting with age", () => {
  const johnDoe: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980,
  };

  const result = helloHuman(johnDoe);
  expect(result).toBe("Hello, John Doe! You are 44 years old.");
});

test("helloHuman should return error when human has an empty firstname", () => {
  const johnDoe: Human = {
    firstname: "",
    lastname: "Doe",
    birthyear: 1980,
  };

  const result = helloHuman(johnDoe);
  expect(result).toBe("Error: Firstname cannot be empty.");
});
