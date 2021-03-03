<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Лаба3 НовостиОтзывы</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/reports.css">
  <link rel="stylesheet" href="css/news.css">
</head>
<body>
  <div class="wrap">
    <div class="routes">
    <button class="button" id="news-button">Новости</button>
    <button class="button" id="reports-button">Отзывы</button>
    </div>
    <div class="news">
      
    </div>
    <button class="button" id="load-button">Загрузить еще</button>
    <div class="reports">
    <h3>Оставьте отзыв</h3>
      <section class="message-form">

          <input class="inputs" type="text" id="input-name" placeholder="Ваше имя">

          <input class="inputs" type="email" id="input-email" placeholder="E-mail">

          <textarea id="input-review" cols="50" rows="10" placeholder="Сообщение"></textarea>

      </section>
      <br>
        <button class="button" id="send-button">Отправить</button>
        <div class="messages">

      </div>
    </div>
  </div>
</body>
<script src="js/jquery.js"></script>
<script src="js/main.js"></script>
<script src="js/reports.js"></script>
<script src="js/news.js"></script>
</html>
