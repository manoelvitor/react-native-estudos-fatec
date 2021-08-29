import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={
          {
            backgroundColor: '#2E2E2E',
            height: 1000
          }
        }
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: 'white',
            padding: 20
          }}

        >
          Manoel Vitor

        </Text>

        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/61368426?v=4' }}
          style={{
            width: 250, height: 250,
            flexDirection: 'column',
            marginLeft: 80,
            marginTop: 20,
            borderRadius: 150


          }}
        />

        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}

        >
         Idade: 28

        </Text>

        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}

        >
        Residente: São Vicente/SP

        </Text>
        
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 0
          }}

        >
         Formação: Sistemas Para Internet

        </Text>

        
        
        
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}

        >
         Experiência Profissional: Estagiário em Desenvolvimento de Sistemas, ModalGR

        </Text>

   


        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}
          
        >
        GitHub:  https://github.com/manoelvitor

        </Text>
      </View>





    )
  }
}

export default App;