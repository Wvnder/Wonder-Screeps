const actionHandler = require('handler.actions');

const roleUpgrader = {
    //** @param {Creep} creep **/
    run: function (creep) {

        //creep state handler
        //if creep is upgrading and has no energy, set upgrading to false
        if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
        }
        //if creep is not upgrading and has energy, set upgrading to true
        if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
        }

        //if creep is upgrading, upgrade controller, else harvest energy
        if (creep.memory.upgrading) {
            actionHandler.run(creep, 'upgrade');
        } else {
            actionHandler.run(creep, 'harvest');
        }
    }
};

module.exports = roleUpgrader;