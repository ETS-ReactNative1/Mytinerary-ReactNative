import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Stack from '../Navigation/Stack';
import citiesActions from '../../redux/actions/citiesAction';
import itinerariesActions from '../../redux/actions/itinerariesAction';

function CityDetails(props) {
  const [card, setCard] = useState()
  const { id } = props.route.params

  console.log(props)

  useEffect(() => {
    props.fetchearUnaCiudad(id)
      .then(response => setCard(response))

    console.log("soy el console log de props " + card)

    props.filterItinerarieForCity(id)
  }, [id])

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Comments')}

          title="Comments"
          fontFamily='serif'
          style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#17F5F9", width: 70, height: 45, borderRadius: 20, marginLeft: 190, marginRight: "auto" }}


        ><Text style={{ color: "#000", fontSize: 30, alignSelf: 'center' }}>💬</Text>
        </TouchableOpacity>
      ),
    });
  }, [])

  return (
    <ScrollView style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', width: '100%' }}>
      <View style={styles.container}>
        <Image source={{ uri: card?.image }} style={styles.image} />
        <Text style={styles.text}>{card?.name}</Text>
      </View>

      <View>

        {props.itineraries.length ? (
          props.itineraries?.map(itinerary =>
            <View style={styles.itineraryContainer} key={itinerary._id}>
              <View style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', marginVertical: 10, }}>
                <Image
                  source={{ uri: itinerary?.imageUser }}
                  style={styles.imageItinerary}
                />
              </View>
              <Text style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: '#fff', marginBottom: 30, }}>
                {itinerary?.nameUser}
              </Text>

              <Text style={{ fontFamily: 'serif', fontSize: 20, textAlign: 'center', color: '#fff', marginBottom: 30, }}>
                {itinerary?.event}
              </Text>

              <Text style={{ fontFamily: 'serif', fontSize: 20, textAlign: 'justify', color: '#fff', marginBottom: 15, paddingLeft: 20, }}>
                Price: {"💵".repeat(parseInt(itinerary?.price))}
              </Text>

              <Text style={{ fontFamily: 'serif', fontSize: 20, textAlign: 'justify', color: '#fff', marginBottom: 15, paddingLeft: 20, }}>
                {itinerary?.duration}
              </Text>

              <Text style={{ fontFamily: 'serif', fontSize: 15, textAlign: 'justify', color: '#fff', marginTop: 35, paddingLeft: 20, }}>
                {itinerary?.hashtag}
              </Text>

            </View>



          )
        ) : (
          <View style={{ display: 'flex', width: '100%', flexDirection: 'column', backgroundColor: '#17F5F9' }}>
            <Text style={{ fontSize: 30, backgroundColor: "#e29578", marginVertical: 20, width: '80%', fontFamily: 'serif', borderRadius: 20, borderWidth: 2, borderColor: '#fff', textAlign: 'center', padding: 10, alignSelf: 'center' }}>Sorry Zeta still does not have itineraries for this city.</Text>
            <Image
              source={require('../../assets/robot-nofound.png')}
              style={{ width: 300, height: 300, alignSelf: 'center', marginVertical: 30, }}
            />
          </View>

        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 300,
    marginBottom: 30,

  },
  image: {
    width: "100%",
    height: "100%",

  },
  text: {
    width: "100%",
    alignSelf: 'center',
    color: "#17F5F9",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'serif',
    backgroundColor: "#000000b0",
    zIndex: 10,
    position: "absolute",
    bottom: "20%",

  },
  itineraryContainer: {
    backgroundColor: '#000',
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    width: '90%',
    minHeight: 500,
    borderRadius: 20,
    marginBottom: 30,
    borderColor: '#17F5F9',
    borderWidth: 5,
  },
  imageItinerary: {
    width: 130,
    height: 130,
    borderRadius: 100,

  }
});

const mapDispatchToProps = {
  fetchearUnaCiudad: citiesActions.fetchearUnaCiudad,
  filterItinerarieForCity: itinerariesActions.filterItinerarieForCity,
}

const mapStateToProps = (state) => {

  return {
    itineraries: state.itinerariesReducer.itineraries
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CityDetails);