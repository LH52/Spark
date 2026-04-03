import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const matches = [
  { id: 1, name: 'Name' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Name' },
  { id: 4, name: 'Name' },
];

const conversations = [
  { id: 1, name: 'Name', message: 'Message' },
  { id: 2, name: 'Name', message: 'Message' },
  { id: 3, name: 'Name', message: 'Message' },
  { id: 4, name: 'Name', message: 'Message' },
  { id: 5, name: 'Name', message: 'Message' },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Spark</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.sectionTitle}>Matches</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.matchesRow}
          >
            {matches.map((item) => (
              <Pressable key={item.id} style={styles.matchCard}>
                <View style={styles.matchAvatar}>
                  <Ionicons name="person-outline" size={34} color="#111" />
                </View>
                <Text style={styles.matchName}>{item.name}</Text>
              </Pressable>
            ))}
          </ScrollView>

          <Text style={[styles.sectionTitle, styles.conversationsTitle]}>
            Conversations
          </Text>

          <View style={styles.conversationList}>
            {conversations.map((item) => (
              <Pressable key={item.id} style={styles.conversationItem}>
                <View style={styles.conversationAvatar} />

                <View style={styles.conversationTextWrap}>
                  <Text style={styles.conversationName}>{item.name}</Text>
                  <Text style={styles.conversationMessage}>{item.message}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    backgroundColor: '#ececec',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 14,
  },
  matchesRow: {
    gap: 16,
    paddingBottom: 8,
  },
  matchCard: {
    alignItems: 'center',
    width: 74,
  },
  matchAvatar: {
    width: 60,
    height: 72,
    borderWidth: 1.5,
    borderColor: '#555',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    marginBottom: 8,
  },
  matchName: {
    fontSize: 14,
    color: '#111',
  },
  conversationsTitle: {
    marginTop: 10,
  },
  conversationList: {
    gap: 18,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conversationAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#666',
    backgroundColor: '#efefef',
    marginRight: 14,
  },
  conversationTextWrap: {
    justifyContent: 'center',
  },
  conversationName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 2,
  },
  conversationMessage: {
    fontSize: 15,
    color: '#7a7a7a',
  },
});