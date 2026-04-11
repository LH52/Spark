import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const matches = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Maella' },
  { id: 3, name: 'Tam' },
  { id: 4, name: 'Angel' },
];

const conversations = [
  {
    id: 1,
    name: 'Elena, 26',
    message: 'I really loved that place you mentioned...',
    time: '2m ago',
  },
  {
    id: 2,
    name: 'Julian, 29',
    message: 'How was your weekend at the coast ?',
    time: '14m ago',
  },
  {
    id: 3,
    name: 'Maya, 24',
    message: 'That sounds like a plan.\nSee you Friday!',
    time: '2h ago',
  },
  {
    id: 4,
    name: 'Marcus, 31',
    message: 'Thanks for the recommendation !',
    time: '6h ago',
  },
  {
    id: 5,
    name: 'Sophie, 28',
    message: "Haha, that's so true. Anyway...",
    time: 'Yesterday',
  },
];

function ImagePlaceholder({ size = 64 }) {
  return (
    <View
      style={[
        styles.imagePlaceholder,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Ionicons name="image-outline" size={size * 0.38} color="#9aa4b2" />
    </View>
  );
}

export default function ExploreScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        {/* ✅ HEADER KEPT EXACTLY LIKE YOUR ORIGINAL */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/SparkLogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
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
              <Pressable key={item.id} style={styles.matchCard} onPress={() => router.push({ pathname: 'chat', params: { matchId: item.id, matchName: item.name, isNewChat: 'true' } })}>
                <View style={styles.matchAvatarWrap}>
                  <ImagePlaceholder size={68} />
                  <View style={styles.sparkBadge}>
                    <Ionicons name="sparkles" size={10} color="#5b7cff" />
                  </View>
                </View>

                <Text style={styles.matchName}>{item.name}</Text>
              </Pressable>
            ))}
          </ScrollView>

          <Text style={[styles.sectionTitle, styles.conversationsTitle]}>
            Conversations
          </Text>

          <View style={styles.conversationList}>
            {conversations.map((item, index) => (
              <Pressable key={item.id} style={styles.conversationItem} onPress={() => router.push({ pathname: 'chat', params: { conversationId: item.id, conversationName: item.name } })}>
                <View style={styles.conversationAvatarWrap}>
                  <ImagePlaceholder size={58} />
                  {index === 0 && (
                    <View style={styles.sparkBadgeSmall}>
                      <Ionicons name="sparkles" size={9} color="#5b7cff" />
                    </View>
                  )}
                </View>

                <View style={styles.conversationTextWrap}>
                  <Text style={styles.conversationName}>{item.name}</Text>
                  <Text style={styles.conversationMessage}>{item.message}</Text>
                </View>

                <Text style={styles.conversationTime}>{item.time}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  topbar: {
    flex: 1,
    backgroundColor: '#f4f3f6',
  },

  header: {
    height: 96,
    backgroundColor: '#d5e2e8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  logo: {
    width: 120,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#374f6c',
    marginBottom: 8,
  },

  matchesRow: {
    gap: 16,
    paddingBottom: 8,
  },

  matchCard: {
    width: 72,
    alignItems: 'center',
  },

  matchAvatarWrap: {
    position: 'relative',
    marginBottom: 6,
  },

  matchName: {
    fontSize: 12,
    color: '#55657c',
  },

  imagePlaceholder: {
    backgroundColor: '#e7ebf0',
    borderWidth: 1,
    borderColor: '#d4dbe3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sparkBadge: {
    position: 'absolute',
    top: 1,
    right: -4,
  },

  sparkBadgeSmall: {
    position: 'absolute',
    top: 0,
    right: -2,
  },

  conversationsTitle: {
    marginTop: 10,
  },

  conversationList: {
    gap: 18,
  },

  conversationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  conversationAvatarWrap: {
    position: 'relative',
    marginRight: 14,
  },

  conversationTextWrap: {
    flex: 1,
    paddingRight: 10,
    paddingTop: 2,
  },

  conversationName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#445d7a',
    marginBottom: 6,
  },

  conversationMessage: {
    fontSize: 14,
    lineHeight: 19,
    color: '#5f6f84',
  },

  conversationTime: {
    fontSize: 11,
    color: '#9aa4b2',
    paddingTop: 2,
  },
});