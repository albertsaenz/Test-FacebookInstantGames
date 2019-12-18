var moveLeft = false;
var moveRight = false;
var de=false;
class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
    }
    
        addPlayerPhoto (key){
        console.log('addplayerphoto');

        var photo = this.add.image(45, 45, key);

        photo.setScale(0.25);
        photo.setInteractive();

    }
    StBar(){
        console.log("bar");
        this.rectInicio = new Phaser.Geom.Rectangle(0, 0, this.sys.game.config.width, 90);
        this.graphicsrecIni = this.add.graphics({fillStyle: { color: 0x0D6D8C }});
        this.graphicsrecIni.fillRectShape(this.rectInicio);
        this.facebook.loadPlayerPhoto(this, 'foto').once('photocomplete', this.addPlayerPhoto, this);

    }
    create() {
        this.StBar();
        
        this.Tflechas = this.input.keyboard.createCursorKeys();
        
        console.log("create",this.sys.game.config.width);
        this.drag=this.add.image((this.sys.game.config.width / 2) - 80, this.sys.game.config.height / 2, 'zero2');
        this.dragdos=this.physics.add.sprite((this.sys.game.config.width / 2) - 8, this.sys.game.config.height / 2, 'zero2');
        var style = {
            font: "bold 30pt Arial",
            fill: "#FFFFFF",
            align: "center"
        };
        this.TextoBar=this.add.text(90, 90/3,'Player Name: ' + this.facebook.playerName,style);
        // this.TextoBar=this.add.text(90, 90/3).setText([
        //     'Player ID: ' + this.facebook.playerID,
        //     'Player Name: ' + this.facebook.playerName
        // ]);
        
        this.dragdos.on('pointerdown',this.destro).setScrollFactor(0).setInteractive();

        this.derimg = this.add.sprite(this.sys.game.config.width-80,this.sys.game.config.height/2,'derecha').setScale(0.3);
        this.izqimg = this.add.sprite(80,this.sys.game.config.height/2,'derecha').setScale(0.3);
        this.izqimg.flipX=true;
        this.izqimg.on('pointerdown',   this.doGoLeft).setScrollFactor(0).setInteractive();
         this.derimg.on('pointerdown',  this.doGoRight).setScrollFactor(0).setInteractive();
         this.izqimg.on('pointerup',   this.doStop).setScrollFactor(0).setInteractive();
         this.derimg.on('pointerup',   this.doStopR).setScrollFactor(0).setInteractive();
        
        }
        destro(){
            console.log("clic");
            de = true;
        }
        doGoLeft()
{
moveLeft = true;
	//  this.falcon.setVelocityX(-200);
    //  this.falcon.anims.play('left', true);
    
}
doStop(){
    moveLeft = false;
    
}
doStopR(){
    moveRight = false;
    
}

 doGoRight()
{
    
    moveRight=true;
}

    update() {
        if(de==true){
            this.dragdos.destroy();
        }else{
            this.dragdos.setVelocityX(0);
        }
        //this.dragdos.setVelocityX(0);
        if (this.Tflechas.right.isDown) {
                
            this.drag.x+=2;

        } else if (this.Tflechas.left.isDown) {

            this.drag.x-=2;

        }

        if (moveRight && !moveLeft)
        {
            this.dragdos.setVelocityX(160);

            //this.falcon.anims.play('left', true);
        }

        if (moveLeft && !moveRight)
        {
            this.dragdos.setVelocityX(-160);

            //this.falcon.anims.play('left', true);
        }
        if (!moveLeft && !moveRight)
        {
           // this.dragdos.setVelocityX(0);
            //this.falcon.anims.play('left', true);
        }

        
       
    }
}

export default Scene_play;
