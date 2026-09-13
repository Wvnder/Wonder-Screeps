const speakHandler = {
    //** @param {Creep, message} creep, message **/
    run: function (creep, message) {
        switch (message) {
            case 'harvest':
                creep.say('🔄harvest');
                break;
            case 'deposit':
                creep.say('🔄deposit');
                break;
            case 'upgrade':
                creep.say('⚡upgrade');
                break;
            case 'build':
                creep.say('🚧build');
                break;
        }
    }
};

module.exports = speakHandler;