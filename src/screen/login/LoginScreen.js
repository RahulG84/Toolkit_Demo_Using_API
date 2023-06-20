import React, {useState} from 'react';
import {View, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {
  TextInput,
  Button,
  ActivityIndicator,
  HelperText,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from './loginState/LoginSlice';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isProcess, setIsProcess] = useState(false);

  const iseLoading = useSelector(state => state.loginReducer.isLoading);
  console.log(iseLoading);

  const handleLogin = () => {
    if (!iseLoading) {
      dispatch(loginAction({email, password}));
      navigation.navigate('HomeScreen');
      setIsError(!isError);
      setIsProcess(iseLoading);
    }
  };

  console.log('after hitting islogin', iseLoading);
  console.log('is Error', isError);

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
      {isError ? (
        <HelperText type="error">
          Please Enter Correct Email And Password
        </HelperText>
      ) : null}
      {isProcess ? <ActivityIndicator color="blue" /> : null}

      <View style={styles.buttonView}>
        <Button
          mode="contained"
          onPress={() => handleLogin()}
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
