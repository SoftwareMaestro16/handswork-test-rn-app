import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Routes, Route } from 'react-router-native';
import { HomeScreen } from '../HomeScreen/HomeScreen';
import { FavoritesScreen } from '../FavoriteScreen/FavoriteScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
import { BottomTab } from '../../components/ui/BottomTab';

export const MainTabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </View>
      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  content: { flex: 1 },
});
