import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { Provider } from 'react-redux';
import { theme } from './App.style';
import AppNavigator from './app/app.navigator';
import LoadingComponent from './app/compoments/loading/loading.component';
import { store } from './app/store/store';

const App = () => {
  
  return (
    <Provider store = {store}>
      <PaperProvider theme={theme}>
        <AppNavigator/>
        <LoadingComponent/>
      </PaperProvider>
    </Provider>
  );
};

export default App;
