<img alt="React Native Gradient Header" src="https://github.com/WrathChaos/react-native-gradient-header/blob/master/assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)

[![Fully customizable and unique shape Gradient Header for React Native](https://img.shields.io/badge/-Fully%20customizable%20and%20unique%20shape%20Gradient%20Header%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-gradient-header)

[![npm version](https://img.shields.io/npm/v/react-native-gradient-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-gradient-header)
[![npm](https://img.shields.io/npm/dt/react-native-gradient-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-gradient-header)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
<img alt="React Native Gradient Header" src="https://github.com/WrathChaos/react-native-gradient-header/blob/master/assets/Screenshots/example.png" width="49.7%" />
<img alt="React Native Gradient Header" src="https://github.com/WrathChaos/react-native-gradient-header/blob/master/assets/Screenshots/example1.png" width="49.7%" />
</p>
<p align="center">
<img alt="React Native Gradient Header" src="https://github.com/WrathChaos/react-native-gradient-header/blob/master/assets/Screenshots/example2.png" width="49.7%" />
<img alt="React Native Gradient Header" src="https://github.com/WrathChaos/react-native-gradient-header/blob/master/assets/Screenshots/example3.png" width="49.7%" height=200 />
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-gradient-header
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-linear-gradient": ">= 2.5.6",
"@freakycoder/react-native-helpers": ">= 0.1.2",
```

## Basic Usage

```jsx
import GradientHeader from "react-native-gradient-header";

<GradientHeader />;
```

## Advanced Usage

```jsx
import GradientHeader from "react-native-gradient-header";

<GradientHeader
  title="Title"
  subtitle="Have a nice day Kuray"
  gradientColors={["#00416A", "#E4E5E6"]}
  imageSource={require("./assets/profile.jpg")}
/>;
```

## Configuration - Props

| Property               |   Type    |              Default              | Description                                                                |
| ---------------------- | :-------: | :-------------------------------: | -------------------------------------------------------------------------- |
| title                  |  string   |               Today               | change the title                                                           |
| subtitle               |  string   |          Have a nice day          | change the subtitle                                                        |
| gradient               |  boolean  |               true                | if you do not want gradient background, simply make this prop false        |
| gradientColors         | [colors]  | ["#12c2e9", "#c471ed", "#f64f59"] | change the gradient colors                                                 |
| start                  |    x,y    |          { x: 0, y: 0 }           | change the gradient's direction of start                                   |
| end                    |    x,y    |          { x: 1, y: 0 }           | change the gradient's direction of end                                     |
| shapeColor             |   color   |              #ba75df              | change solid background color, it is available when gradient prop is false |
| imageSource            |   image   |           profile image           | change the circle image                                                    |
| imageOnPress           | function  |               null                | set the onPress function for profile image                                 |
| position               |   style   |                top                | set the background shape's position                                        |
| headerContentComponent | component |          chech the code           | set your own design for the header content                                 |
| shadowStyle            |   style   |              shadow               | set your own shadow style instead of the implemented one                   |
| shadowColor            |   color   |              "#000"               | change the shadow color                                                    |

### ToDos

- [x] ~~LICENSE~~
- [ ] Expo Support (Coming Soon)
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Gradient Header Library is available under the MIT license. See the LICENSE file for more info.
