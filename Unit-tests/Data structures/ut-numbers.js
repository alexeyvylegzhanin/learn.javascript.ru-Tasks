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

// Describe function getFibNum()
describe("Function getFibNum()", function() {

  describe("Positive scenarios", function() {

    it("The 7th element of Fibonacci row is: 13", function() {
      assert.equal(getFibNum(7), 13);
    });

    it("The 65th element of Fibonacci row is: 17167680177565", function() {
      assert.equal(getFibNum(65), 17167680177565);
    });

    it("The 0th element of Fibonacci row is: 0", function() {
      assert.equal(getFibNum(0), 0);
    });

    it("The 77th element of Fibonacci row is: 5527939700884757", function() {
      assert.equal(getFibNum(77), 5527939700884757);
    });

  });

  describe("Negative scenarios", function() {

    // continue here later...

  });
});

// Describe function getFibNumBinet()
describe("Function getFibNumBinet()", function() {

  describe("Positive scenarios", function() {

    it("The 7th element of Fibonacci row is: 13", function() {
      assert.equal(getFibNumBinet(7), 13);
    });

    it("The 65th element of Fibonacci row is: 17167680177565", function() {
      assert.equal(getFibNumBinet(65), 17167680177565);
    });

    it("The 0th element of Fibonacci row is: 0", function() {
      assert.equal(getFibNumBinet(0), 0);
    });

    // The test fails in cause of rounding error
    it("The 77th element of Fibonacci row is: 5527939700884757", function() {
      assert.equal(getFibNumBinet(77), 5527939700884757);
    });

  });

});
