import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 13.75,
    color: '#000',
    marginTop: 4,
  },
  activeText: {
    color: '#5985E1', 
  },
  activeIcon: {
    tintColor: '#5985E1', 
  },
});
