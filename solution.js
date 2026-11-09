while (true) {
    var inputs = readline().split(' ');
    const ashX = parseInt(inputs[0]); // موقعك X
    const ashY = parseInt(inputs[1]); // موقعك Y

    // قراءة البشر
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

    // قراءة الزومبي
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
