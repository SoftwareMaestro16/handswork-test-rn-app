import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigate, useLocation } from 'react-router-native';
import { TABS } from '../../../constants/tabs';
import { styles } from './BottomTab.styles';

export const BottomTab = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <View style={styles.tabBar}>
      {TABS.map(tab => {
        const isActive = location.pathname === tab.path;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={() => navigate(tab.path)}
          >
            <Image
              source={isActive && tab.activeIcon ? tab.activeIcon : tab.icon}
              style={[
                { width: 28, height: 28 },
                isActive && styles.activeIcon, 
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.tabText, isActive && styles.activeText]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
