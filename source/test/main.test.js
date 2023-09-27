const main = require('../main')

const ship = new main.Ship("Carrier");
const game = new main.Gameboard(3);

test("Ship creates an object", () => {
    expect(typeof ship).toBe("object");
});

test("Ship has properties of type, length, hp and sunk", () => {
    expect(Object.keys(ship)).toStrictEqual(["type", "size", "hp", "sunk"]);
});

test("Ship assigns correct properties depending on the type of boat", () => {
    expect(ship.size).toBe(5);
})

test("Gameboard creates an object", () => {
    expect(typeof game).toBe("object");
})

test("Gameboard has properties of size and state", () => {
    expect(Object.keys(game)).toStrictEqual(["size", "state"])
})

test("Gameboard creates a two dimensial array based on the size property", () => {
    game.createBoard();
    expect(game.state).toStrictEqual([
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O']
      ]);
})

test("Gameboard is able to place a series of points inside the gameboard depending on the length and direction specified", () => {
    game.createBoard();
    game.placeShip(0, 1, 2, 'vertical');
    expect(game.state).toStrictEqual([
        ['O', 'O', 'O'],
        ['X', 'O', 'O'],
        ['X', 'O', 'O']
    ])
})