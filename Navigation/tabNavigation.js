import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Admin from '../screens/Admin';
import Sold from '../screens/Sold';
import Splash from '../screens/Splash';
import Signin from '../screens/Signin';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Signin">
      <Tab.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Admin"
        component={Admin}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sold"
        component={Sold}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
