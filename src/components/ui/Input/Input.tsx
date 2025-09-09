import { Text, TextInput, View } from 'react-native';
import { styles } from './Input.styles';
import { InputProps } from '../../../types/input.types';

export function Input({ label, value, onChangeText }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
