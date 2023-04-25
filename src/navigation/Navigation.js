import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash/Splash';
import OnBoarding2 from '../screens/onboarding2/OnBoarding2';
import 'react-native-gesture-handler';
import Onboarding from '../screens/onboarding/Onboarding';
import Login from '../screens/login/Login';
import SignUp from '../screens/signup/SignUp';
import Home from '../screens/home/Home';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import OtpVerification from '../screens/otpVerification/OtpVerification';
import CreateNewPassword from '../screens/newPassword/CreateNewPassword';
import Loader from '../screens/loader/Loader';
import BottomTab from '../screens/bottomTab/BottomTab';
import TopDoctors from '../screens/topDoctors/TopDoctors';
import FindDoctor from '../screens/findDoctor/FindDoctor';
import DoctorDetails from '../screens/doctorDetails/DoctorDetails';
import Appointment from '../screens/appointment/Appointment';
export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetails} />
        <Stack.Screen name="FindDoctor" component={FindDoctor} />
        <Stack.Screen name="TopDoctors" component={TopDoctors} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="NewPassword" component={CreateNewPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="OTPscreen" component={OtpVerification} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
