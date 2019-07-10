import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DatePicker from '../DatePicker/';
import LocationInput from '../LocationInput/';
import RF from "react-native-responsive-fontsize";
import { getTides } from '../../redux/actions/searchActions';
const BeachTides = require('../../assets/images/BeachTides.png');

const mapStateToProps = state => {
  const { location, date } = state.search;
  return {
    location,
    date
  };
};

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Zip or City, State',
      date: ''
    };
  }

  onSubmit() {
    const { dispatch, location, date } = this.props;
    return dispatch(getTides(location, date));
  };

  render() {
    return (
      <View style={styles.searchFormContainer}>
        <View style={styles.searchFormMargin}></View>
        <View style={styles.searchForm}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 3}}>
            <Image style={styles.image} source={BeachTides} />
          </View>
          <View style={{ flex: 2 }}></View>
          {/* <View style={{ flex: 2 }}>
            <Text style={{ fontSize: RF(2.5) }} >Zipcode or City, State</Text>
          </View> */}
          <View style={{ flex: 3 }}> 
            <LocationInput />
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 3 }}>
            <DatePicker />
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity 
              style={{ borderColor: 'grey', width: wp('30%') }} 
              type='submit'
              onPress={() => this.onSubmit()}>
              <Text 
                style={{
                  textAlign: 'center',
                  fontWeight: '900',
                  // fontSize: 21, 
                  borderWidth: 2, 
                  borderColor: 'grey', 
                  borderRadius: 10,
                  padding: 4,
                  backgroundColor: 'white'
                }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={styles.searchFormMargin}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchFormContainer: {
    flex: 1,
  },
  searchForm:  {
    flex: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    width: wp('90%'),
    alignItems: 'center',
    opacity: .85,
  },
  searchFormMargin: {
    flex: 1,
  },
  image: {
    height: hp('6%'),
    width: wp('80%'),
    resizeMode: 'contain'
  }
});


const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(getTides, dispatch);
  const allActionProps = {...boundActionCreators, dispatch}
  return allActionProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);