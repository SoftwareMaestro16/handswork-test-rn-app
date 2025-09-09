import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter } from 'react-router-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainTabs } from './src/screens/MainTabs/MainTabs';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <NativeRouter>
          <MainTabs />
        </NativeRouter>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
