var Pokemon = function(type, color, size) {
  this.type = type;
  this.color = color;
  this.size = size;
  this.chant = function() {
    return 'Pika pika';
  }
}

module.exports = new Pokemon();
