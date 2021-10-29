import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getShops } from './src/lib/firebase'
import { Shop } from './src/lib/types/shop';
import { ShopReviewItems } from './src/components/ShopReviewItems';

export default function App() {

  const [shops, setShops] = useState<Shop[]>([])

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async() => {
    const shops = await getShops();
    setShops(shops);
  }

  const shopItems = shops.map((shop, index) => {
    return(
      <View>
        <ShopReviewItems shop={shop} key={index.toString()} />
      </View>
    )
  })

  return (
    <View style={styles.container}>
      {shopItems}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
