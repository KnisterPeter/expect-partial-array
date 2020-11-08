declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchPartialArray(elements: any[]): R;
    }
    interface Expect {
      toMatchPartialArray(elements: any[]): any;
    }
    interface InverseAsymmetricMatchers {
      toMatchPartialArray(elements: any[]): any;
    }
  }
}

export {};
