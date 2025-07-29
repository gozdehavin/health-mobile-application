// 📄 src/screens/AppScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from '../assets/images'; // ✅ doğru: screens → src/assets/images.ts

const AppScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Arka plan resmi */}
      <Image source={Images.background} style={styles.background} />

      {/* Panda karakteri */}
      <Image source={Images.logo} style={styles.logo} />

      {/* Başlık ve buton */}
      <Text style={styles.title}>Earn rewards for every step you take.</Text>
      <Text style={styles.subtitle}>
        More than tracking transform walking into winning.
      </Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppScreen;

// Stiller (değişmeden kalır)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  panda: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 30,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FF7F50',
    fontSize: 18,
    fontWeight: 'bold',
  },
});