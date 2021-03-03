let current = 0;
let id = 0;

function loadData() {
  $.get("../get_news.php", {
      kol: 3,
      tek: current
    },
    function (data) {
      let result = JSON.parse(data);
      for (let item in result) {
        //console.log(result)

        $('<div>', {
          class: 'item',
          id: `${id}`
        }).appendTo('.news');

        $('<div>', {
          class: 'item__imgWrap',
        }).appendTo(`#${id}`);

        $('<img>', {
          class: 'item__img',
          src: "img/" + result[item].img
        }).appendTo(`#${id} .item__imgWrap`);

        $('<div>', {
          class: 'item__content',
        }).appendTo(`#${id}`);
       
        $('<h1>', {
          class: 'item__title',
          text: result[item].title
        }).appendTo(`#${id} .item__content`);

        $('<p>', {
          class: 'item__text',
          text: result[item].text
        }).appendTo(`#${id} .item__content`);

        $('<div>', {
          class: 'item__buttons',
        }).appendTo(`#${id}`);
       
        id++;
      }

      let len = Object.keys(result).length;
      current += len;
      id = current;

    });

}

loadData()

$('#load-button').click(function (){loadData()})
