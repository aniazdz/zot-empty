import { Text, Pressable } from 'react-native';

export default function ZButton(props) {
  return (
        <Pressable className="flex justify-center items-center rounded-full py-2 px-4 bg-blue-500 active:bg-blue-600" {...props}>
          <Text className="text-white">{props.title}</Text>
        </Pressable>
    );
}