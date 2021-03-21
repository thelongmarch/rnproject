import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Content from './components/Content/index'

export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentText:'Content Component123'
        };
    }
    
    //props传递方法
    onViewClick (){
        debugger
        this.setState({
            contentText :'I am Content Compoents123'
        })
    }
   
    render() {
        const { contentText } = this.state;
        return (           
            <Content contentText = { contentText } onViewClick = {this.onViewClick.bind(this)}/>
        );
    }
    
}

