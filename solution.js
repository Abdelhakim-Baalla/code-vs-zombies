while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);

    const humanCount = parseInt(readline());
    const humans = [];
    for (let i = 0; i < humanCount; i++) {
        var inputs = readline().split(' ');
        humans.push({
            id: parseInt(inputs[0]),
            x: parseInt(inputs[1]),
            y: parseInt(inputs[2]),
        });
    }

    const zombieCount = parseInt(readline());
    const zombies = [];
    for (let i = 0; i < zombieCount; i++) {
        var inputs = readline().split(' ');
        zombies.push({
            id: parseInt(inputs[0]),
            x: parseInt(inputs[1]),
            y: parseInt(inputs[2]),
            nextX: parseInt(inputs[3]),
            nextY: parseInt(inputs[4]),
        });
    }

    console.log('0 0');
}
