import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [val, setVal] = useState(0);
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <StatusBar style="auto" />
      <View className="flex flex-row ">
        <Button title='+' onPress={() => setVal(val + 1)} />
        <Button title='-' onPress={() => setVal(val - 1)} />
      </View>
      <Text className="text-white">Increment me: {val}</Text>
    </View>
  );
}
