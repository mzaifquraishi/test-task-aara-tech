import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
export default function AssetExample(props) {
  console.log(props);
  return (
    <TouchableOpacity>
      <ImageBackground
        style={styles.container}
        imageStyle={styles.container}
        source={{
          uri: 'https://source.unsplash.com/1600x900/?' + props.a.title,
        }}>
        <Text style={styles.paragraph}>
          {props.a.brand_name || props.a.subcategory}
        </Text>
        {props.a.shop_owner && (
          <Text style={styles.paragraph2}>By {props.a.shop_owner}</Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eee',
    marginTop: 3,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 200,
  },
  paragraph: {
    padding: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    bottom: 40,
    right: 0,
    position: 'absolute',
  },
  paragraph2: {
    padding: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    bottom: 2,
    right: 0,
    position: 'absolute',
  },
});
