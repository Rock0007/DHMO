// App.jsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { UserProvider } from "./src/Contexts/userContext";
import Login from "./src/Auth/Login";
import Home from "./src/Components/Home";
import LeftNavbar from "./src/Components/LeftNavbar";
import MarkAttendance from "./src/Components/MarkAttendance";
import PatientEntry from "./src/Components/PatientEntry";
import PatientLogs from "./src/Components/PatientLogs";
import ViewAttendance from "./src/Components/ViewAttendance";
import Logout from "./src/Auth/Logout";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <LeftNavbar {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Patient Entry"
        component={PatientEntry}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Patient Logs"
        component={PatientLogs}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Mark Attendance"
        component={MarkAttendance}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="View Attendance"
        component={ViewAttendance}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        screenOptions={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
