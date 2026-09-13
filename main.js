//modules
const memoryCleaner = require('utils.memorycleaner');
const roleHandler = require('handler.roles');
const spawnHandler = require('handler.spawns');
const turretHandler = require('handler.turrets');


// main game loop runs at 1 tick per second
module.exports.loop = function () {

    //clear memory of dead creeps
    memoryCleaner.run();

    //turret defence / repair
    turretHandler.run();

    //automate spawning of creeps
    spawnHandler.run();

    //iterate through all creeps
    roleHandler.run();
}