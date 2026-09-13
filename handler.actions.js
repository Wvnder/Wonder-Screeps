const creepSpeak = require('creep.speak');

const actionHandler = {
    //** @param {Creep, actionType} creep, actionType **/
    run: function (creep, actionType) {
        switch (actionType) {
            case 'harvest':
                //find source
                const sources = creep.room.find(FIND_SOURCES);
                // move to and harvest from source
                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
                    creepSpeak.run(creep, 'harvest');
                }
                break;
            case 'deposit':
                //find closest spawn or extension
                const depositTargets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
                //move to and transfer energy to spawn or extension
                if (creep.transfer(depositTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(depositTargets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                    creepSpeak.run(creep, 'deposit');
                }
                break;
            case 'upgrade':
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffffff' } } );
                    creepSpeak.run(creep, 'upgrade');
                }
                break;
            case 'build':
                //find closest construction site
                const buildTargets = creep.room.find(FIND_CONSTRUCTION_SITES);
                //if there is a construction site, build it
                if(buildTargets.length) {
                    if(creep.build(buildTargets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(buildTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                        creepSpeak.run(creep, 'build');
                    }
                }
                break;
            
        }
    }
};

module.exports = actionHandler;