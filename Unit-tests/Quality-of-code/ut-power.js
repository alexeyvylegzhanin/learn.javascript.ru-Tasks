// Function pow() from Tasks-1,2
describe("Function pow(x, n)", function() {

  describe("Positive scenarios", function() {
    // Describe test if power (n) for function pow(): 0
    var randomValue = getRandomInt(1, 999);
    it("If x = " + randomValue + " and n = 0. Result: " + 1, function() {
      assert.equal(pow(randomValue, 0), 1);
    });

    function getRandomInt(min, max) {
      max += 1;
      return Math.floor(Math.random() * (max - min) + min);
    }
    // end

    // Describe tests if power (n) > 0
    it("If x = 3, n = 2. Result: 9", function() {
      assert.equal(pow(3, 2), 9);
    })

    it("If x = 8, n = 4. Result: 4096", function() {
      assert.equal(pow(8, 4), 4096);
    })

    it("If x = 2, n = 3. Result: 8", function() {
      assert.equal(pow(2, 3), 8);
    })
    // end
  });

  describe("Negative scenarios", function() {
    // If we raising any number in negative power
    // or power with non-integral value
    // or 0 value is raising in 0th power.
    // Our result should be: NaN
    it("If n < 0. Result: NaN", function() {
      assert(isNaN(pow(123, -34)), "not NaN");
    });

    it("If n is non-integral number. Result: NaN", function() {
      assert(isNaN(pow(342, 3.14)), "not NaN");
    });

    it("If x = 0 and n = 0. Result: NaN", function() {
      assert(isNaN(pow(0, 0)), "not NaN");
    });
  });
});
