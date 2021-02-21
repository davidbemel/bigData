

/*for (var i = 0; i <=150; i++) {
  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon-form/'+i,
    type:'GET',
    data:{},
    success:function (data) {
      $('.pokemons').append('<li><img src="'+data.sprites.front_default+'"></img></li>')
    }
  })
}
*/

for (var i = 0; i <=150; i++) {
  fetch('https://pokeapi.co/api/v2/pokemon-form/'+i,{
    method: 'GET'
    }).then(function(data){
    return data.json()
    }).then(function(json){
  $('.pokemons').append('<li><img src="'+json.sprites.front_default+'"></img></li>')
})
}