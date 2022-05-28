import _und from "underscore"

export const cards = [
    ["complot", "machination"],
    ["guetapens", "embuscade"],
    ["decretroyal", "assassinat", "usurpation", "corruption"],
    ["soldat", "archer", "coupejarret", "apothicaire"],
    ["heritier", "seigneur", "espion", "changeforme",
        "reine", "prince", "intrigante", "felon"]
]
var concatCards = []
cards.forEach(cardGroup => {
    concatCards = concatCards.concat(cardGroup)
})
export const allCards = concatCards

export const GetNewGame = () => {
    let game = []
    cards.forEach(cardGroup => {
        let random = _und.sample(cardGroup, cardGroup.length / 2)
        game = game.concat(random)
    });
    localStorage.setItem("currentGame",JSON.stringify(game))
    return game
}   