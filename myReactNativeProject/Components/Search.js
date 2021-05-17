// Components/Search.js

import React, {useState} from 'react'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { StyleSheet, View, TextInput, Button, Text ,FlatList,Image,Switch } from 'react-native'


class Search extends React.Component {
  
  render() {
    //const App = () => {
      //const [isEnabled, setIsEnabled] = useState(false);
      const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}><Image style={styles.logo} source={{uri:"https://image.freepik.com/vecteurs-libre/cinema-logo_23-2147503279.jpg?1"}}/>CINEMOOVIES</Text>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
       // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        //value={isEnabled}
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