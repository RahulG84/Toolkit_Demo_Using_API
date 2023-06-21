import React, {useState} from 'react';
import {View, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {TextInput, Button, ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from './loginState/LoginSlice';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProcess, setIsProcess] = useState(false);

  const isLoading = useSelector(state => state.loginReducer.isLoading); // initialy isloading is false
  console.log('initial iseLoading', isLoading);

  const handleLogin = () => {
    dispatch(loginAction({email, password}));
  };

  const redirection = () => {
    if (isLoading) {
      navigation.navigate('HomeScreen');
      setIsProcess(!isProcess);
    }
  };

  console.log('after hitting islogin', isLoading);

  //superexaze@exazeit.com
  //super@exaze

  return (
    <ScrollView style={styles.containerView}>
      <StatusBar backgroundColor={'blue'} barStyle={'light-content'} />
      <View style={styles.inputContainerView}>
        <TextInput
          label="Email"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={email}
          onChangeText={emails => setEmail(emails)}
          style={styles.emailTextInputField}
        />
        <TextInput
          label="Password"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={password}
          secureTextEntry={true}
          onChangeText={pass => setPassword(pass)}
        />
      </View>
      {isProcess ? <ActivityIndicator color="blue" /> : null}

      <View style={styles.buttonView}>
        <Button
          mode="contained"
          onPress={() => {
            handleLogin();
            redirection();
          }}
          style={styles.button}>
          Home
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerView: {flex: 1},
  headingView: {alignItems: 'flex-start'},
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 30,
    marginLeft: 20,
  },
  subHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 5,
    marginLeft: 30,
  },
  loginImageView: {marginTop: 20, alignItems: 'center'},
  inputContainerView: {marginTop: 20, marginHorizontal: 20},
  emailTextInputField: {marginBottom: 10},
  buttonView: {marginTop: 20, marginHorizontal: 20},
  button: {backgroundColor: 'blue'},
  secondaryButtonView: {marginTop: 20, marginLeft: 20, marginBottom: 40},
  secondaryButton: {fontSize: 16, fontWeight: '600', color: 'blue'},
  helperText: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
  },
});
