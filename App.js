import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState } from 'react';
import ZButton from './src/components/ZButton';

export default function App() {
  const [val, setVal] = useState(0);
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900 gap-4">
      <StatusBar style="auto" />
      <View className="flex flex-row gap-1">
        <ZButton title='+' onPress={() => setVal(val + 1)} />
        <ZButton title='-' onPress={() => setVal(val - 1)} />
        <ZButton title="reset" onPress={() => setVal(0)} />
      </View>
      <Text className="text-white">{val}</Text>
    </View>
  );
}
