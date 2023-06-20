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
  const {status} = useSelector(state => state.loginReducer);
  const onLogoutPress = () => {
    navigation.navigate('LoginScreen');
    dispatch(logout());
  };
  return (
    <View style={style.containerView}>
      <Text style={style.statusText}>{status}</Text>
      <Button mode="contained" onPress={() => onLogoutPress()}>
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
    justifyContent: 'center',
  },
});
