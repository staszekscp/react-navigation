import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ScreenOne({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen One</Text>
      <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
}

function ScreenTwo({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen Two</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={{ animation: 'default' }}
        />
        <Stack.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={{ animation: 'default' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
