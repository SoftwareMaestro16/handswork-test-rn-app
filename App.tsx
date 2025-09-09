import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainTabs } from './src/screens/app/MainTabs/MainTabs';
import { SetupScreen } from './src/screens/login/SetupScreen/SetupScreen';
import { getItem } from './src/utils/storage';
import { VacancyDetailScreen } from './src/screens/app/VacanciesDetailScreen/VacanciesDetailScreen';

const queryClient = new QueryClient();

export default function App() {
  const [isSetupDone, setIsSetupDone] = useState<boolean | null>(null);

  useEffect(() => {
    const checkStorage = async () => {
      const data = await getItem('userData');
      setIsSetupDone(!!data);
    };
    checkStorage();
  }, []);

  if (isSetupDone === null) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        
          <StatusBar barStyle="dark-content" />
          <NativeRouter>
            <Routes>
              {isSetupDone ? (
                <>
                  <Route path="/*" element={<MainTabs />} />
                  <Route
                    path="/vacancies/:id"
                    element={<VacancyDetailScreen />}
                  />
                </>
              ) : (
                <Route
                  path="/*"
                  element={
                    <SetupScreen onSetupComplete={() => setIsSetupDone(true)} />
                  }
                />
              )}
            </Routes>
          </NativeRouter>
   
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
