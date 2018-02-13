const ShoppingBasket = function(){
  this.items = [];
}

ShoppingBasket.prototype.addToBasket = function(item) {
  this.items.push(item);
}

ShoppingBasket.prototype.removeFromBasket = function(item) {
  const index = this.items.indexOf(item);
  if (index >= 0) {
  this.items.splice(index,1)};
}

module.exports = ShoppingBasket;
