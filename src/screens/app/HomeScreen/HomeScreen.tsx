import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { useVacancies } from '../../../hooks/useVacancies';
import { useUserLocation } from '../../../hooks/useUserLocation';
import { CompanyData } from '../../../types/vacancies.types';
import { useNavigate } from 'react-router-native';
import { getDistance } from '../../../utils/getDistance';
import { styles } from './HomeScreen.styles';
import {
  renderVacancyItem,
  renderVacancySkeleton,
} from '../../../utils/vacancyRender';

export function HomeScreen() {
  const { data, isLoading, isError } = useVacancies();
  const location = useUserLocation();
  const navigate = useNavigate();

  let sortedData = data ?? [];
  if (location) {
    sortedData = [...sortedData].sort(
      (a, b) =>
        getDistance(
          location.latitude,
          location.longitude,
          a.coordinates.latitude,
          a.coordinates.longitude,
        ) -
        getDistance(
          location.latitude,
          location.longitude,
          b.coordinates.latitude,
          b.coordinates.longitude,
        ),
    );
  }

  if (isError)
    return <Text style={styles.center}>Ошибка при загрузке вакансий...</Text>;

  return (
    <>
      <View>
        <Text style={styles.mainText}>Handswork</Text>
      </View>

      <FlatList
        data={isLoading ? Array(5).fill({} as CompanyData) : sortedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          isLoading ? renderVacancySkeleton : renderVacancyItem(navigate)
        }
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </>
  );
}
