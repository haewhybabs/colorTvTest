import React, { Component } from 'react';
import {View,Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {url} from '../constant/strings';
import {clientID} from '../constant/strings';
import {Styles} from '../styles/HomeStyles';
import SpinView from './common/SpinView';
import UserList from './UserList';
import {monthNames} from '../constant/strings';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search:'',
            isLoading:true,
            data:[]
        }
    }

    componentDidMount(){
        this.fetchServerUrl();
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    fetchServerUrl(){
    
        fetch(url,{
          method:'GET',
        })
        .then(response=>{
            return response.json();
        })
        .then((contents)=>{

            this.setState({data:contents,isLoading:false})
        })
        .catch((err)=>{
         
          setTimeout(()=>{
            this.fetchServerUrl();
          },1000)
        })
    }

    render() {
        let {search,isLoading,data} = this.state;
        const d = new Date();
        const todayDate = monthNames[d.getMonth()] + ' '+ d.getDate();

        if (isLoading) {
            return <SpinView />;
        }

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
                {data.filter((val)=>{
                    if(search===''){
                        return val;
                    }
                    else if(val.user.name.toLowerCase().includes(search.toLowerCase())){
                        return val;
                    }
                }).map((value,index)=>(
                    <UserList navigation={this.props.navigation} key={index} item ={value}/>
                ))}
                
            </View>
          
        )
    }
}

export default Home