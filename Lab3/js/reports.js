function getDataFromDB() {
  $('.messages').empty();
  $.ajax({
    url: "../get_reports.php",
    type: "GET",
    data: {},
    success: function (response) {
      
      let reviews = JSON.parse(response)
      let len = Object.keys(reviews).length
      console.log(reviews)

      for (let item in reviews) {
        $('<div>', {
          class: 'message',
          id: `${reviews[item].id}`
        }).appendTo('.messages');

        $('<p>', {
          class: 'message-name',
        }).appendTo(`.messages #${reviews[item].id}`);

        $('<span>', {
          id: `message-name`,
          text: "Прислал(а): " + reviews[item].name
        }).appendTo(`.messages #${reviews[item].id} .message-name`);

        $('<p>', {
          id: `message-text`,
          text: reviews[item].text
        }).appendTo(`.messages #${reviews[item].id}`);
        
      }

    }
  })
}

getDataFromDB()

$('#send-button').click(function () {
  let name = $('#input-name').val()
  let email = $('#input-email').val()
  let text = $('#input-review').val()
  if (name.length > 0 && email.length > 0 && text.length > 0) {
    $.ajax({
      url: "../set_reports.php",
      type: "POST",
      data: {
        "name": name,
        "email": email,
        "text": text
      },
      success: function (response) {
        alert("Запись успешно добавлена");
        getDataFromDB()
      }
    })
  } else {
    alert("Необходимо заполнить все поля!");
  }

});
