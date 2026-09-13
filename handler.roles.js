const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');

function roleHandler() {
    for (const name in Game.creeps) {
        const creep = Game.creeps[name];

        //run the appropriate role function
        switch (creep.memory.role) {
            case 'harvester':
                roleHarvester(creep);
                break;
            case 'upgrader':
                roleUpgrader(creep);
                break;
            case 'builder':
                roleBuilder(creep);
                break;
        }
    }
};

module.exports = roleHandler;