const assert = require('assert');
const ShoppingBasket = require('../shopping_basket');

describe('ShoppingBasket', function() {

  let basket;

  beforeEach(function() {
    basket = new ShoppingBasket();
  })
  it('should start empty', function() {
    const actual = basket.items;
    assert.deepStrictEqual(actual,[]);


  })
})
