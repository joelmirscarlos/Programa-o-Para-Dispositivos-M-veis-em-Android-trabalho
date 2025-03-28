import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';

const App = () => {
  const [decimalInput, setDecimalInput] = useState('');

  const handlePress = () => {
    if (!/^\d{7}$/.test(decimalInput)) {
      Alert.alert('Erro', 'Digite exatamente 7 números decimais.');
      return;
    }

    const decimalValue = parseInt(decimalInput, 10);
    const hexValue = decimalValue.toString(16).toUpperCase();
    const url = `https://geolocalizacao.sejusp.ms.gov.br/dispositivos/${hexValue}`;

    Linking.openURL(url).catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir o navegador.')
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Geo SEJUSP MS</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite 7 números decimais"
        keyboardType="numeric"
        maxLength={7}
        value={decimalInput}
        onChangeText={setDecimalInput}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Abrir Geolocalização</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
