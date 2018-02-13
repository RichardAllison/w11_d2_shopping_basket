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

ShoppingBasket.prototype.totalCost = function() {
  let cost = 0;
  for (var item of this.items) {
      cost += item.price;
  }
return cost;
}

module.exports = ShoppingBasket;
