import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useVacancies } from '../../../hooks/useVacancies';
import { useUserLocation } from '../../../hooks/useUserLocation';
import { CompanyData } from '../../../types/vacancies.types';
import { useNavigate } from 'react-router-native';
import { getDistance } from '../../../utils/getDistance';
import { styles } from './HomeScreen.styles';

export function HomeScreen() {
  const { data, isLoading, isError } = useVacancies();
  const location = useUserLocation();
  const navigate = useNavigate();

  if (isLoading) return <Text style={styles.center}>Loading vacancies...</Text>;
  if (isError) return <Text style={styles.center}>Error fetching vacancies</Text>;

  let sortedData = data ?? [];
  if (location) {
    sortedData = [...sortedData].sort(
      (a, b) =>
        getDistance(location.latitude, location.longitude, a.coordinates.latitude, a.coordinates.longitude) -
        getDistance(location.latitude, location.longitude, b.coordinates.latitude, b.coordinates.longitude)
    );
  }

  const renderItem = ({ item }: { item: CompanyData }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigate(`/vacancies/${item.id}`, { state: item })}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={styles.info}>
        <Text style={styles.companyName}>{item.companyName}</Text>
        <Text>{item.dateStartByCity} | {item.timeStartByCity} - {item.timeEndByCity}</Text>
        <Text>Работники: {item.currentWorkers}/{item.planWorkers} Рейтинг: {item.customerRating ?? 'N/A'}</Text>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
    <View>
        <Text style={styles.mainText}>Handswork</Text>    
    </View>
    <FlatList
      data={sortedData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
    />
    </>

  );
}

