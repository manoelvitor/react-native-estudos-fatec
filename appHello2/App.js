import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class App extends Component {
  render() {
    return (
      <View>
        <Text>Ola Turma</Text>
        <Text>Primeiro App em React Native</Text>
        <Text style={{ color: '#585858' }}>React</Text>

        <Image
          source={{ uri: 'https://2.bp.blogspot.com/-9fnUjyYEFWs/VwK7d9zvq3I/AAAAAAAATf0/jaWUT47NAzcxcEiYsYZ_QmvhAy81oqWFg/s400/mc1.JPG' }}
          style={{ width: 300, height: 300 }}
        />
        <Text>Macgyver</Text>

      </View>

    )
  }

}

export default App;
