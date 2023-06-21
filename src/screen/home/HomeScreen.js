import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {logout} from '../login/loginState/LoginSlice';
export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {status, token} = useSelector(state => state.loginReducer);

  const onLogoutPress = () => {
    dispatch(logout());
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={style.containerView}>
      <Text style={style.statusText}>{status} And your token is</Text>
      <Text style={style.tokenText}>{token}</Text>
      <Button
        mode="contained"
        buttonColor="blue"
        style={style.buttonStyle}
        onPress={() => onLogoutPress()}>
        Logout
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  statusText: {
    marginBottom: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  tokenText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '300',
  },
  buttonStyle: {
    marginTop: 30,
    width: '70%',
  },
});
