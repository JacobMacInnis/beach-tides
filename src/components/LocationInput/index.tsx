import React from 'react';
import { View, Text, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { setLocation } from '../../redux/actions/searchActions';

const mapStateToProps = state => {
  return {
    location: state.search.location
  };
}


export class LocationInput2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    }
  }

  onChange(searchInput) {
    this.setState({searchInput});
    return this.props.dispatch(setLocation(searchInput));  
  }
  render() {
    return (
      <View>
        <TextInput
          style={{
            textAlign: 'center',
            width: wp('50%'),
            height: '100%',
            borderRadius: 10,
            fontSize: 18,
            backgroundColor: 'white', 
            borderColor: 'gray', 
            borderWidth: 1
          }}
          placeholder={'Zip or City, State'}
          value={this.state.searchInput}
          onChangeText={searchInput => this.onChange(searchInput)}
          onFocus={() => this.setState({searchInput : ''})}
        >
        </TextInput>
      </View>
    )
  }
}

export default connect(mapStateToProps)(LocationInput2);