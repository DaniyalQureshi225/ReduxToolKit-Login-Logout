import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, setItem, decriment} from '../redux/StroageSlice';

const FirstScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const CountValue = useSelector(state => state.storage.count);

  const Me = {name: 'Daniyal Qureshi'};

  const SendValue = () => {
    dispatch(setItem(Me));
  };

  const IncreseValue = () => {
    dispatch(increment());
  };

  const DecreseValue = () => {
    dispatch(decriment());
  };

  return (
    <View>
      <Text>First Screen</Text>
      <Button title="Set Item" onPress={SendValue} />
      <Text>{CountValue}</Text>
      <Button title="Increase" onPress={IncreseValue} />
      <Button title="Decrese" onPress={DecreseValue} />
    </View>
  );
};

export default FirstScreen;
