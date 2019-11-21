import { View } from '@tarojs/components';

export const Test = Taro.memo(({ name }: { name: string }) => {
  return <View>Test component {name}</View>;
});
