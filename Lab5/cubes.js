(function ($) {
  $.fn.cubes = function () {
    var player = {
      brosok : 0,
      schet : 0
    }
    var secondplayer = {
      brosok : 0,
      schet : 0
    }
    var computer = {
      brosok : 0,
      schet : 0
    }
    let cubes = 1;
    
    const dragZone = document.querySelector('.dragZone');
    const cubeZone = document.querySelector('.cubeZone');
    let pvpZone = document.querySelector('.pvpZone');
    let cubeObj1 = document.querySelector('.cubeObj');
    let pvp = document.getElementById("pvpCheck");
    var cubeObj2 = document.createElement("img");
    cubeObj2.src = "./img/cube1.jpg"
    cubeObj2.className = "cubeObj"
    cubeObj2.id = "cubObj2"

    let pl1RollCounter = 0;
    let pl2RollCounter = 0;

    pvp.onclick = ()=>{
      if (pvp.checked == true){
        pvpZone.className = "cubeZone"
        pvpZone.appendChild(
          cubeObj2
        )
        $('.player-roll').removeClass('green')
        $('.player-roll').removeClass('yellow')
        $('.computer-roll').removeClass('green')
        $('.computer-roll').removeClass('yellow')
        $('.roll').text("");
      }
      else {
        pvpZone.className = "pvpZone"
        pvpZone.removeChild(cubeObj2);
        $('.player-roll').removeClass('green')
        $('.player-roll').removeClass('yellow')
        $('.computer-roll').removeClass('green')
        $('.computer-roll').removeClass('yellow')
        $('.roll').text("");
      } 
    }

    dragZone.ondragover = allowDrop;

   

    function allowDrop(event){
        event.preventDefault();
    }

    cubeObj1.ondragstart = drag1;
    cubeObj2.ondragstart = drag2;

    function drag1(event){   
        event.dataTransfer.setData('id', event.target.id); 
        player.brosok = random(1, 6)
        pl1RollCounter++
         
    }
    function drag2(event){   
      event.dataTransfer.setData('id', event.target.id);    
      secondplayer.brosok = random(1, 6)
      pl2RollCounter++  
    }
    dragZone.ondrop = drop;

    function drop(event){

      console.log(pl1RollCounter + " " +pl2RollCounter);
      $('.player-roll').removeClass('green')
      $('.player-roll').removeClass('yellow')
      $('.computer-roll').removeClass('green')
      $('.computer-roll').removeClass('yellow')
      $('.roll').text("");
      let itemId = event.dataTransfer.getData('id');
      pvp.checked == true ? rollPVP() : rollComp();
    }

    function rollPVP(){

      $('.player-roll').removeClass('green')
      $('.player-roll').removeClass('yellow')
      $('.computer-roll').removeClass('green')
      $('.computer-roll').removeClass('yellow')

      if(player.brosok != 0){
        document.getElementsByClassName("cubeObj").src="./img/cube"+player.brosok+
        ".jpg";
         $('.player-roll').text(player.brosok)
      }
     
    if(secondplayer.brosok != 0){
      $('.computer-img').addClass('rotate360')
      $('.computer-roll').text(secondplayer.brosok)
    }
      if( pl1RollCounter ==  pl2RollCounter ){
        if(player.brosok > secondplayer.brosok) {
          player.schet += 1;
          $('.player-roll').addClass('green')
        } else if (player.brosok < secondplayer.brosok){
          secondplayer.schet +=1;
          $('.computer-roll').addClass('green')
        } else {
          $('.player-roll').addClass('yellow')
          $('.computer-roll').addClass('yellow')
        }
        $('.player-total').text("Счет: " + player.schet)
        $('.computer-total').text("Счет: " +secondplayer.schet)
    
        $('.player-img').removeClass('rotate360')
        setTimeout(()=>{
          player.brosok = 0
          secondplayer.brosok = 0
          $('.roll').text("");
          
        $('.player-roll').removeClass('green')
        $('.player-roll').removeClass('yellow')
        $('.computer-roll').removeClass('green')
        $('.computer-roll').removeClass('yellow')

        }, 1000)
        
        if(player.schet == 6 || secondplayer.schet == 6){
          if(player.schet > secondplayer.schet){
            $('.winner').text('Победил первый игрок!')
          } else {
            $('.winner').text('Победил второй игрок!')
          }
          $('.push').prop('disabled', true)
     }  
    }
    
  }
  
    function rollComp(){
      player.brosok = random(1, 6)
      document.getElementsByClassName("cubeObj").src="./img/cube"+player.brosok+
      ".jpg";
      $('.player-roll').text(player.brosok)

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
