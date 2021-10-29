import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

type Props = {
   score: number;
   starSize?: number;
   textSize?: number
}

const styles = StyleSheet.create({
   container: {
      flexDirection:'row',
      alignItems: 'center'
   },
   star: {
      color: '#800',
      marginRight: 4
   }
})


export const Stars: React.FC<Props> = (score, starSize=16, textSize=14) => {
   return(
      <View style={styles.container}>
         <FontAwesome name="star" style={[styles.star, {fontSize: starSize}]} />
         <FontAwesome name="star" style={[styles.star, {fontSize: starSize}]} />
         <FontAwesome name="star" style={[styles.star, {fontSize: starSize}]} />
         <FontAwesome name="star" style={[styles.star, {fontSize: starSize}]} />
         <FontAwesome name="star" style={[styles.star, {fontSize: starSize}]} />
      </View>
   )
}