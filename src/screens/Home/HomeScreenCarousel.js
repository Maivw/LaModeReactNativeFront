import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import {Images} from '../../themes';
import Collection from './CollectionFall';
import Header from '../Header';

const ENTRIES1 = [
  {
    illustration:
      'https://res.cloudinary.com/maivw/image/upload/v1601430866/LamodeWomenDress_jgdx0d.jpg',
  },
  {
    illustration:
      'https://res.cloudinary.com/maivw/image/upload/v1601430867/LamodeMen_blats8.jpg',
  },
  {
    illustration:
      'https://res.cloudinary.com/maivw/image/upload/v1601430866/LaModeWomeLingerie_het75e.jpg',
  },
  {
    illustration:
      'https://res.cloudinary.com/maivw/image/upload/v1601430867/LaModeKid_jknhyd.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const HomeScreenCarousel = ({navigation}) => {
  const onMoveProduct = () => navigation.navigate('Product');
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
        <TouchableOpacity onPress={onMoveProduct}>
          <Text style={styles.text}>Coming soon</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Collection />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreenCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  scrollView: {
    marginHorizontal: 1,
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
  },
});
