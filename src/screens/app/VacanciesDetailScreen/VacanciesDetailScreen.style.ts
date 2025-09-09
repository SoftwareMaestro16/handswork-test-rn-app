import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backButton: {
    marginTop: screenWidth * 0.18,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#5985E1',
    borderRadius: 6,
    alignSelf: 'flex-start',
    width: 100,
  },
  heartButton: {
    marginTop: screenWidth * 0.18,
    marginBottom: 15,
    padding: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  backButtonText: { 
    fontSize: 17, 
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    marginTop: screenWidth * 0.01,
    width: 120,
    height: 120,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 16,
  },
  companyName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  sectionText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  workTypesText: {
    fontSize: 15,
    color: '#444',
    fontStyle: 'italic',
  },
  mainBtn: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: screenHeight * 0.035
  }
});
