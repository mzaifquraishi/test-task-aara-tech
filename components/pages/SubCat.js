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
import SubCard from '../SubCard';

class Subcat extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      subcategory: null,
      categoryid: props.route.params.id,
      loading: true,
    };
  }

  async componentDidMount() {
    await useFetch(
      'https://project252.aaratechnologies.in/web/common/subcategory/' +
        this.state.categoryid
    ).then((d) => {
      console.log(d.data);
      this.setState({ subcategory: d.data, loading: false });
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

        {this.state.subcategory && (
          <FlatList
            data={this.state.subcategory}
            renderItem={(item) => (
              <SubCard a={item.item} nav={this.props.navigation} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default Subcat;
