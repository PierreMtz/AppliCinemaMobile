// Components/Search.js

import React, {useState} from 'react'
import FilmItem from './FilmItem'
import { StyleSheet, View, Text ,FlatList,Image,Switch } from 'react-native'


class Search extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      films: []
    }
  }
  _loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => {
      this._films = data.results
      this.forceUpdate()
    })
 }
  componentDidMount(){
    fetch('https://cinemovieapi.azurewebsites.net/films', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        films: data
      },() => console.log(this.state.films))
    })
    .catch(err => {
      console.log(err)
    });
  }
  
  render() {
  
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}><Image style={styles.logo} source={{uri:"https://image.freepik.com/vecteurs-libre/cinema-logo_23-2147503279.jpg?1"}}/>CINEMOOVIES</Text>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
     );
    }
  }





const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
    backgroundColor : '#313131'
    
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderBottomWidth: 1,
    paddingLeft: 5
  },
   titre:{
     color: '#FFFFFF',
     fontStyle: 'italic',
     fontWeight: "bold",
     fontFamily: 'serif',
     textAlign: 'center',
     marginBottom: 10 ,
     borderColor: '#FFFFFF',

     borderWidth: 1,
     fontSize: 30,

   },
    logo: {
      width: 46,
      height: 38,
    }
  })

export default Search;