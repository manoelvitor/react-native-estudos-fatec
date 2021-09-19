import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image, ScrollView } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        { id: 1, name: 'Analista Desenvolvedor Backend Java Junior', salario: "3100,00", descricao: "Desenvolvedor Java com Spring Boot, desenvolver API'S, e documenta-lás", contato: "rh@devs.com" },
        { id: 2, name: 'Analista Desenvolvedor Front-End Angular Junior', salario: "3000,00", descricao: "Desenvolvedor Angular, será responsavel por modelar paginas e consumir API'S, e documenta-lás", contato: "rh@devs.com" },
        { id: 3, name: 'Engenheiro de Dados Senior', salario: "9000,00", descricao: "Engenheiro de Dados Senior, BI, Analise de Dados, Levantamento de dados", contato: "rh@devs.com" },
        { id: 4, name: 'Analista de Suporte Pleno', salario: "3900,00", descricao: "Analista de Suporte Pleno, será responsavel pela mantenimento da infra, atender a chamados e documentar os mesmos", contato: "rh@devs.com" },
        { id: 5, name: 'Analista Desenvolvedor Backend Java Junior', salario: "3100,00", descricao: "Desenvolvedor Java com Spring Boot, desenvolver API'S, e documenta-lás", contato: "rh@devs.com" },
        { id: 6, name: 'Analista Desenvolvedor Front-End Angular Junior', salario: "3000,00", descricao: "Desenvolvedor Angular, será responsavel por modelar paginas e consumir API'S, e documenta-lás", contato: "rh@devs.com" },
        { id: 7, name: 'Engenheiro de Dados Senior', salario: "9000,00", descricao: "Engenheiro de Dados Senior, BI, Analise de Dados, Levantamento de dados", contato: "rh@devs.com" },
        { id: 8, name: 'Analista de Suporte Pleno', salario: "3900,00", descricao: "Analista de Suporte Pleno, será responsavel pela mantenimento da infra, atender a chamados e documentar os mesmos", contato: "rh@devs.com" },
        { id: 9, name: 'Analista Desenvolvedor Backend Java Junior', salario: "3100,00", descricao: "Desenvolvedor Java com Spring Boot, desenvolver API'S, e documenta-lás", contato: "rh@devs.com" },
        { id: 10, name: 'Analista Desenvolvedor Front-End Angular Junior', salario: "3000,00", descricao: "Desenvolvedor Angular, será responsavel por modelar paginas e consumir API'S, e documenta-lás", contato: "rh@devs.com" },
        { id: 11, name: 'Engenheiro de Dados Senior', salario: "9000,00", descricao: "Engenheiro de Dados Senior, BI, Analise de Dados, Levantamento de dados", contato: "rh@devs.com" },
        { id: 12, name: 'Analista de Suporte Pleno', salario: "3900,00", descricao: "Analista de Suporte Pleno, será responsavel pela mantenimento da infra, atender a chamados e documentar os mesmos", contato: "rh@devs.com" },

      ]
    }
  }

  render() {
    return (


      <View style={styles.container}>
        <Text style={styles.h1}>
          Vagas
        </Text>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Vaga registro={item} />}
        />
      </View>


    )
  }
}


class Vaga extends Component {
  render() {
    return (
      <View style={styles.boxView}>

        <Text style={{
          fontSize: 25
        }}>{this.props.registro.name}</Text>
        <Text>Salario: {this.props.registro.salario}</Text>
        <Text>Descrição: {this.props.registro.descricao}</Text>
        <Text>Contato: {this.props.registro.contato}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,

  },
  h1: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold'

  },
  boxView: {
    margin: 20,
    backgroundColor: '#aff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 30,
  }

})

export default App;


