import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../assets/Styles'

export default class Logo extends Component {

    render(){

        return(
            <View style={styles.containerLogo}>
                <Image source={require('../assets/logo.jpg')} style={{width:250, height: 250}}/>
            </View>

        )
    }
}