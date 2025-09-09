import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    marginVertical: 12, 
  },
  label: { 
    marginBottom: 6, 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#333',
    marginLeft: 7
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20, 
    fontSize: 16,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2, 
  },
});
