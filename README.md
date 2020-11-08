> expect-partial-array

This jest matcher could be used for example to expect arguments of a function
or cli to be given and in correct order.

## Installation

```shell
$ npm install --save-dev expect-partial-array
# or
$ yarn add -D expect-partial-array
```

## Usage

```js
import "expect-partial-array";

expect(["some", "value", 5]).toMatchPartialArray(["some", 5]);

expect({ key: ["k", "e", "y"] }).toEqual({
  key: expect.toMatchPartialArray(["k", "y"]),
});
```
