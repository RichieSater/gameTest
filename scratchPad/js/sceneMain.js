class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
        //this.load.image("key","path")
    	this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create() {
        //define our objects

        this.text1=this.add.text(game.config.width/2,game.config.height/2,"HELLO!",{fontFamily:'Anton',color:'#ff0000',fontSize:40});
        this.text1.setOrigin(0.5,0.5)
        this.char = this.add.sprite(game.config.width/2,game.config.height/2,'boy');

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