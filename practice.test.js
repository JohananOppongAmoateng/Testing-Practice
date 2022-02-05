const { capitalize,reverseString,caesarCipher,analyzeArray,calculator } = require("./practice");

describe("Capitalize",() =>{

  test('Capitalize hello return Hello', () => {
    expect(capitalize("hello world")).toBe("Hello world");
    })
    test('works with punctuation ', () => {
      expect(capitalize('Racecar!')).toBe("Racecar!");
  });
  test('works with upper-case letters ', () => {
      expect(capitalize('Racecar!')).toBe("Racecar!");
  });
  test('works with multiple words', () => {
      expect(capitalize('A car, a man, a maraca.')).toBe('A car, a man, a maraca.');
  });
  test('works with multiple words', () => {
      expect(capitalize('Animal loots foliated detail of stool lamina.')).toBe('Animal loots foliated detail of stool lamina.');
  });

})

describe("Calculator methods",() =>{
  
test('2 + 2 is equal to 4', () => {
  expect(calculator.add(2,2)).toBe(4);
})

test('7- 4 is equal to 3', () => {
  expect(calculator.subtract(7,4)).toBe(3);
})

test('2 * 2 is equal to 4', () => {
  expect(calculator.multiply(2,2)).toBe(4);
})

test('2 / 2 is equal to 1', () => {
  expect(calculator.divide(2,2)).toBe(1);
})

test('2  * 0 is equal to 0', () => {
  expect(calculator.multiply(2,0)).toBe(0);
})
test('5 / 2 is equal to 2', () => {
  expect(calculator.divide(5,2)).toBe(2.5);
})
test('0 / 2 is equal to 0', () => {
  expect(calculator.divide(0,2)).toBe(0);
})
test('2 / 0 is equal to infinity', () => {
  expect(calculator.divide(2,0)).toBe(Infinity);
})

  })

describe("Reverse String",() => {
  test("johanan is reversed as nanahoj",() => {
    expect (reverseString("johanan")).toBe("nanahoj")
  })
  test('works with punctuation ', () => {
    expect(reverseString('racecar!')).toBe("!racecar");
});
test('works with upper-case letters ', () => {
    expect(reverseString('Racecar!')).toBe("!racecaR");
});
test('works with multiple words', () => {
    expect(reverseString('A car, a man, a maraca.')).toBe(".acaram a ,nam a ,rac A");
});
  test("works with single letter",() => {
    expect(reverseString("a")).toBe("a")
  })

})

describe("Caesar Cipher",()=>{
  test("z return as a",()=>{
    expect(caesarCipher("z")).toBe("a")
  })
})

describe("analyzeArray",() =>{
  test("takes an array of numbers returns an object",() => {
    expect(analyzeArray([2,3,4,15,12,7,12,15,16,13,22,])).toMatchObject({
      length:11,
      min:2,
      max:22,
      average:11
    })
  })
})



