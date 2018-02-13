const ShoppingBasket = function(){
  this.items = [];
}

ShoppingBasket.prototype.addToBasket = function(item) {
  this.items.push(item);
}

module.exports = ShoppingBasket;
