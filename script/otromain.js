window.onload = insit;

function insit(){
    var sound = new Howl({
        src: ["./multi/mp3/Musica de ascensor SIN COPYRIGHT- Musica de ascensor, elevador, relajante_50k.mp3"]
      });
      
     var playMusic = document.getElementById("playMusic");

     playMusic. addEventListener("click", function(){
         sound.play();
     });

     var pauseMusic = document.getElementById("pauseMusic");

     pauseMusic. addEventListener("click", function(){
         sound.pause();
     });

     var stopMusic = document.getElementById("stopMusic");

     stopMusic. addEventListener("click", function(){
         sound.stop();
     });
}


gsap.to("#logo", {duration: 5, x: 360, ease: "bounce"});
