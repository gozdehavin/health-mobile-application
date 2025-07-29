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

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>❮</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.description}>
        By signing up, you agree to our{' '}
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

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.orSeparator}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orLine} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>
          <Text style={styles.googleIcon}>G</Text> Sign up with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>
          <Text style={styles.facebookIcon}>f</Text> Sign up with Facebook
        </Text>
      </TouchableOpacity>

      <Text style={styles.privacyPolicy}>
        For more information, please see our{' '}
        <Text style={styles.termsLink}>Privacy policy.</Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;
