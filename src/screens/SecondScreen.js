import React from 'react';
import {View, Text, Button} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {removeItem} from '../redux/StroageSlice';

const SecondScreen = () => {
  const dispatch = useDispatch();
  const storedValue = useSelector(state => state.storage.value);
  const storedCount = useSelector(state => state.storage.count);

  const SendValue = () => {
    dispatch(removeItem());
  };

  return (
    <View>
      <Text>Second Screen</Text>
      <Text>
        Stored Value: {storedValue?.name} {storedCount}
      </Text>
      <Button title="Remove Item" onPress={SendValue} />
    </View>
  );
};

export default SecondScreen;
