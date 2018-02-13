const assert = require('assert');
const ShoppingBasket = require('../shopping_basket');
const ShoppingItem = require('../shopping_item');

describe('ShoppingBasket', function() {

  let basket;
  let item;

  beforeEach(function() {
    basket = new ShoppingBasket();
    item1 = new ShoppingItem('Juice', 40, false);
    item2 = new ShoppingItem('Snickers', 5, true);
    item3 = new ShoppingItem('Water', 5, true);
  })

  it('should start empty', function() {
    const actual = basket.items;
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to add items to it', function() {
    basket.addToBasket(item1);
    const actual = basket.items.length;
    assert.strictEqual(actual, 1);
  })

  it('should be able to remove items from it', function() {
    basket.addToBasket(item1);
    basket.removeFromBasket(item1);
    const actual = basket.items.length;
    assert.strictEqual(actual, 0);
  })

  it('should be able to add up cost', function() {
    basket.addToBasket(item2);
    basket.addToBasket(item3);
    const actual = basket.totalCost();
    assert.strictEqual(actual, 10);
  })


})
