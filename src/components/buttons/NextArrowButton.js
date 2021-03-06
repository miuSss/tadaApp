import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default class NextArrowButton extends Component {
  render(){
    const opacityStyle = this.props.disabled ? {backgroundColor : colors.disabled } : { backgroundColor : colors.semiTransparentWhite };
    return (
      <TouchableOpacity
        style = {[opacityStyle,styles.button]}
        onPress = { ()=> {this.props.callback()}}
        disabled={this.props.disabled}
      >
        <Icon
          name="angle-right"
          color={colors.darkGreen}
          size={32}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }
}

NextArrowButton.propsTypes = {
  callback : PropTypes.func.isRequired,
  disabled : PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  button : {
    alignItems: 'center',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  icon: {
    marginTop: -2,
    marginRight: -2,
  }
});
