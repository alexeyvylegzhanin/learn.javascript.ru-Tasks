// Describe function getDecimal()
describe("Function getDecimal()", function() {

  it("If number = 12.345. Decimal part is: 0.345", function() {
    assert.equal(getDecimal(12.345), 0.345);
  });

  it("If number = 1.2. Decimal part is: 0.2", function() {
    assert.equal(getDecimal(1.2), 0.2);
  });

  it("If number = -1.2. Decimal part is: -0.2", function() {
    assert.equal(getDecimal(-1.2), -0.2);
  });

});

// Describe function getDecimal2()
// that use solution with strings
describe("Function getDecimal2() with Strings", function() {

  it("If number = 12.345. Decimal part is: 0.345", function() {
    assert.equal(getDecimal(12.345), 0.345);
  });

  it("If number = 1.2. Decimal part is: 0.2", function() {
    assert.equal(getDecimal(1.2), 0.2);
  });

  it("If number = -1.2. Decimal part is: -0.2", function() {
    assert.equal(getDecimal(-1.2), -0.2);
  });

});
