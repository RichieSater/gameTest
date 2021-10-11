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
    }

    update() {
        //constant running loop
    }
}