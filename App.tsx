import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
    <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={[styles.container, {backgroundColor: 'black'}]}>
        <CategoriesScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
