import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';

export default function HomeScreen() {
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
        <Text style={styles.title}>Ready to talk ?</Text>
        <Text style={styles.subtitle}>Just be yourself.</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start search</Text>
        </Pressable>

        <Image
          source={require('../../assets/images/test.png')}
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.bottomText}>
          Connect with someone{'\n'}
          for a <Text style={styles.boldBlue}>5 Minute</Text> blind call
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
  },
  boldBlue: {
    fontWeight: '700',
  },
});