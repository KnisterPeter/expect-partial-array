/**
 * @param {any[]} received
 * @param {any[]} elements
 */
function toMatchPartialArray(received, elements) {
  const pass = (() => {
    let index = -1;
    for (let i = 0; i < elements.length; i++) {
      const next = elements[i];
      const found = received.indexOf(next);
      if (found === -1) {
        return false;
      } else if (index > found) {
        return false;
      }
      index = found;
    }
    return true;
  })();

  if (pass) {
    return {
      message: () =>
        `expected ${received} not to contain ${elements} in given order`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${received} to contain ${elements} in given order`,
      pass: false,
    };
  }
}

expect.extend({
  toMatchPartialArray,
});
