const assert = require('assert');
const ShoppingItem = require('../shopping_item');

describe('Shopping Item', function() {

  let item;

  beforeEach(function() {
    item = new ShoppingItem('Milk', 1.50, true);
  })

  it('should have a name', function() {
    const actual = item.name;
    assert.strictEqual(actual, 'Milk');
  });

  it('should have a price', function() {
    const actual = item.price;
    assert.strictEqual(actual, 1.50);
  })

  it('should be possible to make eligible for a BOGOF deal', function() {
    const actual = item.deal;
    assert.strictEqual(actual, true);
  })


});
