# Sky

### Usage

```javascript
let world = undefined;
const Sky = require('./src/sky/sky');
const sky = new Time(world);
```

### Attributes

`world` - World JSON configuration file

### Methods

`updateSunPosition()` - Moves the Sun by a predifined value in world JSON config file
`updateMoonPosition()` - Moves the Moon by a predifined value in world JSON config file
`updateMoonPhase(degrees)` - Sets the phase of the Moon according to entered angle (in degrees)

### Variables

`world` - Updated world file, which can be saved in order to apply changes

### Contributors

###### The-Lonely-Dev
