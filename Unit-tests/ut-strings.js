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

// Describe function truncate()
describe("Function truncate()", function() {

  describe("Positive scenarios", function() {

    it("String: \"Вот, что мне хотелось бы сказать на эту тему:\"
      with parameter: 20, cuts to: \"Вот, что мне хоте...\"");
      assert.equal(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20), "Вот, что мне хоте...");
    );

    it("String: \"Всем привет!\"
      with parameter: 20, cuts to: \"Всем привет!\"");
      assert.equal(truncate(truncate("Всем привет!", 20), "Всем привет!");
    );

  });

});

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
