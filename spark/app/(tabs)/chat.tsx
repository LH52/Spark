import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';

const messageHistory = {
  1: [
    { id: 1, sender: 'Elena', text: 'I really loved that place you mentioned...', time: '10:15 AM', isMe: false },
    { id: 2, sender: 'You', text: 'Right? The sunset was incredible!', time: '10:16 AM', isMe: true },
    { id: 3, sender: 'Elena', text: 'Do you have plans to go back soon?', time: '10:20 AM', isMe: false },
    { id: 4, sender: 'You', text: 'Definitely! Maybe next month. You should come with me', time: '10:22 AM', isMe: true },
    { id: 5, sender: 'Elena', text: 'I\'d love to! Let me check my schedule', time: '10:25 AM', isMe: false },
    { id: 6, sender: 'You', text: 'Great! Looking forward to it', time: '3:18 PM', isMe: true },
  ],
  2: [
    { id: 1, sender: 'Julian', text: 'How was your weekend at the coast?', time: '1:30 PM', isMe: false },
    { id: 2, sender: 'You', text: 'Amazing! Need to do it again soon', time: '1:34 PM', isMe: true },
    { id: 3, sender: 'Julian', text: 'Right? I found an awesome seafood place there', time: '1:38 PM', isMe: false },
    { id: 4, sender: 'You', text: 'Oh nice! What\'s the name?', time: '1:42 PM', isMe: true },
    { id: 5, sender: 'Julian', text: 'It\'s called Luna\'s. Highly recommend it ', time: '1:45 PM', isMe: false },
    { id: 6, sender: 'You', text: 'Adding it to my list! Want to go there next time?', time: '3:46 PM', isMe: true },
  ],
  3: [
    { id: 1, sender: 'Maya', text: 'That sounds like a plan. See you Friday!', time: '11:05 AM', isMe: false },
    { id: 2, sender: 'You', text: 'Absolutely! What time works for you?', time: '11:07 AM', isMe: true },
    { id: 3, sender: 'Maya', text: 'How about 7pm? There\'s a great jazz bar downtown', time: '11:10 AM', isMe: false },
    { id: 4, sender: 'You', text: 'Perfect! Love jazz', time: '11:13 AM', isMe: true },
    { id: 5, sender: 'Maya', text: 'Me too! They have live performers on Fridays', time: '11:15 AM', isMe: false },
    { id: 6, sender: 'You', text: 'Even better! This is going to be great', time: '1:20 PM', isMe: true },
  ],
  4: [
    { id: 1, sender: 'Marcus', text: 'Thanks for the recommendation!', time: '9:45 AM', isMe: false },
    { id: 2, sender: 'You', text: 'You\'re welcome! Hope you enjoyed it', time: '9:47 AM', isMe: true },
    { id: 3, sender: 'Marcus', text: 'It was fantastic! Best dinner I\'ve had in months', time: '9:55 AM', isMe: false },
    { id: 4, sender: 'You', text: 'Glad to hear! Let me know if you try their new menu', time: '10:03 AM', isMe: true },
    { id: 5, sender: 'Marcus', text: 'Will do! Want to grab dinner again soon?', time: '10:12 AM', isMe: false },
    { id: 6, sender: 'You', text: 'Definitely! Next weekend sounds good', time: '3:00 PM', isMe: true },
  ],
  5: [
    { id: 1, sender: 'Sophie', text: 'Haha, that\'s so true. Anyway...', time: '8:30 PM', isMe: false },
    { id: 2, sender: 'You', text: 'By the way, did you see that new movie yet?', time: '8:32 PM', isMe: true },
    { id: 3, sender: 'Sophie', text: 'Not yet! Which one are you talking about?', time: '8:35 PM', isMe: false },
    { id: 4, sender: 'You', text: 'The sci-fi one playing now. Supposed to be amazing 🎬', time: '10:15 AM', isMe: true },
    { id: 5, sender: 'Sophie', text: 'Ooh I\'ve heard good things! We should go see it together', time: '10:45 AM', isMe: false },
    { id: 6, sender: 'You', text: 'For sure! This weekend?', time: '2:30 PM', isMe: true },
  ],
};

export default function OpenChat() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [messageText, setMessageText] = useState('');
  
  const isNewChat = params?.isNewChat === 'true';
  const conversationId = parseInt(params?.conversationId as string) || null;
  const conversationName = (params?.conversationName as string) || 'Chat';
  const messages = isNewChat ? [] : (conversationId ? messageHistory[conversationId] || [] : []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.push('explore')} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#3d4f69" />
        </Pressable>
        <View style={styles.headerAvatar}>
          <Image
            source={require('../../assets/images/test.png')}
            style={styles.avatarImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{conversationName}</Text>
        </View>
        <Pressable style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#3d4f69" />
        </Pressable>
      </View>

      {/* Messages */}
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesList}>
        {messages.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="chatbubble-outline" size={48} color="#c0cad8" />
            <Text style={styles.emptyStateText}>Start the conversation!</Text>
          </View>
        ) : (
          messages.map((message) => (
            <View key={message.id} style={[styles.messageContainer, message.isMe ? styles.myMessageContainer : styles.theirMessageContainer]}>
              <View style={[styles.messageBubble, message.isMe ? styles.myMessage : styles.theirMessage]}>
                <Text style={[styles.messageText, message.isMe ? styles.myMessageText : styles.theirMessageText]}>
                  {message.text}
                </Text>
              </View>
              <Text style={styles.messageTime}>{message.time}</Text>
            </View>
          ))
        )}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>
        <Pressable style={styles.attachButton}>

        </Pressable>
        <TextInput
          style={styles.textInput}
          placeholder="Send a message..."
          placeholderTextColor="#D5E2E8"
          value={messageText}
          onChangeText={setMessageText}
          multiline
        />
        <Pressable style={styles.sendButton}>
          <Ionicons name="send" size={26} color="#344860" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f4',
  },
  header: {
    height: 70,
    backgroundColor: '#d5e2e8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 8,
    gap: 12,
  },
  backButton: {
    padding: 4,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 8,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3d4f69',
  },
  menuButton: {
    padding: 4,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messagesList: {
    paddingTop: 16,
    paddingBottom: 16,
    gap: 12,
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#344860',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#D5E2E8',
  },  messageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  myMessageContainer: {
    alignItems: 'flex-end',
  },
  theirMessageContainer: {
    alignItems: 'flex-start',
  },  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  myMessageText: {
    color: 'white',
  },
  theirMessageText: {
    color: '#3d4f69',
  },
  messageTime: {
    fontSize: 14,
    color: '#9ba8c0',
    marginTop: 2,
    paddingHorizontal: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'D5E2E8',
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 10,
  },
  attachButton: {
    padding: 2,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#344860',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 3,
    paddingBottom: 1,
    fontSize: 16,
    color: 'white',
    maxHeight: 100,
  },
  sendButton: {
    padding: 4,
    marginBottom: 5,
    color: '#344860',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#9ba8c0',
    marginTop: 12,
  },
});