import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  center: { flex: 1, textAlign: 'center', marginTop: screenWidth * 1, fontSize: 20, fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  logo: { width: 60, height: 60, borderRadius: 8 },
  info: { marginLeft: 12, flex: 1 },
  companyName: { fontWeight: 'bold', fontSize: 16 },
  mainText: {
    marginTop: screenHeight * 0.085,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 15,
    textAlign: 'left',
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#eaeaea'
  },
});
