(function ($) {
  $.fn.cubes = function () {
    var player = {
      brosok : 0,
      schet : 0
    }
    
    var computer = {
      brosok : 0,
      schet : 0
    }
    let cubes = 1;
    

    this.append(`<div class="game">
    <div class = "zone" id = "cubeZone" >
    <img class = "cube" src="./img/cube1.jpg" alt="1">
    </div>
    <div class = "zone" id = "dragZone"> 


    </div>
    <div class="cubes">
      <span class="cubes-title">Введите кол-во кубиков</span>
      <input type="text" class="cubes-count">
    </div>
    

    <div class="player game-section">
      <img class="player-img img" src="img/red.png" alt="">
      <div class="player-roll roll"></div>
      <span class="player-total total">Счет:</span>
    </div>

    <div class="computer game-section">
      <img class="computer-img img" src="img/blue.png" alt="">
      <div class="computer-roll roll"></div>
      <span class="computer-total total">Счет:</span>
    </div>

    <div class="winner">&nbsp;</div>
    <div class="buttons">
      <input type="button" value="Бросить!" class="button push">
      <input type="button" value="Заново" class="button start">
    </div>

  </div>`);
    

    $('.push').click(function(){
      $('.player-roll').removeClass('green')
      $('.player-roll').removeClass('yellow')
      $('.computer-roll').removeClass('green')
      $('.computer-roll').removeClass('yellow')
      $('.computer-img').removeClass('rotate360')
      $('.roll').text("");
    
      if ( $('.cubes-count').val() != ''){ cubes = +$('.cubes-count').val()}
      $('.cubes').hide(399);
    
    
      $('.player-img').addClass('rotate360')
    
    
      player.brosok = random(cubes, cubes * 6)
      $('.player-roll').text(player.brosok)
      
      setTimeout(() => {
        computer.brosok = random(cubes, cubes * 6)
        $('.computer-img').addClass('rotate360')
    
        $('.computer-roll').text(computer.brosok)
    
        if(player.brosok > computer.brosok) {
          player.schet += 1;
          $('.player-roll').addClass('green')
    
        } else if (player.brosok < computer.brosok){
          computer.schet +=1;
          $('.computer-roll').addClass('green')
        } else {
          $('.player-roll').addClass('yellow')
          $('.computer-roll').addClass('yellow')
        }
        $('.player-total').text("Счет: " + player.schet)
        $('.computer-total').text("Счет: " +computer.schet)
    
        $('.player-img').removeClass('rotate360')
        
        
        if(player.schet == 6 || computer.schet == 6){
          if(player.schet > computer.schet){
            $('.winner').text('Вы победили!')
          } else {
            $('.winner').text('Победил компьютер!')
          }
          $('.push').prop('disabled', true)
        }
      }, 1000)
    
    
    })
    
    $('.start').click(function(){
      location.reload()
    })
    
    
    
    
    function random(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  }
})(jQuery);
