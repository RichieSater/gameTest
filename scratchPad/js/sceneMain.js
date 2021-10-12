class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
        //this.load.image("key","path")
    	this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
        this.load.audio('cat',['audio/meow.mp3','audio/meow.ogg'])
    }
    create() {
        //define our objects

        //Cat
        this.catSound=this.sound.add('cat');
        this.catSound.play()
        
        //Interactive Text
        this.text1=this.add.text(game.config.width/2,game.config.height/2,"HELLO!",{fontFamily:'Anton',color:'#ff0000',fontSize:40});
        this.text1.setOrigin(0.5,0.5)
        this.text1.setInteractive();
        this.text1.on('pointerdown', this.onDown,this);
        this.text1.on('pointerup', this.onUp,this);
        this.char = this.add.sprite(game.config.width/2,game.config.height/2,'boy');


        //Kyle Animation
        this.anims.create({
            key: 'walk',
            frames: [
                {key: 'boy', frame:0},
                {key: 'boy',frame:1},
                {key: 'boy', frame:2},
                {key: 'boy',frame:3},
                {key: 'boy', frame:4},
                {key: 'boy',frame:5}
                
            ],
            frameRate:8,
            repeat:-1
        })
        this.char.play('walk')
        this.doWalk()
        
        //Phaser Graphics and catSound
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(8,0xff0000)
        this.graphics.strokeRect(100,200,50,50)
        this.graphics.strokePath();

    }

    onDown(){
        this.text1.alpha=.1;
    }

    onUp(){
        this.text1.alpha=1;
    }

    doWalk(){
        this.tweens.add({
            targets: this.char,
            duration: 1000,
            x:game.config.width,
             y:0, 
             alpha:0,
             onComplete: this.onCompleteHandler,
            onCompleteParams:[this]});
    }

    onCompleteHandler (tween, targets, scope) {
        var char=targets[0]
        char.x=0;
        char.alpha=1;
        char.y=game.config.height/2;
        scope.doWalk()



    }

    update() {
        //constant running loop
        
    }
}