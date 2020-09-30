import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 350,
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 500,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    padding: 20,
    position: 'absolute',
    width: 350,
    left: 20,
    top: 20,
    color: '#fff',
    alignItems: 'center',
    fontSize: 30,
    textAlign: 'center',
  },
});

function Collection() {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/4615702/pexels-photo-4615702.jpeg?cs=srgb&dl=pexels-breston-kenya-4615702.jpg&fm=jpg',
        }}
      />
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?cs=srgb&dl=pexels-godisable-jacob-818992.jpg&fm=jpg',
        }}
      />
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/3552520/pexels-photo-3552520.jpeg?cs=srgb&dl=pexels-breston-kenya-3552520.jpg&fm=jpg',
        }}
      />
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/2896826/pexels-photo-2896826.jpeg?cs=srgb&dl=pexels-arianna-jad%C3%A9-2896826.jpg&fm=jpg',
        }}
      />
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?cs=srgb&dl=pexels-godisable-jacob-794063.jpg&fm=jpg',
        }}
      />
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/2299616/pexels-photo-2299616.jpeg?cs=srgb&dl=pexels-ron%C3%AA-ferreira-2299616.jpg&fm=jpg',
        }}
      />
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?cs=srgb&dl=pexels-godisable-jacob-949671.jpg&fm=jpg',
        }}
      />
      <Image
        style={{flex: 1, height: '100%', width: '100%'}}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/952627/pexels-photo-952627.jpeg?cs=srgb&dl=pexels-godisable-jacob-952627.jpg&fm=jpg',
        }}
      />
      <TouchableOpacity style={styles.overlay}>
        <Text style={styles.text}>Fall -2011</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default Collection;
