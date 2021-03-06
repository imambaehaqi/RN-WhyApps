import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage, Alert, Modal, TextInput } from 'react-native'
import firebase from './rootNavigator/firebase'
import Geolocation from '@react-native-community/geolocation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import User from './User'
import styles from '../assets/Styles'

export default class MyProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            name: User.name,
            email: User.email,
            telp: User.telp,
            password: User.password,
            photo: User.photo
        }
    }

    static navigationOptions = {
        title: 'My Profile'
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    changerValue = field => value => { this.setState({ [field]: value }) }
    logout = () => {
        Alert.alert('Logout', 'Do you want to logout?', [
            {
                text: 'Yes', onPress: async () => {
                    await Geolocation.getCurrentPosition(
                        async (position) => {
                            await firebase.database().ref('users/' + User.uid).update({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                status: false
                            });
                        },
                        (error) => {
                            alert(error.code, error.message);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    )
                    await AsyncStorage.clear()
                    this.props.navigation.navigate('Auth')
                }
            },
            {
                text: 'No',
                style: 'cancel'
            }])
    }

    submit = async () => {
        await Geolocation.getCurrentPosition(
            async (position) => {
                await firebase.database().ref('users/' + User.uid).update({
                    name: this.state.name.trim(),
                    email: this.state.email.trim(),
                    telp: this.state.telp,
                    photo: this.state.photo || "https://visualpharm.com/assets/71/Add%20User%20Male-595b40b65ba036ed117d36f8.svg",
                    password: this.state.password.trim(),
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    status: true
                })
                User.name = this.state.name.trim()
                User.telp = this.state.telp
                User.photo = this.state.photo
                User.email = this.state.email.trim()
                User.password = this.state.password.trim()
                this.setModalVisible(!this.state.modalVisible)
                this.props.navigation.navigate('ChatList')
            },

            (error) => {
                alert(error.code, error.message);
            },

            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }
    
    render() {
        return (
            <View style={styles.containerMyProfile}>
                <View style={{ flex: 2, backgroundColor: 'white' }}>
                    <Image source={{ uri: User.photo }} style={styles.photoInProfile} />
                </View>
                <View style={{ flex: 3, backgroundColor: 'white' }}>
                <Text style={styles.textTitleProfile}>Full Name:</Text>
                        <Text numberOfLines={2} style={styles.textProfile}>{User.name}</Text>
                        <Text style={styles.textTitleProfile}>Email:</Text>
                        <Text numberOfLines={2} style={styles.textProfile}>{User.email}</Text>
                        <Text style={styles.textTitleProfile}>Handphone:</Text>
                        <Text style={styles.textProfile}>{User.telp}</Text>
                    <View style={styles.viewProfile}>
                        <TouchableOpacity onPress={() => this.setModalVisible(true)} style={styles.buttonMyProfile}>
                            <Text style={styles.textChatList}>Edit profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.logout} style={styles.buttonMyProfile}>
                            <Text style={styles.textChatList}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <TouchableOpacity
                        style={{ height: '100%', width: '100%' }}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <View style={styles.containerRegister}>
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='grey'
                                placeholder="Full Name"
                                placeholderTextColor="black"
                                selectionColor="black"
                                value={this.state.name}
                                maxLength={64}
                                onChangeText={this.changerValue('name')}
                                onSubmitEditing={() => this.email.focus()} />
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='grey'
                                placeholder="Email"
                                placeholderTextColor="black"
                                selectionColor="black"
                                keyboardType="email-address"
                                value={this.state.email}
                                maxLength={64}
                                onChangeText={this.changerValue('email')}
                                ref={(input) => this.email = input}
                                onSubmitEditing={() => this.telp.focus()} />
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='grey'
                                placeholder="Telp"
                                selectionColor="black"
                                keyboardType="phone-pad"
                                placeholderTextColor="black"
                                value={this.state.telp}
                                maxLength={13}
                                onChangeText={this.changerValue('telp')}
                                ref={(input) => this.telp = input}
                                onSubmitEditing={() => this.photo.focus()} />
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='grey'
                                placeholder="Image Url"
                                selectionColor="black"
                                placeholderTextColor="black"
                                value={this.state.photo}
                                onChangeText={this.changerValue('photo')}
                                ref={(input) => this.photo = input}
                                onSubmitEditing={() => this.password.focus()} />
                            <TextInput style={styles.inputBox}
                                underlineColorAndroid='grey'
                                placeholder="Password"
                                selectionColor="black"
                                secureTextEntry={true}
                                placeholderTextColor="black"
                                value={this.state.password}
                                maxLength={32}
                                onChangeText={this.changerValue('password')}
                                ref={(input) => this.password = input}
                                onSubmitEditing={() => this.password.focus()} />
                            <TouchableOpacity style={styles.button} onPress={ this.submit }>
                                <Text style={styles.buttonText}>Update Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>

            </View>
        )
    }
}