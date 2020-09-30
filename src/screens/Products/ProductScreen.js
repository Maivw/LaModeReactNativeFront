import React from 'react';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import ProductList from './ProductList';
import {Text} from 'react-native';

export default function ProductScreen() {
  return (
    <ScrollableTabView
      style={{paddingTop: 5, backgroundColor: 'white'}}
      initialPage={0}
      scrollWithoutAnimation={true}
      renderTabBar={() => <ScrollableTabBar />}>
      <ProductList tabLabel="All" />
      <ProductList tabLabel="Woman" />
      <Text tabLabel="Men"></Text>
      <Text tabLabel="Girls"></Text>
      <Text tabLabel="Sale"></Text>
    </ScrollableTabView>
  );
}
