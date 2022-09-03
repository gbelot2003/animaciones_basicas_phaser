const config = {
    width: 480,
    height: 320,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config)

function preload() {
    this.load.spritesheet('evil_tomato', './assets/evil_tomato.png', {
        frameWidth: 16,
        frameHeight: 25
    })
}

function create() {
    this.tomato = this.add.sprite(100, 100, 'evil_tomato', 1).setScale(2);
    this.anims.create({
        key: 'tomato_walk',
        frames: this.anims.generateFrameNumbers('evil_tomato', {
            //frames: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            start: 1,
            end: 8
        }),
        repeat: -1,
        frameRate: 10
    });

this.tomato.anims.play('tomato_walk')
}