class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image("rocket", "./assets/rocket.jpg");
        this.load.image("spaceship", "./assets/spaceship.jpg");
        this.load.image("starfield", "./assets/starfield.jpg");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}