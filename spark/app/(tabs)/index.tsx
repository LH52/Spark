import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Spark</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Joe, 26</Text>
        <Text style={styles.location}>Montreal, QC</Text>
      </View>

      <View style={styles.bioBox}>
        <Text style={styles.bio}>
          "Brief user written description"
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  location: {
    marginTop: 5,
    color: '#555',
  },
  bioBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#999',
  },
  bio: {
    fontStyle: 'italic',
    color: '#444',
  },
});