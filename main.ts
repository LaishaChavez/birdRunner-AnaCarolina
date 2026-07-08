controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Birdy.vy = -100
})
let Birdy: Sprite = null
scene.setBackgroundImage(assets.image`Fondo`)
Birdy = sprites.create(assets.image`Birdy`, SpriteKind.Player)
controller.moveSprite(Birdy, 150, 0)
Birdy.ay = 200
Birdy.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`nivel1`)
