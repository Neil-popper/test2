import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import About from './About'

export default class LoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      email : "",
      password : ""
    }
  }

  showAlert(errorCode){
    switch(errorCode){
      case 'auth/too-many-requests':
        Alert.alert('To many requests\nTry again later')
        this.setState({
          email:"",
          password : ""
        })
        break
      case 'auth/wrong-password':
        Alert.alert('Enter Correct password')
        this.setState({
          password : ""
        })
        break
      default:
        this.setState({
          email:"",
          password : ""
        })
        return Alert.alert('Invalid email and password')
    }
  }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>

        <View style={styles.subContainer1}>
          <Text style={styles.title}>Bee Swarm Simulator</Text>
          <TextInput
              placeholder="example@email.com"
              placeholderTextColor = "#ffff"
              onChangeText= {(emailText)=>{
                  this.setState({
                      email: emailText
                  })
              }}
              value={this.state.email}
              style={styles.textInput}
              />
          <TextInput
              placeholder="password"
              placeholderTextColor = "#ffff"
              onChangeText= {(passwordText)=>{
                  this.setState({
                      password: passwordText
                  })
              }}
              value={this.state.password}
              style={styles.textInput}
              secureTextEntry = {true}
              />
        </View>
        <View style={styles.subContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress = {async()=>{
              var email  = await this.state.email;
              var password = await this.state.password
              firebase.auth().signInWithEmailAndPassword(email, password)
              .then(()=>{
                this.props.navigation.navigate('./About')
              })
              .catch((error)=> {
                var errorCode = error.code;
                var errorMessage = error.message;
                return this.showAlert(errorCode)
              })
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3c6382'
  },
  title:{
    fontWeight:"normal",
    fontSize:30,
    padding:25,
    color:'#ffff'
  },
  image:{
    width:"60%",
    height:"40%",
    marginBottom:30,
    borderWidth:5,
    borderColor:'#ffff',
    borderRadius:20
  },
  subContainer1:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer2:{
    flex:0.4,
    alignItems:'center'
  },
  textInput : {
    width:"70%",
    height: "10%",
    borderWidth:1,
    borderColor:'#ffff',
    padding:10,
    marginBottom:10,
    borderRadius:20
  },
  button:{
    width:"75%",
    height:"11%",
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#ffff',
    borderRadius:15
  },
  buttonText:{
    color:'white',
    fontSize:25
  }
})