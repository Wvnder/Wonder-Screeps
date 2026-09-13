const actionHandler = require('handler.actions');

const roleHarvester = {
    //** @param {Creep} creep **/
    run: function (creep) {
        //harvest energy from source
        if (creep.store.getFreeCapacity() > 0) {
            actionHandler.run(creep, 'harvest');
        } else {
            actionHandler.run(creep, 'deposit');
            if (Game.spawns['SpawnOne'].store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
                actionHandler.run(creep, 'upgrade');
            }
        }

    }
};

module.exports = roleHarvester;