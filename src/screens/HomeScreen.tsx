import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { MaterialIcons } from '@expo/vector-icons';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Morning, Jane</Text>
        <Text style={styles.socialEnergyStatus}>Charged and ready</Text>
        <View style={styles.socialEnergyContainer}>
          <Text style={styles.socialEnergyText}>SOCIAL ENERGY</Text>
          <View style={styles.socialEnergyBar}>
            <View style={[styles.socialEnergyLevel, { width: '80%' }]} />
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <ScrollView contentContainerStyle={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('Reminders')}>
          <MaterialIcons name="notifications" size={30} color="#6200ee" />
          <Text style={styles.quickActionText}>Check Reminders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('SocialEnergy')}>
          <MaterialIcons name="battery-charging-full" size={30} color="#6200ee" />
          <Text style={styles.quickActionText}>Social Energy Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('Nudges')}>
          <MaterialIcons name="group" size={30} color="#6200ee" />
          <Text style={styles.quickActionText}>Connection Nudges</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAction} onPress={() => navigation.navigate('Drafts')}>
          <MaterialIcons name="drafts" size={30} color="#6200ee" />
          <Text style={styles.quickActionText}>Draft Replies</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Action Buttons */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddReminder')}>
        <MaterialIcons name="add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.fab, styles.fabCompose]} onPress={() => navigation.navigate('ComposeMessage')}>
        <MaterialIcons name="edit" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={30} color="#6200ee" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Journal')}>
          <MaterialIcons name="book" size={30} color="#6200ee" />
          <Text style={styles.navText}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="settings" size={30} color="#6200ee" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  socialEnergyStatus: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginTop: 5,
  },
  socialEnergyContainer: {
    marginTop: 20,
  },
  socialEnergyText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginBottom: 5,
  },
  socialEnergyBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  socialEnergyLevel: {
    height: '100%',
    backgroundColor: '#6200ee',
  },
  quickActionsContainer: {
    padding: 20,
  },
  quickAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  quickActionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginLeft: 15,
  },
  fab: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#6200ee',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabCompose: {
    bottom: 160,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#6200ee',
    marginTop: 5,
  },
});

export default HomeScreen;
