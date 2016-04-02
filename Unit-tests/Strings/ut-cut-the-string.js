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
