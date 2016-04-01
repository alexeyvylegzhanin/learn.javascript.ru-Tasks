// Describe function ucFirst()
describe("Function ucFirst()", function() {

  describe("Positive scenarios", function() {

    it("If we type type \"hello\" we have: \"Hello\"", function() {
      assert.equal(ucFirst("hello"), "Hello");
    });

    it("If we type type \"ucFirst\" we have: \"Ucfirst\"", function() {
      assert.equal(ucFirst("ucFirst"), "Ucfirst");
    });

  });

  describe("Negative scenarios", function() {

    it("If we type type empty string \"\" we have: \"\"", function() {
      assert.equal(ucFirst(""), "");
    });

    it("If we type 0 we have: \"\"", function() {
      assert.equal(ucFirst(0), "");
    });

    it("If we any number like 12131 we have: \"\"", function() {
      assert.equal(ucFirst(12131), "");
    });

  });

});
