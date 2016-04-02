// Describe function checkSpam()
describe("Function checkSpam()", function() {

  describe("Positive scenarios", function() {

    it("String \"buy ViAgRA now\" returns: true" , function() {
      assert.equal(checkSpam("buy ViAgRA now"), true);
    });

    it("String \"free xxxxx\" returns: true" , function() {
      assert.equal(checkSpam("free xxxxx"), true);
    });

    it("String \"innocent rabbit\" returns: false" , function() {
      assert.equal(checkSpam("innocent rabbit"), false);
    });

  });

  describe("Negative scenaris", function() {

    it("Empty string \"\" returns: false", function() {
      assert.equal(checkSpam(""), false);
    });

    it("Number value returns: false", function() {
      assert.equal(checkSpam(12345), false);
    });

  });

});
