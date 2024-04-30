import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const DetailsScreen = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default DetailsScreen;
