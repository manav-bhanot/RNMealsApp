import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({navigation}: {navigation: any}) => {
  const pressHandler = (itemData: any) => {
    // Navigate
    // The second json object is actually the route.params
    navigation.navigate('MealsOverview', {
      categoryId: itemData.item.id,
    });
  };

  const renderCategoryItem = (itemData: any) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler.bind(this, itemData)}
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
