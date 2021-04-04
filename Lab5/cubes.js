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
    
    const dragZone = document.querySelector('#dragZone');
    const cubeZone = document.querySelector('#cubeZone');
    let cubeObj = document.querySelector('.cubeObj');
    let pvp = document.getElementById("switch");
    if (pvp.checked == true){
      console.log("check");
    } 
    dragZone.ondragover = allowDrop;
    cubeZone.ondragover = allowDrop;

    function allowDrop(event){
        event.preventDefault();
    }

    cubeObj.ondragstart = drag;

    function drag(event){
        
        event.dataTransfer.setData('id', event.target.id);
        
    }

    dragZone.ondrop = drop;
    cubeZone.ondrop = drop;

    function drop(event){
      $('.player-roll').removeClass('green')
      $('.player-roll').removeClass('yellow')
      $('.computer-roll').removeClass('green')
      $('.computer-roll').removeClass('yellow')
      $('.roll').text("");
      let itemId = event.dataTransfer.getData('id');
      roll();
     
    }

    function roll(){
      player.brosok = random(1, 6)
      document.getElementById("cubeObj").src="./img/cube"+player.brosok+
      ".jpg";

      $('.player-roll').text(player.brosok)
      
      setTimeout(() => {
        computer.brosok = random(1,6)
        

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
    
    
    }
    
    $('.start').click(function(){
      location.reload()
    })
    
    
    
    
    function random(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  }
})(jQuery);
