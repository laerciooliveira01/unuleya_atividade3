import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Button, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

const App = () => {
  const [nmParticipante, setNmParticipante] = useState('');
  const [resultado, setResultado] = useState();
  const [participantes, setParticipantes] = useState(["João Paulo", "Ana Maria", "José Carlos", "Miguel Oliveira", "Tamires Cavalcante", "Vinícius Dantas"]);


  const addParicipante = () => {
    if (nmParticipante) {
      setParticipantes(participantes.concat(nmParticipante));
      setNmParticipante('');
    } else {
      alert('Digite o nome do participante.');
    }
  }

  const limpar = () => {
    setParticipantes([]);
    setResultado();
  }

  const removerParticipante = (participante) => {
    setParticipantes(participantes.filter(item => item != participante));
  }

  const sortear = () => {
    if (participantes.length > 0) {
      const min = Math.ceil(1);
      const max = Math.floor(participantes.length);

      const result = Math.floor(Math.random() * (max - min)) + min;
      setResultado(participantes[result]);
    } else {
      alert('É preciso informar os participantes.');
    }
  }

  return (

    <View style={{ height: "100%", backgroundColor: '#ffefd5', paddingTop: 5 }}>
      <View style={{ padding: 5, height: 100, }}>
        <Image source={require('./img/sort.png')} style={{ height: "90%", width: "90%" }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 5, height: 40, }}>
        <TextInput style={{ backgroundColor: "#fff", borderRadius: 10, fontWeight: 'bold', width: "100%" }}
          placeholder="Nome do participante..."
          onChangeText={(value) => setNmParticipante(value)}
          value={nmParticipante} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 5 }}>
        <TouchableOpacity style={{ height: 30, justifyContent: 'center', backgroundColor: "#32cd32", borderRadius: 10, width: "50%", marginRight: 5 }} onPress={addParicipante}>
          <Text style={{ color: '#f0fff0', fontWeight: 'bold', textAlign: 'center' }}>Adicionar Participante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 30, justifyContent: 'center', backgroundColor: "#df4d55", borderRadius: 10, width: "50%" }} onPress={limpar}>
          <Text style={{ color: '#f0fff0', fontWeight: 'bold', textAlign: 'center' }}>Limpar Lista</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 3 }}>
        <TouchableOpacity style={{ height: 30, justifyContent: 'center', backgroundColor: "#0d6e79", borderRadius: 10, width: "100%" }} onPress={sortear}>
          <Text style={{ color: '#f0fff0', fontWeight: 'bold', textAlign: 'center' }}>Realizar Sorteio</Text>
        </TouchableOpacity>
      </View>
      {resultado ?
        <View style={
          {
            backgroundColor: '#ff0000',
            marginBottom: 3,
            marginTop: 10,
            justifyContent: 'center',
            borderRadius: 5,
            margin: 3
          }
        }>
          <Text style={{ color: '#fff', marginLeft: 5, fontWeight: 'bold', fontSize: 30 }}>
            Vencedor: {resultado}
          </Text>
        </View>
        :
        <View style={{ flex: 1 }}>
          <FlatList data={participantes}
            renderItem={({ item }) => (
              <View style={estilos.view1}>
                <View style={estilos.view2}>
                  <Text style={estilos.item}>{item}</Text>
                </View>
                <TouchableHighlight key={item} onPress={() => { removerParticipante(item) }}>
                  <Image source={require('./img/dell.png')} style={{ height: 25, width: 25}} />
                </TouchableHighlight>
              </View>
            )} />
        </View>
      }
    </View>
  );
}

const estilos = StyleSheet.create({
  item: {
    marginLeft: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
  }, 
  view1: {
    height: 30,
    backgroundColor: '#5abfb8',
    marginBottom: 3,
    justifyContent: 'center',
    borderRadius: 5,
    margin: 3,
    flexDirection: "row",
  },
  view2: {
    flexDirection: "column",
    justifyContent: 'center',
    flex: 10
  },
  textDelete: {
    marginHorizontal: 20,
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  }
});

export default App;
