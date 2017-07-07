var pokemons = ['dane', 'grey', 'genger', 'okido'];
var maxRand = 4;

$('.skills__item').on('click', function() {
  var power = $(this).data('power');
  var type = $(this).data('type');
  var rand = Math.floor( Math.random() * 4);
  var target = pokemons[rand];
  var lifeValue = $('#' + target).find('.life__value');
  var life = lifeValue.attr('data-life');

  life -= power;

  if (life < 30) {
    lifeValue.css('background','red');
  }

  if (life < 0) {
    $('#' + target).css('opacity',0.3);
    $('#' + target).find('.skills_item').off('click');
    pokemons.splice(rand,1);
    maxRand--;
  }

  if (pokemons.length)

  lifeValue.attr('data-life', life);
  lifeValue.css('width', life + '%');

  return false;
});