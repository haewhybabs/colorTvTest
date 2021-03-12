import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {Styles} from '../styles/HomeStyles';
class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const {item}=this.props
        return (
            <View style={Styles.card}>
                <View style={Styles.cardContainer}>
                    <Image
                    source = {require('../assets/noImageRed.jpg')}                         
                    style={Styles.ThumbNailCard}      
                    />
                    <View style={Styles.cardTitle}>
                        <Text style={Styles.cardTextTitle}>{item.user.name}</Text>
                        <Text> {item.user.username}</Text>
                    </View>

                    <TouchableOpacity style={Styles.viewUser} onPress={()=>this.props.navigation.navigate('User',{item})}>
                        <View style={Styles.viewUserContainer}>
                            <Text style={Styles.viewUserText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default UserList