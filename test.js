require("./index");

test("partial array should accept a value of an array", () => {
  expect(["a", "b", "c"]).toMatchPartialArray(["b"]);
});

test("partial array should accept a value multiple times", () => {
  expect(["a", "c", "b", "a", "c"]).toMatchPartialArray(["a", "b", "a"]);
});

test("partial array should accept multiple values of an array", () => {
  expect(["a", "b", 5]).toMatchPartialArray(["b", 5]);
  expect(["a", "b", 5]).toMatchPartialArray(["a", 5]);
});

test("partial array should reject invalid order of values of an array", () => {
  expect(["a", "b", "c"]).not.toMatchPartialArray(["c", "b"]);
});

test("partial array should be usable in object matches", () => {
  expect({ key: ["k", "e", "y"] }).toEqual({
    key: expect.toMatchPartialArray(["k", "y"]),
  });
});
