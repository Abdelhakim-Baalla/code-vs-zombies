function distance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

while (true) {
    var inputs = readline().split(' ');
    const ashX = parseInt(inputs[0]);
    const ashY = parseInt(inputs[1]);

    const humans = [];
    const humanCount = parseInt(readline());
    for (let i = 0; i < humanCount; i++) {
        var inputs = readline().split(' ');
        humans.push({
            id: parseInt(inputs[0]),
            x: parseInt(inputs[1]),
            y: parseInt(inputs[2])
        });
    }

    const zombies = [];
    const zombieCount = parseInt(readline());
    for (let i = 0; i < zombieCount; i++) {
        var inputs = readline().split(' ');
        zombies.push({
            id: parseInt(inputs[0]),
            x: parseInt(inputs[1]),
            y: parseInt(inputs[2]),
            nextX: parseInt(inputs[3]),
            nextY: parseInt(inputs[4])
        });
    }

    console.log('0 0');
}
