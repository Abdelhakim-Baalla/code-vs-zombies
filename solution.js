function getDistance(x1, y1, x2, y2) {
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

    let targetX = ashX;
    let targetY = ashY;
    let minZombieTurnsToKill = Infinity;

    for (let h of humans) {
        let closestZombieDist = Infinity;
        for (let z of zombies) {
            let dist = getDistance(h.x, h.y, z.x, z.y);
            if (dist < closestZombieDist) {
                closestZombieDist = dist;
            }
        }

        let zombieTurns = Math.ceil(closestZombieDist / 400);

        let ashDistToHuman = getDistance(ashX, ashY, h.x, h.y);
        let ashTurns = Math.ceil((ashDistToHuman - 2000) / 1000);
        if (zombieTurns < minZombieTurnsToKill && ashTurns <= zombieTurns) {
            minZombieTurnsToKill = zombieTurns;
            targetX = h.x;
            targetY = h.y;
        }
    }

    console.log(targetX + ' ' + targetY);
}
