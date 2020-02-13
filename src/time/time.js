const fs = require('fs');

class Time {
    constructor(world) {
        this.world = world;
    }
    update() {
        // year increment
        if (this.world.time.month === 12) {
            this.world.time.year++;
            this.world.time.month = 0;
        }

        // month increment
        if (this.world.time.day === 30) {
            this.world.time.month++;
            this.world.time.day = 0;
        }

        // day increment
        if (this.world.time.hour === 23) {
            this.world.time.day++;
            this.world.time.hour = 0;
        }

        // hours increment
        if (this.world.time.minute === 59) {
            this.world.time.hour++;
            this.world.time.minute = 0;
        }

        // minute increment
        if (this.world.time.second === 59) {
            this.world.time.minute++;
            this.world.time.second = 0;
        } else {
            this.world.time.second++;
        }

        // saves updated file
        fs.writeFileSync('./main/world.json', JSON.stringify(this.world));
    }
}

module.exports = Time;
