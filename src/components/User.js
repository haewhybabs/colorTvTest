import React, { Component } from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Styles} from '../styles/UserStyles';
import {Card,CardItem,Right} from 'native-base';
import {Icon} from 'react-native-elements'; 
class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item:props.navigation.getParam('item'),
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree"
            ]
        }
    }

    render() {
        const {item} =this.state;
        let images = null;
        console.log('item',item.urls)
        if(item){
            images = [
                item.urls.raw,
                item.urls.full,
                item.urls.regular
            ]
        }

        return (
            <View>
                <SliderBox images={images} />
                <View style={Styles.cardContainer}>

                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon active name="person" color='red' />
                            <Text>Full Name</Text>
                            <Right>
                                <Text>{item.user.name}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon active name="person" color='red' />
                            <Text>User Name</Text>
                            <Right>
                                <Text>{item.user.username}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon name="person" color='red' />
                            <Text>Instagram</Text>
                            <Right>
                                <Text>{item.user.instagram_username}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon name="person"  color='red'/>
                            <Text>Twitter</Text>
                            <Right>
                                <Text>{item.user.twitter_username}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
            </View>
        )
    }
}

export default User