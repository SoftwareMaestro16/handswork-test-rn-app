import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#5985E1',
    width: screenWidth * 0.9, 
    height: 50, 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600'
  },
});
