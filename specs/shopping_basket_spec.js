const assert = require('assert');
const ShoppingBasket = require('../shopping_basket');
const ShoppingItem = require('../shopping_item');

describe('ShoppingBasket', function() {

  let basket;
  let item;

  beforeEach(function() {
    basket = new ShoppingBasket();
    item = new ShoppingItem('Juice', 40, false);
  })

  it('should start empty', function() {
    const actual = basket.items;
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to add items to it', function() {
    basket.addToBasket(item);
    const actual = basket.items.length;
    assert.strictEqual(actual, 1);
  })

})
