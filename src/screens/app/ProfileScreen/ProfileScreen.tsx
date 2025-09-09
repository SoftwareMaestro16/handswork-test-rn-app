import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  Platform,
  ActivityIndicator,
  Image,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { clearItem, getItem } from '../../../utils/storage';
import { styles } from './ProfileScreen.style';
import { MainButton } from '../../../components/ui/Button/MainButton';
import { UserData } from '../../../types/user.types';

interface ProfileScreenProps {
  onRequireSetup?: () => void;
}

export function ProfileScreen({ onRequireSetup }: ProfileScreenProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const stored = await getItem('userData');
      if (stored) {
        setUserData(stored);
      } else {
        onRequireSetup?.();
      }
      setLoading(false);
    })();
  }, []);

  const requestLocation = () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    }

    Geolocation.getCurrentPosition(
      pos => {
        const loc = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        setUserData(prev =>
          prev
            ? { ...prev, location: loc }
            : { firstName: '', lastName: '', email: '', location: loc },
        );
      },
      error => {
        console.log(error);
        Alert.alert('Ошибка', 'Не удалось получить геопозицию');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const handleClear = async () => {
    await clearItem('userData');
    setUserData(null);
    Alert.alert('Очищено', 'Данные пользователя удалены');
    onRequireSetup?.();
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/profile/account.png')}
        style={{ width: 145, height: 145, marginBottom: 10 }}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.text}>Имя: {userData?.firstName || '—'}</Text>
        <Text style={styles.text}>Фамилия: {userData?.lastName || '—'}</Text>
        <Text style={styles.text}>Email: {userData?.email || '—'}</Text>
        <Text style={styles.text}>
          Геопозиция:{' '}
          {userData?.location ? '✅ Определена' : '❌ Не определена'}
        </Text>
      </View>

      {!userData?.location && (
        <MainButton text="Поделиться геопозицией" onPress={requestLocation} />
      )}
      {/* <Button title="Очистить данные" onPress={handleClear} color="red" /> */}
    </View>
  );
}
