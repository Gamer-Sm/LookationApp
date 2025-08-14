// frontend/src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
    // Aquí conectarás con Firebase más adelante
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Logo */}
      <Image source={require('../assets/login-img.png')} style={styles.image} />

      {/* Título */}
      <Text style={styles.title}>¡Bienvenido a Lookation!</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#dfe6e9"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#dfe6e9"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>¿No tienes cuenta? <Text style={styles.linkBold}>Regístrate</Text></Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#0082FA' 
  },
  image: { 
    width: 140, 
    height: 140, 
    marginBottom: 20, 
    resizeMode: 'contain' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color: '#ffffff' 
  },
  subtitle: {
    fontSize: 14,
    color: '#dfe6e9',
    marginBottom: 20
  },
  input: { 
    width: '100%', 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#ffffff', 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    marginBottom: 15,
    color: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  button: { 
    backgroundColor: '#4CAF50', 
    paddingVertical: 15, 
    borderRadius: 12, 
    width: '100%', 
    alignItems: 'center',
    marginTop: 5
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  link: { 
    marginTop: 20, 
    color: '#ffffff', 
    fontSize: 14 
  },
  linkBold: {
    color: '#FFD700',
    fontWeight: 'bold'
  }
});

