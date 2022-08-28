import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Admin from '../screens/Admin';
import Sold from '../screens/Sold';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

export default function Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Sold" component={Sold} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}
