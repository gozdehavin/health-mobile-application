import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../types/navigation';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Geri Butonu */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>❮</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Log in</Text>
      <Text style={styles.description}>
        By logging in, you agree to our{' '}
        <Text style={styles.termsLink}>Terms of Use.</Text>
      </Text>

      <TextInput
        placeholder="Your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.emailHint}>
        We will send you an e-mail with a login link.
      </Text>

      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>

      <View style={styles.orSeparator}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orLine} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>
          <Text style={styles.googleIcon}>G</Text> Sign in with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>
          <Text style={styles.facebookIcon}>f</Text> Sign in with Facebook
        </Text>
      </TouchableOpacity>

      <Text style={styles.privacyPolicy}>
        For more information, please see our{' '}
        <Text style={styles.termsLink}>Privacy policy.</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 80,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  termsLink: {
    color: '#FF7F50',
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  emailHint: {
    fontSize: 12,
    color: '#999',
    marginBottom: 20,
  },
  connectButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  socialButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
  },
  googleIcon: {
    fontSize: 20,
    color: '#DB4437',
    marginRight: 10,
  },
  facebookIcon: {
    fontSize: 20,
    color: '#1877F2',
    marginRight: 10,
  },
  privacyPolicy: {
    fontSize: 12,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
});