// Components/Search.js

import React from 'react'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { StyleSheet, View, TextInput, Button, Text ,FlatList,Image } from 'react-native'
import { setStatusBarBackgroundColor } from 'expo-status-bar'


class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}><Image style={styles.logo} source={{uri:"https://image.freepik.com/vecteurs-libre/cinema-logo_23-2147503279.jpg?1"}}/>CINEMOOVIES</Text>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
    )
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

export default Search