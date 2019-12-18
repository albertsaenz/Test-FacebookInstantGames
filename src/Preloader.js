class Preloader extends Phaser.Scene {

    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        console.log("preoader aq");
        this.facebook.once('startgame', this.startGame, this);
        this.facebook.showLoadProgress(this);
        this.load.spritesheet("zero2","assets/spyro.png",{
            frameWidth:176,
            frameHeight:130

        });

        //this.load.image('zero2', 'assets/spyro.png');
        this.load.image('stats', 'assets/stats.png');
        this.load.spritesheet("derecha","assets/derecha.png",{
            frameWidth:512,
            frameHeight:512
        });
        this.load.spritesheet("izquierda","assets/izquierda.png",{
            frameWidth:512,
            frameHeight:512
        });
        this.load.spritesheet("shot","assets/shot.png",{
            frameWidth:512,
            frameHeight:512
        });
    }

    startGame ()
    {
        this.scene.start('Scene_play');
    }

}
export default Preloader;