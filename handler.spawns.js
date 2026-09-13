function spawnHandler() {
    //creep caps
    const capHarvester = 2;
    const capUpgrader = 1;
    const capBuilder = 1;

    //creep builds
    const creeptypes = {
        basic: [WORK, CARRY, MOVE, MOVE],
    }

    //check current number of creeps for each role
    const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    const builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    //spawn new creeps if below cap
    if (harvesters.length < capHarvester) {
        console.log('Spawning new harvester: ' + harvesters.length + '/' + capHarvester);
        Game.spawns['SpawnOne'].createCreep(creeptypes.basic, null, { role: 'harvester' })
        console.log('Spawned Harvester');
    }

    if (upgraders.length < capUpgrader) {
        console.log('Spawning new upgrader: ' + upgraders.length + '/' + capUpgrader);
        Game.spawns['SpawnOne'].createCreep(creeptypes.basic, null, { role: 'upgrader' })
        console.log('Spawned Upgrader');
    }

    if (builders.length < capBuilder) {
        console.log('Spawning new builder: ' + builders.length + '/' + capBuilder);
        Game.spawns['SpawnOne'].createCreep(creeptypes.basic, null, { role: 'builder' })
        console.log('Spawned Builder');
    }

    //visual for spawning creep
    if (Game.spawns['SpawnOne'].spawning) {
        const spawningCreep = Game.creeps[Game.spawns['SpawnOne'].spawning.name];
        Game.spawns['SpawnOne'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['SpawnOne'].pos.x + 1,
            Game.spawns['SpawnOne'].pos.y,
            { align: 'left', opacity: 0.8 });
    }
};

module.exports = spawnHandler;