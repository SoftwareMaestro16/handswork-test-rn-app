import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CompanyData } from '../types/vacancies.types';
import { useNavigate } from 'react-router-native';
import { styles } from '../screens/app/HomeScreen/HomeScreen.styles';

export const renderVacancyItem = (navigate: ReturnType<typeof useNavigate>) => ({ item }: { item: CompanyData }) => (
  <TouchableOpacity style={styles.card} onPress={() => navigate(`/vacancies/${item.id}`, { state: item })}>
    <Image source={{ uri: item.logo }} style={styles.logo} />
    <View style={styles.info}>
      <Text style={styles.companyName}>{item.companyName}</Text>
      <Text>{item.dateStartByCity} | {item.timeStartByCity} - {item.timeEndByCity}</Text>
      <Text>Работники: {item.currentWorkers}/{item.planWorkers} | Рейтинг: {item.customerRating ?? 'N/A'}</Text>
    </View>
  </TouchableOpacity>
);

export const renderVacancySkeleton = () => (
  <View style={styles.card}>
    <View style={[styles.logo, { backgroundColor: '#e0e0e0' }]} />
    <View style={styles.info}>
      <View style={{ height: 18, backgroundColor: '#e0e0e0', marginBottom: 6, borderRadius: 4 }} />
      <View style={{ height: 14, width: '60%', backgroundColor: '#e0e0e0', marginBottom: 4, borderRadius: 4 }} />
      <View style={{ height: 14, width: '80%', backgroundColor: '#e0e0e0', borderRadius: 4 }} />
    </View>
  </View>
);
