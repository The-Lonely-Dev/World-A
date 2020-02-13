const [Time, Sky, Weather, fs] = [
    require('./src/time'),
    require('./src/sky'),
    require('./src/weather'),
    require('fs')
];

const ITERATION_LOG = 250;
let currIteration = 0;

setInterval(() => {
    // Loads world file
    const world = JSON.parse(fs.readFileSync('./main/world.json'));

    // Loads classes
    const sky = new Sky(world);
    const time = new Time(world);
    const weather = new Weather(world);

    // Stellar objects
    sky.updateSunPosition();
    sky.updateMoonPosition();
    fs.writeFileSync('./main/world.json', JSON.stringify(sky.world));

    // Time
    time.update();

    // Weather
    weather.updateHumidity();
    fs.writeFileSync('./main/world.json', JSON.stringify(weather.world));

    currIteration++;
    if (currIteration === ITERATION_LOG) {
        console.log(`World's status in the Earth's time of ${new Date()}`);
        console.log(world);
        currIteration = 0;
    }
}, 10);
