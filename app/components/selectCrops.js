import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

let styles

const SelectCrops = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  // console.log(people)
  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <Text>display crops here!</Text>
    </View>
  )
}



function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
   
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
)(SelectCrops)