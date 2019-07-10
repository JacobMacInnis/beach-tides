import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { setDate } from '../../redux/actions/searchActions';

const mapStateToProps = state => {
  return{
    date: state.search.date
  };
};

class MyDatePicker extends Component {

  setDate(date) {
    return this.props.dispatch(setDate(date));
  }

  render(){
    let date = this.props.date;
    return (
      <DatePicker
        style={{width: widthPercentageToDP('50%')}}
        date={date}
        mode="date"
        placeholder="select date"
        format="MM-DD-YYYY"
        minDate="01-01-2019"
        maxDate="12-31-2099"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display: 'none',
            opacity: 0,
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            borderRadius: 10,
            backgroundColor: 'white',
            borderColor: 'grey'
          },
          dateText: {
            fontSize: 18,
            // fontSize: 20,
            // fontWeight: '400',
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setDate(date)}}
      />
    )
  }
}

export default connect(mapStateToProps)(MyDatePicker);