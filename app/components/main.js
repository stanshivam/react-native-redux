import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from '../actions'

let styles

const Main = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  const { people, isFetching } = props.people;
  // console.log(people)
  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button} onPress={() => props.getPeople()}>
        <Text style={buttonText}>Load People</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <TouchableOpacity key={i} onPress={() => props.getPeople(person)}>
            <View  >
              <Text>Name: {person.name}</Text>
              <Text>Mass: {person.mass}</Text>
              <Text>Birth Year: {person.birth_year}</Text>
            </View></TouchableOpacity>
          })
        ) : null
      }
    </View>
  )
}



function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: (person) => {
      console.log(person)
      dispatch(fetchPeopleFromAPI())
    }
  }
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)