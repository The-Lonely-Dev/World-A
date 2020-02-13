class Weather {
    constructor(world) {
        this.world = world;
        this.weather = this.world.weather;
    }
    updateHumidity() {
        if (this.weather.status === 'sun') {
            if (
                this.weather['humidity_clouds'] <
                this.weather['humidity_clouds_critical']
            ) {
                // The humidity in clouds IS NOT critical
                this.weather['humidity_clouds'] += this.weather[
                    'humidity_clouds_increment'
                ];
            } else {
                // The humidity in clouds IS critical - it will rain
                this.weather.status = 'rain';
            }
        } else {
            // It's rainy!
            if (this.weather['humidity_clouds'] > 0) {
                // The humidity in clouds IS NOT equal to 0
                this.weather['humidity_clouds'] -= this.weather[
                    'humidity_clouds_rain speed'
                ];
            } else {
                // The humidity in clouds IS equal to 0, rain stops
                this.weather.status = 'sun';
            }
        }
    }
}

module.exports = Weather;
