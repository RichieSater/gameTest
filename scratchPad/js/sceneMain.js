class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
        //this.load.image("key","path")
    	this.load.image("face","images/face.png");
    }
    create() {
        //define our objects
        this.face = this.add.image(100,200,"face");
        this.face.alpha=.9;
    }

    update() {
        //constant running loop
    }
}