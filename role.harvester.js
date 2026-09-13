const actionHandler = require('handler.actions');

//** @param {Creep} creep **/
function roleHarvester(creep) {
    //harvest energy from source
    if (creep.store.getFreeCapacity() > 0) {
        actionHandler(creep, 'harvest');
    } else {
        actionHandler(creep, 'deposit');
        if (Game.spawns['SpawnOne'].store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
            actionHandler(creep, 'upgrade');
        }
    }
};

module.exports = roleHarvester;