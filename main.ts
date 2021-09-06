let end = 0
let 自分 = game.createSprite(3, 3)
let ゴール = game.createSprite(1, 1)
ゴール.set(LedSpriteProperty.Blink, 500)
loops.everyInterval(200, function () {
    if (end == 0) {
        if (input.rotation(Rotation.Pitch) >= 30) {
            自分.change(LedSpriteProperty.Y, 1)
        } else if (input.rotation(Rotation.Pitch) <= -30) {
            自分.change(LedSpriteProperty.Y, -1)
        }
        if (input.rotation(Rotation.Roll) >= 30) {
            自分.change(LedSpriteProperty.X, 1)
        } else if (input.rotation(Rotation.Roll) <= -30) {
            自分.change(LedSpriteProperty.X, -1)
        }
        if (自分.isTouching(ゴール)) {
            end = 1
        }
    } else {
        basic.showString("Clear!")
        while (自分.isTouching(ゴール)) {
            自分.delete()
            ゴール.delete()
            自分 = game.createSprite(randint(0, 4), randint(0, 4))
            ゴール = game.createSprite(randint(0, 4), randint(0, 4))
            ゴール.set(LedSpriteProperty.Blink, 500)
        }
        end = 0
    }
})
