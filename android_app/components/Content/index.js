import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import styles from './styles'

export default class  extends Component {   
    
    render() {

        const { contentText,onViewClick } = this.props;
        return (
            <TouchableWithoutFeedback onPress={ onViewClick }>
                 <View style={styles.container} >
                    <Text style={styles.text}>{contentText} </Text>
                </View>
            </TouchableWithoutFeedback>
           
        );
    }
    
}
