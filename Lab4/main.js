let price = null;


$(document).tooltip({track: true});
$('.reservation').hide()

$("#accordion").accordion({
  heightStyle: "content"
})

$( ".tours-list__submit" ).on('click', function(e){
  price = e.target.dataset.price
  $(".tours-list").hide();
  $(".reservation").show();
})
.button();


$( "#confirm" ).on( "click", function() {
  $.confirm({
    title: 'Внимание',
    content: 'Вы дейстительно готовы отправить заявку?',
    buttons: {
        confirm: function () {
          $.alert({
            title: 'Отлично',
            content: 'Заявка отправлена!',
          });
          $(".tours-list").show();
          $(".reservation").hide();
        },
        cancel: function () {
        }
    }
})
}).button()

let total = 0;

$( function() {
  var handle = $( "#custom-handle-persons" );
  $( "#slider-persons" ).slider({
    max: 12,
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
      total = ui.value * price;
      console.log(total)
      $('.reservation__total span').text(total + " рублей")
    },
    change: function(event, ui){

    }
  });
} );



$("#gender").selectmenu();

$('#datepicker').datepicker({
  dateFormat : "dd.mm.yy",
  minDate: new Date($('#hiddendelivdate').val()),
  monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
});

var availableTags = [
  "Дания",
  "Гаити",
  "Реюньон",
  "Сирийская Арабская Республика",
  "Болгария",
  "Гвинея-Бисау",
  "Ботсвана",
  "Французская Гвиана",
  "Острова Кайман",
  "Кот д`Ивуар",
  "Иран",
  "Острова Теркс и Кайкос",
  "США",
  "Боливия",
  "Гренландия",
  "Монтсеррат",
  "Доминиканская Республика",
  "Шри-Ланка",
  "Северные Марианские острова",
  "Франция",
  "Казахстан",
  "Малайзия"
];
$( "#tags" ).autocomplete({
  source: availableTags
});
