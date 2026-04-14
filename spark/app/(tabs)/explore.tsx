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

const usersData = require('../../data/users.json');

// Image mapping for users
const userImages: { [key: number]: any } = {
  1: require('../../assets/images/usersImages/elena1.png'),
  2: require('../../assets/images/usersImages/julian1.png'),
  3: require('../../assets/images/usersImages/maya1.png'),
  4: require('../../assets/images/usersImages/marcus1.png'),
  5: require('../../assets/images/usersImages/sophie1.png'),
  6: require('../../assets/images/usersImages/anna1.png'),
  7: require('../../assets/images/usersImages/maella1.png'),
  8: require('../../assets/images/usersImages/tam1.png'),
  9: require('../../assets/images/usersImages/angel1.png'),
};

const matches = [
  { id: 6, name: 'Anna' },
  { id: 7, name: 'Maella' },
  { id: 8, name: 'Tam' },
  { id: 9, name: 'Angel' },
];

// Message previews for conversations
const conversationPreviews = {
  1: { message: 'I really loved that place you mentioned...', time: '2m ago' },
  2: { message: 'How was your weekend at the coast ?', time: '14m ago' },
  3: { message: 'That sounds like a plan.\nSee you Friday!', time: '2h ago' },
  4: { message: 'Thanks for the recommendation !', time: '6h ago' },
  5: { message: "Haha, that's so true. Anyway...", time: 'Yesterday' },
};

// Build conversations from user data (exclude users in matches)
const matchUserIds = matches.map(m => m.id);
const conversations = usersData
  .filter((user: any) => !matchUserIds.includes(user.id))
  .map((user: any) => ({
    id: user.id,
    userId: user.id,
    name: `${user.name}, ${user.age}`,
    message: conversationPreviews[user.id as keyof typeof conversationPreviews]?.message || '',
    time: conversationPreviews[user.id as keyof typeof conversationPreviews]?.time || '',
  }));

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

function UserImage({ size = 64, userId }) {
  if (userImages[userId]) {
    return (
      <Image
        source={userImages[userId]}
        style={[
          styles.userImage,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />
    );
  }

  return <ImagePlaceholder size={size} />;
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
            {matches.map((item) => {
              const user = usersData.find((u: any) => u.id === item.id);
              const displayName = user ? `${user.name}, ${user.age}` : item.name;
              
              return (
                <Pressable key={item.id} style={styles.matchCard} onPress={() => router.push({ pathname: '/(tabs)/chat', params: { conversationId: item.id, conversationName: displayName, userId: item.id } })}>
                  <View style={styles.matchAvatarWrap}>
                    <UserImage size={85} userId={item.id} />
                    <View style={styles.sparkBadge}>
                      <Ionicons name="sparkles" size={14} color="#5b7cff" />
                    </View>
                  </View>

                  <Text style={styles.matchName}>{item.name}</Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <Text style={[styles.sectionTitle, styles.conversationsTitle]}>
            Conversations
          </Text>

          <View style={styles.conversationList}>
            {conversations.map((item: any, index: number) => (
              <Pressable key={item.id} style={styles.conversationItem} onPress={() => router.push({ pathname: '/(tabs)/chat', params: { conversationId: item.id, conversationName: item.name, userId: item.userId } })}>
                <View style={styles.conversationAvatarWrap}>
                  <UserImage size={58} userId={item.userId} />
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
    width: 95,
    alignItems: 'center',
  },

  matchAvatarWrap: {
    position: 'relative',
    marginBottom: 6,
  },

  matchName: {
    fontSize: 15,
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

  userImage: {
    backgroundColor: '#e7ebf0',
    borderWidth: 1,
    borderColor: '#d4dbe3',
  },
});