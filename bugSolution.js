The `useWindowDimensions` hook provides a more reliable method for obtaining screen dimensions.  It automatically updates when the device orientation changes and accurately reflects the current window size.  This approach avoids the timing issues and inaccuracies associated with `Dimensions.get('window')`.

```javascript
import { useWindowDimensions } from 'react-native';

const MyComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
};

```

By replacing the old method with `useWindowDimensions`, you guarantee accurate screen dimensions throughout your React Native app.