// App.js

import React from 'react'
import Search from './Components/Search'

export default class App extends React.Component {
  render() {
    return (
      <Search/>
    )
  }
}

// import * as React from "react";

// import { Card } from "react-native-elements";
// import { View, Image,Text,ImageBackground } from "react-native";
// import { render } from "react-dom";

// class App extends React.Component{
//   constructor(props){
//     super(props);
    
//     this.state = {
//       films: [], qte: 1 
//     }
//     this.render()
//   }

//   componentDidMount(){
//     console.log('test1');
//     fetch('https://192.168.1.17:5001/films', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       this.setState({
//         films: data
//       }, console.log('test'))
//     })
//     .catch(err => {
//       console.log(err)
//     });
//   }

//   render(){
//     return (
//     //   <ImageBackground source={'https://img.imageboss.me/cdn/https://www.sleeplessmedia.com/wp-content/themes/sleepless/includes/img/homeLumeStars.jpg'} style={{width: '100%', height: '100%'}}>
//     //   <Text>Inside</Text>
//       //  </ImageBackground>
//       <Text>Hello !</Text>
//     );
//   }
// }

// export default App;