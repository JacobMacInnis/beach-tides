import React from 'react';
import { View, Text } from 'react-native';

 export class Input extends React.Component  {

  render() {
    const Element = this.props.element || 'input';
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
        error = <View><Text className="form-error">{this.props.meta.error}</Text></View>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
        warning = (
            <View><Text className="form-warning">{this.props.meta.warning}</Text></View>
        );
    }
    return (
      <View>
        <Text>Hellow</Text>
      </View>
    );
  }
}

export default Input;