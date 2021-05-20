// Components/FilmItem.js
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {

  render() {
    const film = this.props.film

    return (
        <View style={styles.main_container}>
          <Image
            style={styles.image}
            source={{uri:film.image}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{film.film_Nom}</Text>
              <Text style={styles.duree}> Durée : {film.film_Durée}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>{film.film_Description}</Text>
            </View>
            <View style={styles.date_container}>
              <Text style={styles.horaire}>Horaires : {film.film_Horraires}</Text>
            </View>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    marginBottom: 10 ,
    

  },
  image: {
    width: 130,
    height: 190,
    margin: 2,
    borderColor: '#000000',
    borderWidth: 2,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 2
    
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    color: '#FFFFFF',
    flexWrap: 'wrap',
    paddingRight: 5
  },
  duree: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#DED6D6'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#DED6D6'
  },
  date_container: {
    flex: 1
  },
  horaire: {
    textAlign: 'right',
    fontSize: 12,
    color: '#DED6D6'
  }
})

export default FilmItem