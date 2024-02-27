import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || pesoFloat <= 0 || alturaFloat <= 0) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const imc = pesoFloat / (alturaFloat * alturaFloat);
    let resultadoIMC = '';

    if (imc < 18.5) {
      resultadoIMC = 'Abaixo do peso';
    } else if (imc < 25) {
      resultadoIMC = 'Peso normal';
    } else if (imc < 30) {
      resultadoIMC = 'Sobrepeso';
    } else if (imc < 35) {
      resultadoIMC = 'Obesidade Grau 1';
    } else if (imc < 40) {
      resultadoIMC = 'Obesidade Grau 2';
    } else {
      resultadoIMC = 'Obesidade Grau 3';
    }

    setResultado(`Valor do IMC: ${imc.toFixed(2)} - ${resultadoIMC}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        placeholder="Digite seu peso (kg)"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        placeholder="Digite sua altura (m)"
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
