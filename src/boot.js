FBInstant.initializeAsync().then(function() {
    var progress = 0;
    var interval = setInterval(function() {
      progress += 10;
      FBInstant.setLoadingProgress(progress);
      if (progress >= 95) {
        clearInterval(interval);
        pe();
      }
    }, 100);
    console.log("Cargada");


    var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight
    };

    new Phaser.Game(config);

});