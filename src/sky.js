class Sky {
    constructor(world) {
        this.world = world;
        this.stellarObjects = this.world['stellar_objects'];
    }
    updateSunPosition() {
        if (
            this.stellarObjects.sun.angle + this.stellarObjects.sun.speed >=
            360
        ) {
            this.stellarObjects.sun.angle = 0;
        } else {
            this.stellarObjects.sun.angle += this.stellarObjects.sun.speed;
        }
    }
    updateMoonPosition() {
        if (
            this.stellarObjects.moon.angle + this.stellarObjects.moon.speed >=
            360
        ) {
            this.stellarObjects.moon.angle = 0;
        } else {
            this.stellarObjects.moon.angle += this.stellarObjects.moon.speed;
        }
        this.updateMoonPhase(this.stellarObjects.moon.angle);
    }
    updateMoonPhase(degree) {
        if (degree === 0 || degree < 90) {
            // 0/0
            this.stellarObjects.moon.phase = 0;
        } else if (degree === 90 || degree < 180) {
            // 1/0
            this.stellarObjects.moon.phase = 1;
        } else if (degree === 180 || degree < 270) {
            // 1/1
            this.stellarObjects.moon.phase = 2;
        } else if (degree === 270 || degree < 360) {
            // 0/1
            this.stellarObjects.moon.phase = 3;
        }
    }
}

module.exports = Sky;
