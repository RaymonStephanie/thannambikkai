import App from './src/Index';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
