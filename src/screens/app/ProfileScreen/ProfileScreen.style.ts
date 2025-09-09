import { Dimensions, StyleSheet } from "react-native";


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: { marginTop: screenHeight * 0.15, padding: 20, justifyContent: 'center', alignItems: 'center' },
    info: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#eaeaea',
        width: screenWidth * 0.9, 
        padding: 10,
        borderRadius: 10
      },
      text: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 5,
        textAlign: 'left', 
      },
      
  });
  