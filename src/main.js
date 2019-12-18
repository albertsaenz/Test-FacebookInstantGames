import Preloader from './Preloader.js';
 import Scene_play from './scenes/scene_play.js';
 FBInstant.initializeAsync().then(function() {
    var progress = 0;
    var interval = setInterval(function() {
      progress += 10;
      FBInstant.setLoadingProgress(progress);
      if (progress >= 95) {
        clearInterval(interval);
       
      }
    }, 100);
    console.log("Cargada");

    var config = {
        type: Phaser.AUTO,
        scale: {
            parent: "phaser_container",
            
            width: window.innerWidth * window.devicePixelRatio,
            height: window.innerHeight * window.devicePixelRatio,
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        // width: window.innerWidth,
        // height: window.innerHeight,
        physics: {
            default: "arcade",
            "arcade": {
                gravity: {
                    y: 0
                },
                //debug:true
            }
        },
        scene: [
            Preloader,
            Scene_play
        ]
    };

    new Phaser.Game(config);

});

//https://www.facebook.com/embed/instantgames/561818701049580/player?game_url=https://localhost:8080
