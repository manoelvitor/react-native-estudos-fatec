import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image, ScrollView } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        { id: 1, name: 'Notebook HP Probook i5 3', price: "1200,00" , img: 'https://www.91-img.com/pictures/laptops/hp/hp-4540s-b8z31pa-core-i5-3rd-gen-8-gb-500-gb-dos-6383-large-1.jpg' },
        { id: 2, name: 'Tablet Amazon Fire 7', price: "700,00", img: 'https://cf.shopee.com.br/file/a8258f580b6082a1370714b79565b389' },
        { id: 3, name: 'Iphone 6s 32g', price: "980,00", img: 'https://http2.mlstatic.com/D_NQ_NP_817644-MLA43712584146_102020-O.jpg' },

      ]
    }
  }

  render() {
    return (


      <View style={styles.container}>
        <Text style={styles.h1}>
          Anúncios
        </Text>
        <FlatList
          horizontal={true}
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Produto registro={item} />}
        />

      </View>


    )
  }
}


class Produto extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: `${this.props.registro.img}` }}
          style={{
            width: 300, height: 200,

          }}
        />
        <Text>Preço: R$ {this.props.registro.price}</Text>
        <Text>Nome: {this.props.registro.name}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor:'#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold'

  }

})

export default App;


