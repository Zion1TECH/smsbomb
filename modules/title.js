function console_title(x) {

    if (process.platform == 'win32') {

        process.title = x + " / TurkHackTeam v1.0 - github.com/Zion1TECH";

    } else {

        process.stdout.write('\x1b]2;' + x + " / TurkHackTeam v1.0 - github.com/Zion1TECH" + '\x1b\x5c');

    }

}



module.exports = console_title;
