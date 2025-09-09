import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  Platform,
  Image,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import { setItem } from "../../../utils/storage";
import { MainButton } from "../../../components/ui/Button/MainButton";
import { Input } from "../../../components/ui/Input/Input";
import { styles } from "./SetupScreen.styles";

interface SetupScreenProps {
  onSetupComplete: () => void;
}

export function SetupScreen({ onSetupComplete }: SetupScreenProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (Platform.OS === "ios") {
      Geolocation.requestAuthorization("whenInUse");
    }
  }, []);

  const handleNext = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const location = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        };
        const userData = { firstName, lastName, email, location };
        setItem("userData", JSON.stringify(userData));
        onSetupComplete();
      },
      (error) => {
        console.log(error);
        Alert.alert(
          "Ошибка",
          "Не удалось получить геопозицию. Продолжим без неё."
        );
        const userData = { firstName, lastName, email, location: null };
        setItem("userData", JSON.stringify(userData));
        onSetupComplete();
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: "800", marginRight: 10 }}>
          Handswork
        </Text>
        <Image
          source={require("../../../assets/reg/handswork.png")}
          style={{ width: 56, height: 54, marginBottom: 10 }}
          resizeMode="contain"
        />
      </View>

      <Input label="Имя" value={firstName} onChangeText={setFirstName} />
      <Input label="Фамилия" value={lastName} onChangeText={setLastName} />
      <Input label="Email" value={email} onChangeText={setEmail} />
        
      
      <MainButton text="Далее" onPress={handleNext} />
    </View>
  );
};

