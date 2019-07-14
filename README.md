<img alt="React Native Gradient Header" src="https://github.com/WrathChaos/react-native-gradient-header/blob/master/assets/logo.png" width="1050"/>

Fully customizable and unique shape Gradient Header for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-gradient-header.svg)](https://www.npmjs.com/package/react-native-gradient-header)
[![npm](https://img.shields.io/npm/dt/react-native-gradient-header.svg)](https://www.npmjs.com/package/react-native-gradient-header)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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
"react-native-linear-gradient": ">= 2.x.x",
"@freakycoder/react-native-helpers": ">= x.x.x",
"@react-native-community/status-bar": ">= 1.0.3"
```

## Basic Usage

```ruby
import GradientHeader from "react-native-gradient-header";

<GradientHeader />
```

## Advanced Usage
```ruby
import GradientHeader from "react-native-gradient-header";

<GradientHeader
  title="Title"
  subtitle="Have a nice day Kuray"
  gradientColors={["#00416A", "#E4E5E6"]}
  imageSource={require("./assets/profile.jpg")}
/>
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

- [x] LICENSE
- [ ] Expo Support (Coming Soon)
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Gradient Header Library is available under the MIT license. See the LICENSE file for more info.
