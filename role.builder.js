const actionHandler = require('handler.actions');

//** @param {Creep} creep **/
function roleBuilder(creep) {
    //creep state handler
    //if creep is building and has no energy, set building to false
    if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
        creep.memory.building = false;
    }
    //if creep is not building and has energy, set building to true
    if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
        creep.memory.building = true;
    }

    if(creep.memory.building) {
        actionHandler(creep, 'build');
    } else {
        actionHandler(creep, 'harvest');
    }
};

module.exports = roleBuilder;