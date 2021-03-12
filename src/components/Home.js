import React, { Component } from 'react';
import {View,Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import { Input, Icon,SearchBar } from 'react-native-elements';
import {Styles} from '../styles/HomeStyles';
import UserList from './UserList';
import {monthNames} from '../constant/strings';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        let {search} = this.state;
        const d = new Date();
        const todayDate = monthNames[d.getMonth()] + ' '+ d.getDate();

        return (  
            <View style={Styles.container}>
                <StatusBar backgroundColor='red' barStyle="light-content" />
                <View style={Styles.HeaderWrapper}>
                    <Text style={Styles.HeaderText}>Welcome Ayobami Babalola,</Text>

                    <View style={Styles.ThumbNailWrapper}>
                        <Image
                        source = {require('../assets/noImageRed.jpg')}                         
                        style={Styles.ThumbNail}      
                        />
                    </View>
                </View>

                <View>
                    <Text style={Styles.SubHeaderText}>Today, {todayDate}</Text>
                </View>

                <SearchBar
                    placeholder="Search Users..."
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={Styles.containerStyle}
                    inputContainerStyle={Styles.inputContainerStyle}
                    inputStyle={Styles.inputStyle}
                />
                <UserList navigation={this.props.navigation}/>
            </View>
          
        )
    }
}

export default Home