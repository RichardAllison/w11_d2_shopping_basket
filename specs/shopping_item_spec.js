const assert = require('assert');
const ShoppingItem = require('../shopping_item');

describe('Shopping Item', function() {

  it('should have a name', function() {
    const item = new ShoppingItem('Milk');
    const actual = item.name;
    assert.strictEqual(actual, 'Milk');
  });

  it('should have a price', function() {
    const item = new ShoppingItem('Milk', 1.50);
    const actual = item.price;
    assert.strictEqual(actual, 1.50);
  })









});
