import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from '../assets/Styles'

export default class MyProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.navigation.getParam('name'),
            email: props.navigation.getParam('email'),
            telp: props.navigation.getParam('telp'),
            photo: props.navigation.getParam('photo')
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', null)
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.containerMyProfile}>
                    <Image source={{ uri: this.state.photo }} style={styles.photoInProfile} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text style={styles.textTitleProfile}>Full Name:</Text>
                        <Text style={styles.textProfile}>{this.state.name}</Text>
                        <Text style={styles.textTitleProfile}>Email:</Text>
                        <Text style={styles.textProfile}>{this.state.email}</Text>
                        <Text style={styles.textTitleProfile}>Handphone:</Text>
                        <Text style={styles.textProfile}>{this.state.telp}</Text>
                </View>
            </View>
        )
    }
}