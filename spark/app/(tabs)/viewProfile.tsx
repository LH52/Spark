import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';

const usersData = require('../../data/users.json');

// Static image map for dynamic loading
const imageMap: { [key: string]: any } = {
  '../../assets/images/elena.png': require('../../assets/images/usersImages/elena1.png'),
  '../../assets/images/usersImages/elena1.png': require('../../assets/images/usersImages/elena1.png'),
  '../../assets/images/usersImages/julian1.png': require('../../assets/images/usersImages/julian1.png'),
  '../../assets/images/usersImages/julian2.png': require('../../assets/images/usersImages/julian2.png'),
  '../../assets/images/usersImages/julian3.png': require('../../assets/images/usersImages/julian3.png'),
  '../../assets/images/usersImages/marcus1.png': require('../../assets/images/usersImages/marcus1.png'),
  '../../assets/images/usersImages/maya1.png': require('../../assets/images/usersImages/maya1.png'),
  '../../assets/images/usersImages/sophie1.png': require('../../assets/images/usersImages/sophie1.png'),
  '../../assets/images/test.png': require('../../assets/images/test.png'),
};

export default function ViewProfile() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToImage = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'right' ? currentImageIndex + 1 : currentImageIndex - 1;
    if (nextIndex >= 0 && nextIndex < (user?.pictures?.length || 0)) {
      scrollViewRef.current?.scrollTo({
        x: nextIndex * 400, // Adjust based on screen width
        animated: true,
      });
      setCurrentImageIndex(nextIndex);
    }
  };

  // Get user data from params or find by userId
  let user = null;
  
  if (params?.userData) {
    try {
      user = JSON.parse(params.userData as string);
    } catch (e) {
      // If userData can't be parsed, try to find by userId
      const userId = parseInt(params?.userId as string);
      if (userId) {
        user = usersData.find((u: any) => u.id === userId);
      }
    }
  } else {
    const userId = parseInt(params?.userId as string);
    if (userId) {
      user = usersData.find((u: any) => u.id === userId);
    }
  }

  // If no user found, show a fallback
  if (!user) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#ffffff" />
          </Pressable>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={[styles.content, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={styles.errorText}>No user data available</Text>
        </View>
      </View>
    );
  }

  // Reset carousel when user changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [user?.id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.push({ pathname: '/(tabs)/chat', params: { conversationId: user.id, conversationName: `${user.name}, ${user.age}`, userId: user.id } })} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#3d4f69" />
        </Pressable>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{user.name}, {user.age}</Text>
        </View>
        <Pressable style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#3d4f69" />
        </Pressable>
      </View>

      <ScrollView style={styles.mainScroll}>
        {/* Picture Carousel */}
        <View style={styles.carouselContainer}>
          <Pressable
            onPress={() => scrollToImage('left')}
            style={[styles.arrowButton, styles.leftArrow, currentImageIndex === 0 && styles.disabledArrow]}
            disabled={currentImageIndex === 0}
          >
            <Ionicons name="chevron-back" size={24} color="#3d4f69" />
          </Pressable>

          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const contentOffsetX = event.nativeEvent.contentOffset.x;
              const index = Math.round(contentOffsetX / event.nativeEvent.layoutMeasurement.width);
              setCurrentImageIndex(index);
            }}
            scrollEventThrottle={16}
            style={styles.carouselScroll}
          >
            {user.pictures.map((picture: string, index: number) => (
              <Image
                key={index}
                source={imageMap[picture] || require('../../assets/images/test.png')}
                style={styles.carouselImage}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          <Pressable
            onPress={() => scrollToImage('right')}
            style={[styles.arrowButton, styles.rightArrow, currentImageIndex === (user?.pictures?.length - 1) && styles.disabledArrow]}
            disabled={currentImageIndex === (user?.pictures?.length - 1)}
          >
            <Ionicons name="chevron-forward" size={24} color="#3d4f69" />
          </Pressable>
        </View>

        <View style={styles.content}>
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Ionicons name="location-sharp" size={18} color="#42546d" />
              <Text style={styles.infoText}>{user.location}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="school" size={18} color="#42546d" />
              <Text style={styles.infoText}>{user.school}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="briefcase" size={18} color="#42546d" />
              <Text style={styles.infoText}>{user.occupation}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="resize" size={18} color="#42546d" />
              <Text style={styles.infoText}>{user.height}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>About Me</Text>

          <View style={styles.bioBox}>
            <Text style={styles.bioText}>{user.bio}</Text>
          </View>

          <Text style={styles.sectionTitle}>Interests</Text>

          <View style={styles.interestsGrid}>
            {user.interests.filter((interest: string) => interest !== '+').map((interest: string, index: number) => (
              <View key={index} style={styles.interestPill}>
                <Text style={styles.interestText}>
                  {interest}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
    fontSize: 28,
    fontWeight: '600',
    color: '#3d4f69',
  },
  menuButton: {
    padding: 4,
  },

  carouselContainer: {
    backgroundColor: '#ffffff',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    height: 500,
  },

  carouselScroll: {
    flex: 1,
  },

  mainScroll: {
    flex: 1,
  },

  carouselImage: {
    width: '100%',
    height: 500,
    aspectRatio: 1,
  },

  arrowButton: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },

  leftArrow: {
    left: 12,
  },

  rightArrow: {
    right: 12,
  },

  disabledArrow: {
    opacity: 0.3,
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 6,
    backgroundColor: '#ffffff',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d5e2e8',
  },

  activeDot: {
    backgroundColor: '#5877a7',
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  logo: {
    width: 120,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
  },

  errorText: {
    fontSize: 16,
    color: '#666',
  },

  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#3d4f69',
    marginBottom: 16,
    marginTop: 20,
  },

  editText: {
    fontSize: 13,
    color: '#5877a7',
    marginTop: 20,
  },

  infoGrid: {
    gap: 14,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  infoText: {
    fontSize: 16,
    color: '#4c5d75',
  },

  bioBox: {
    backgroundColor: '#d8e4ea',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 18,
  },

  bioText: {
    fontSize: 15,
    color: '#465a73',
    textAlign: 'center',
    lineHeight: 22,
  },

  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginBottom: 24,
  },

  interestPill: {
    backgroundColor: '#d8e4ea',
    borderRadius: 4,
    minWidth: 86,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  interestText: {
    fontSize: 14,
    color: '#111',
  },

  plusText: {
    fontSize: 20,
    color: '#4f6da0',
    lineHeight: 20,
  },

  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    paddingVertical: 20,
  },

  passButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f4f3f4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#d5e2e8',
  },

  likeButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#5877a7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  photosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },

  photoCard: {
    width: 88,
    height: 88,
    position: 'relative',
  },

  photo: {
    width: '100%',
    height: '100%',
  },

  removePhoto: {
    position: 'absolute',
    top: -7,
    right: -7,
  },

  addPhotoCard: {
    width: 88,
    height: 88,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#4f6da0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomNav: {
    height: 62,
    backgroundColor: '#d5e2e8',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});