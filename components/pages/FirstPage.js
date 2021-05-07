// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useFetch } from '../service';
import Card from '../Card';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      loading: true,
    };
  }

  async componentDidMount() {
    await useFetch(
      'https://project252.aaratechnologies.in/web/common/category'
    ).then((d) => {
      this.setState({ category: d.data, loading: false });
    });
  }

  render() {
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {this.state.loading && (
          <View style={{ flex: 1, marginTop: '50%' }}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )}

        {this.state.category && (
          <FlatList
            data={this.state.category}
            renderItem={(item) => <Card a={item.item} nav={this.props.navigation} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default FirstPage;
