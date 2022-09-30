import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    // Navigate
    navigation.navigate('MealsOverview');
  };

  const renderCategoryItem = (itemData: any) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2} //default is 1
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
