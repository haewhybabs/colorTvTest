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
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree"
            ]
        }
    }

    render() {
        return (
            <View>
                <SliderBox images={this.state.images} />
                <View style={Styles.cardContainer}>

                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon active name="person" color='red' />
                            <Text>Full Name</Text>
                            <Right>
                                <Text>Ayobami Babalola</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon active name="person" color='red' />
                            <Text>User Name</Text>
                            <Right>
                                <Text>Haewhydev</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon name="phone" color='red' />
                            <Text>Phone Number</Text>
                            <Right>
                                <Text>08135373563</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{marginTop:10}}>
                        <CardItem>
                            <Icon name="map"  color='red'/>
                            <Text>Address</Text>
                            <Right>
                                <Text>Lagos </Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
            </View>
        )
    }
}

export default User