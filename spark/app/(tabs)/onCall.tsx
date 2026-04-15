import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  
} from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OnCall() {
  const router = useRouter();

  const [focused, setFocused] = useState(true);
  

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
        <View style={styles.callCard}>
    
            {/* Top row */}
            <View style={styles.callHeader}>
                <Text style={styles.callStatus}>✦ On Call</Text>
                <View style={styles.timer}>
                    <Text style={styles.callTime}>3:22</Text>
                    <Ionicons name="hourglass-outline" size={15} color="#334b6c" />
                </View>
                
            </View>

            {/* User info */}
            <Text style={styles.name}>Joe, 26</Text>
            <Text style={styles.location}>Montreal, QC</Text>

            {/* Sound waves (simple bars) */}
            <View style={styles.waveContainer}>
            {[...Array(15)].map((_, i) => (
                <View
                key={i}
                style={[
                    styles.waveBar,
                    { height: 20 + Math.random() * 40 }
                ]}
                />
            ))}
            </View>

            {/* Bio */}
            <Text style={styles.bio}>
            "Architecture enthusiast who believes the best conversations happen after midnight."
            </Text>

        </View>
      </View>

      <View style={styles.chatOptions}>
        <View>
          <Pressable onPress={() => setFocused(!focused)}>
            <Ionicons
              name={focused ? 'mic-outline' : 'mic-off-outline'}
              size={70}
              color={focused ? "#467bbc" : 'red'}
            />
          </Pressable>
        </View>

        <View style={styles.declineMatch}>
          
          <View>
            <Pressable onPress={() => router.push('./index')} style={styles.individualChat}>
            <Image
              source={require('../../assets/images/declineCall.png')}
              style={styles.chatImages}
            />
            <Text>Decline</Text>
          </Pressable>
          </View>

          <View>
            <Pressable onPress={() => router.push('./index')} style={styles.individualChat}>
            <Image
              source={require('../../assets/images/AudioTab.png')}
              style={styles.chatImages}
            />
            <Text>Match</Text>
          </Pressable>
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatOptions: {
    flex: 1,
    marginHorizontal:20,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  declineMatch: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  chatImages:{
    height: 80,
    width: 80,
  },
  individualChat: {
    justifyContent: 'center',   // vertical alignment inside parent
    alignItems: 'center',
  },
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
    backgroundColor: '#0000',
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
  callCard: {
  width: '100%',
  borderRadius: 20,
  backgroundColor: '#d5e2e8',
  padding: 20,
},

callHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},

callStatus: {
  fontSize: 14,
  color: '#334b6c',
},

callTime: {
  fontSize: 14,
  color: '#334b6c',
},

name: {
  fontSize: 20,
  fontWeight: '700',
  color: '#334b6c',
  textAlign: 'center',
},

location: {
  fontSize: 14,
  color: '#334b6c',
  textAlign: 'center',
  marginBottom: 20,
},

waveContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: 6,
  marginBottom: 20,
},

waveBar: {
  width: 4,
  backgroundColor: '#334b6c',
  borderRadius: 2,
},

bio: {
  textAlign: 'center',
  color: '#334b6c',
  fontSize: 14,
  lineHeight: 20,
  paddingHorizontal: 50,
},
timer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    marginBottom: 20,
}
});