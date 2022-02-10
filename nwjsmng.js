const processArguments = process.argv.slice(2);

function unknownCommand(){
    console.log('Unknown command. Use "nwjsmng help" to help.');
}

var commands = {
    install: function (arg) {

    },
    upgrade: function (arg) {
        commands.install(arg);
    },
    remove: function (arg) {
        
    },
    help: function () {
        console.log('Available commands: ' + Object.keys(commands).join(', '));
        console.log('To install/remove nwjs use "nwjsmng install nw" or "nwjsmng remove nw"');
    }
};

function command (cmd, arg){
    if(commands[cmd]){
        return commands[cmd](arg);
    }else{
        return unknownCommand();
    }
}

if (processArguments && processArguments.length > 0) {
    const arg = processArguments[1] || null;
    command(processArguments[0], arg);
}