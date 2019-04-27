<img alt="React Native Animation Layout" src="https://github.com/WrathChaos/react-native-animation-layout/blob/master/assets/logo.png" width="1050"/>

Custom & Ready to GO partially customizable Animation Layouts for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-animation-layout.svg)](https://www.npmjs.com/package/react-native-animation-layout)
[![npm](https://img.shields.io/npm/dt/react-native-animation-layout.svg)](https://www.npmjs.com/package/react-native-animation-layout)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Animation Layout" src="https://github.com/WrathChaos/react-native-dynamic-search-bar/blob/master/assets/Screenshots/SearchGIF.gif" width="49.7%"/>
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-animation-layout
```


## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

## Important Note for Android : 
If you want to use LayoutAnimation on Android, you need to enable LayoutAnimations for Android. Here is how to do it:  

```ruby
import {UIManager} from 'react-native';

constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
```

## Basic Usage

```ruby
import { CustomLayoutSpring } from "react-native-animation-layout";

// Simpliest way of adding the layout animation
componentWillUpdate() {         
  LayoutAnimation.configureNext(CustomLayoutSpring());  
}
 
 OR

// Put this code where you need to update your list or component
LayoutAnimation.configureNext(CustomLayoutSpring());

```

## Configuration - Props

### CustomLayoutSpring: 


| Property            |   Type    |      Default      | Description                                                                       |
| ------------------- | :-------: | :---------------: | --------------------------------------------------------------------------------- |
| duration            |  number   |        700        | change the animation duration as millisecond                                      |
| springDamping       |  number   |        13         | change the font size                                                              |

### CustomLayoutLinear : 


| Property            |   Type    |      Default      | Description                                                                       |
| ------------------- | :-------: | :---------------: | --------------------------------------------------------------------------------- |
| duration            |  number   |        700        | change the animation duration as millisecond                                      |



### ToDos

- [x] LICENSE
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Animation Layout Library is available under the MIT license. See the LICENSE file for more info.
