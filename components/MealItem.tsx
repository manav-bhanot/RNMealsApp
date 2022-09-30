import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Meal from '../models/meal';

const MealItem = ({meal}: {meal: Meal}) => {
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({});
