// Describe function extractCurrencyValue()
describe("Function extractCurrencyValue()", function() {

  describe("Positive scenarios", function() {

    it("\"$120\" cuts to: \"120\"", function() {
      assert.equal(extractCurrencyValue("$120"), 120);
    });

    it("\"€120.120\" cuts to: \"120.12\"", function() {
      assert.equal(extractCurrencyValue("€120.120"), 120.12);
    });

    it("\"£123.123 GBP\" cuts to: \"123.123\"", function() {
      assert.equal(extractCurrencyValue("£123.123 GBP"), 123.123);
    });

  });

});
