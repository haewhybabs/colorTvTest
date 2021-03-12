import { Dimensions, StyleSheet } from 'react-native';
export const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    flex:1,
    margin:20
    
  },
  headerText:{
    marginTop:15,
    fontSize:25,
    fontWeight:'bold',
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderRadius: 30,
    padding: 2,
    height: 50,
    backgroundColor: '#F8F8FC',
    
  },
  containerStyle:{
    marginTop: 30, 
    paddingLeft: 0, 
    paddingRight: 0,
    backgroundColor:'#ffffff',
    borderWidth:0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
   
  },
  cardContainer:{
    margin:10,
    flexDirection:'row'
  },
  card:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:0.8,
    borderWidth:0.1,
    shadowRadius: 2,  
    elevation: 5,
    width:'100%',
    height:100,
    justifyContent:'center'

  },

  HeaderWrapper:{
    flexDirection:'row',
    width:'100%', 
  },
  SubHeaderText:{
    color:'#A8A8A8',
    fontWeight:'700'
  },
  ThumbNail:{
    width:40, 
    height:40,
    borderRadius:40/2,
  },
  ThumbNailWrapper:{
    marginLeft:'auto'
  },
  HeaderText:{
    fontWeight:'bold',
    fontSize:24,
    marginTop:5,
    color:'#404040'
  },

  ThumbNailCard:{
    width:60, 
    height:60,
    borderRadius:60/2,
  },
  cardTitle:{
    margin:15,
  },
  cardTextTitle:{
    fontSize:18,
    fontWeight:'bold'
  },

  viewUser:{
    borderRadius: 5,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    width:60,
    height: 20,
    marginLeft:'auto',
  },
  viewUserContainer:{
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
  },
  viewUserText:{
      fontSize:15
  }
})