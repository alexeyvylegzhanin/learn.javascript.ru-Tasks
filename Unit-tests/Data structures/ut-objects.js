/* TEST DATA */
var emptyObj = {};

// Data for tasks 3,4
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// Data for task 5
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
/* <--end--> */

// Describe function isEmpty()
describe("Function isEmpty", function() {

  it("returns true for an empty object", function() {
    assert.isTrue(isEmpty({}));
  });

  it("returns false if a property exists", function() {
    assert.isFalse(isEmpty({anything: false}));
  });

});

// Describe function getSalariesTotalSum()
describe("Function getSalariesTotalSum()", function() {

  it("Founding total sum of all salaries = 650", function() {
    assert.equal(getSalariesTotalSum(salaries), 650);
  });

});

// Describe function getBiggestSalary()
describe("Function getBiggestSalary()", function() {

  it("\"Петя\" has the biggest salary", function() {
    assert.equal(getBiggestSalary(salaries), "Петя");
  });

  it("Empty object returns \"no employees\"", function() {
    assert.equal(getBiggestSalary(emptyObj), "no employees");
  });

});

// Describe function multiplyNumeric()
describe("Function multiplyNumeric()", function() {

  it("Multiplyes all numeric properties by 2", function() {
    multiplyNumeric(menu);
    assert.equal(menu.width, 400);
    assert.equal(menu.height, 600);
    assert.equal(menu.title, "My menu");
  });

});
