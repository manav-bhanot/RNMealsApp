import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

const CategoryGridTile = ({
  title,
  color,
  onPress,
}: {
  title: any;
  color: any;
  onPress: Function;
}) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
