import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({route}: {route: any}) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem = (itemData: {item: Meal}) => {
    return <MealItem meal={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
