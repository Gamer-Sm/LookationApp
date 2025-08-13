import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import firebase from '@react-native-firebase/app';

export default function App() {
  useEffect(() => {
    console.log('Firebase apps:', firebase.apps);
    if (firebase.apps.length) {
      console.log('✅ Firebase está inicializado');
    } else {
      console.log('❌ Firebase NO está inicializado');
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>🚀 Lookation App funcionando!</Text>
    </View>
  );
}
