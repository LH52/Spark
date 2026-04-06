import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

export default function ConnectingCall() {
  
  const router = useRouter();

    
    useFocusEffect(
      useCallback(() => {
        const timer = setTimeout(() => {
        
          router.replace('/onCall');
        
      }, 5000);

        return () => {
          // Logic when LEAVING the screen (blur or unmount)
          clearTimeout(timer);
        };
      }, [])
    );

    

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require('../../assets/images/SparkLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Finding your next conversation...</Text>
        <Text style={styles.subtitle}>Just be yourself.</Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Cancel search</Text> 
        </Pressable>

        <Image
          source={require('../../assets/images/phoneBG.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
        <Text style={styles.bottomText}><Text style={styles.boldBlue}>
          Be ready !</Text>
        </Text>
        <Text style={{ fontSize: 17 }}>
          Calls last up to 5 minutes.
        </Text>
        <Text>
          <Text style={styles.boldBlue}>+</Text> Tip: Try to give a good first impression.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f0',
  },
  topBar: {
    height: 96,
    backgroundColor: '#d5e2e8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  logo: {
    width: 120
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 56,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 21,
    fontWeight: '700',
    color: '#334b6c',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#334b6c',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#d5e2e8',
    paddingVertical: 10,
    paddingHorizontal: 46,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#334b6c',
    fontWeight: '500',
  },
  illustration: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 24,
    color: '#4f7fcf',
    fontWeight: '400',
    paddingBottom: 4,
  },
  boldBlue: {
    fontWeight: '700',
  },
});