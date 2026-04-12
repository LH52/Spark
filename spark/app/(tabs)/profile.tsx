import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const interests = [
  'Video Games',
  'Movies',
  'Books',
  'Ramen',
  '+',
  '+',
];

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/SparkLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Basic information</Text>
          <Pressable>
            <Text style={styles.editText}>Edit ↗</Text>
          </Pressable>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Ionicons name="location-sharp" size={18} color="#42546d" />
            <Text style={styles.infoText}>Montreal, QC</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="school" size={18} color="#42546d" />
            <Text style={styles.infoText}>Concordia University</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="briefcase" size={18} color="#42546d" />
            <Text style={styles.infoText}>Creative Director</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="resize" size={18} color="#42546d" />
            <Text style={styles.infoText}>180 cm</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Biography</Text>

        <View style={styles.bioBox}>
          <Text style={styles.bioText}>
            Lover of jazz, weekend hiking, and profound conversations. Looking
            for someone who values emotional intelligence and quiet mornings.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Interests</Text>

        <View style={styles.interestsGrid}>
          {interests.map((item, index) => (
            <View key={index} style={styles.interestPill}>
              <Text style={[styles.interestText, item === '+' && styles.plusText]}>
                {item}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Photos</Text>

        <View style={styles.photosRow}>
          <View style={styles.photoCard}>
            <Image
              source={require('../../assets/images/usersImages/user.png')}
              style={styles.photo}
              resizeMode="cover"
            />
            <Pressable style={styles.removePhoto}>
              <Ionicons name="close" size={12} color="#4f6da0" />
            </Pressable>
          </View>

          <Pressable style={styles.addPhotoCard}>
            <Ionicons name="add" size={22} color="#4f6da0" />
          </Pressable>

          <Pressable style={styles.addPhotoCard}>
            <Ionicons name="add" size={22} color="#4f6da0" />
          </Pressable>
        </View>
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
    height: 86,
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

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
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
    marginBottom: 18,
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

  photosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },

  photoCard: {
    width: 120,
    height: 120,
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
    width: 120,
    height: 120,
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