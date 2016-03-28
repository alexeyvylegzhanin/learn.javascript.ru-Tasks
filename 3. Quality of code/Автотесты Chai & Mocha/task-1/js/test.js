describe("Проверяем функцию pow()", function() {

  describe("Возводим x в степень 3", function() {

    function makeTest(x) {
        var expended = x * x * x;

        it("Число " + x + " в степени 3 равно " + expended, function() {
          assert.equal(pow(x, 3), expended);
        });
    }

    for (var i = 1; i <= 5; i++) {
      makeTest(i);
    }

  });

  describe("Возводим x в степень 0", function() {

    it("При возведении в нулевую степень результат = 1", function() {
      assert.equal(pow(1, 0), 1);
    })

  })
});
