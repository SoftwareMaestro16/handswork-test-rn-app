import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocation, useNavigate } from 'react-router-native';
import { CompanyData } from '../../../types/vacancies.types';
import { styles } from './VacanciesDetailScreen.style';
import { MainButton } from '../../../components/ui/Button/MainButton';
import { getItem, setItem } from '../../../utils/storage';

export function VacancyDetailScreen() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const vacancy: CompanyData = state;
  const [heartStatus, setHeartStatus] = useState<'heart' | 'heart-active'>(
    'heart',
  );

  useEffect(() => {
    const checkFavorite = async () => {
      const favorites: CompanyData[] = (await getItem('favorites')) || [];
      const isFavorite = favorites.some(fav => fav.id === vacancy.id);
      if (isFavorite) {
        setHeartStatus('heart-active');
      }
    };
    checkFavorite();
  }, [vacancy.id]);

  const heartImage =
    heartStatus === 'heart'
      ? require('../../../assets/vacancies/heart.png')
      : require('../../../assets/vacancies/heart-active.png');

  const toggleFavorite = async () => {
    const favorites: CompanyData[] = (await getItem('favorites')) || [];

    const isFavorite = favorites.some(fav => fav.id === vacancy.id);

    if (isFavorite) {
      const newFavorites = favorites.filter(fav => fav.id !== vacancy.id);
      await setItem('favorites', JSON.stringify(newFavorites));
      setHeartStatus('heart');
    } else {
      const newFavorites = [...favorites, vacancy];
      await setItem('favorites', JSON.stringify(newFavorites));
      setHeartStatus('heart-active');
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate(-1)}
        >
          <Text style={styles.backButtonText}>← Назад</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heartButton} onPress={toggleFavorite}>
          <Image
            source={heartImage}
            style={{
              width: 30,
              height: 30,
              tintColor: heartStatus === 'heart-active' ? '#E91E63' : '#000',
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Image source={{ uri: vacancy.logo }} style={styles.logo} />
        <Text style={styles.companyName}>{vacancy.companyName}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Адрес</Text>
          <Text style={styles.sectionText}>{vacancy.address}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Дата и время</Text>
          <Text style={styles.sectionText}>
            {vacancy.dateStartByCity} | {vacancy.timeStartByCity} -{' '}
            {vacancy.timeEndByCity}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Работники</Text>
          <Text style={styles.sectionText}>
            Набрано: {vacancy.currentWorkers} / {vacancy.planWorkers}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Типы работы</Text>
          <Text style={styles.workTypesText}>
            {vacancy.workTypes.map(w => w.name).join(', ')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Оплата</Text>
          <Text style={styles.sectionText}>
            Базовая: {vacancy.priceWorker} ₽
          </Text>
          <Text style={styles.sectionText}>
            Бонус: {vacancy.bonusPriceWorker} ₽
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Отзывы и рейтинг</Text>
          <Text style={styles.sectionText}>
            Отзывы: {vacancy.customerFeedbacksCount}
          </Text>
          <Text style={styles.sectionText}>
            Рейтинг: {vacancy.customerRating ?? 'N/A'}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.mainBtn}>
        <MainButton text="Откликнуться" />
      </View>
    </>
  );
}
