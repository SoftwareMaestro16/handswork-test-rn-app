import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './MainButton.styles';
import { MainButtonProps } from '../../../types/mainButton.types';

export function MainButton({ text, onPress }: MainButtonProps) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}