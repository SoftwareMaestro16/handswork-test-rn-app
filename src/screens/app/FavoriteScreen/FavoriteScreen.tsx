import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigate } from 'react-router-native';
import { CompanyData } from '../../../types/vacancies.types';
import { getItem } from '../../../utils/storage';
import { styles } from './FavoriteScreen.styles';
import { renderVacancyItem, renderVacancySkeleton } from '../../../utils/vacancyRender';

export function FavoritesScreen() {
  const [favorites, setFavorites] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadFavorites = async () => {
    try {
      const jsonValue = await getItem('favorites');
      if (jsonValue) {
        setFavorites(jsonValue);
      } else {
        setFavorites([]);
      }
    } catch (e) {
      console.error('Ошибка при чтении избранного', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);
  
  return (
    <>
      <View>
        <Text style={styles.mainText}>Favorites</Text>
      </View>

      <FlatList
        data={loading ? Array(5).fill({} as CompanyData) : favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          loading ? renderVacancySkeleton : renderVacancyItem(navigate)
        }
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </>
  )
}

