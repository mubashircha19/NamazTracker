import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup";
import Home from "../screens/Home";
import Login from "../screens/login";
import Splash from "../screens/splash";
import Profile from "../screens/profile";

const Stack = createNativeStackNavigator();

function BaseNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name={"Signup"} component={Signup} />
        <Stack.Screen name={"Profile"} component={Profile} />

        <Stack.Screen
          name="Home"
          options={{
            headerShown: true,
          }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { BaseNavigation };
