import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator ();

function BottomTabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name = 'Home' 

                //calls components imported from 'homescreen'//
                component={HomeScreen}
                options = {{
                    // name shown //
                    tabBarLabel: 'Home',

                    // toggles header at the top//
                    headerShown: false,

                    //letter color (white makes it invisible)//
                    tabBarLabelStyle: {color: 'white'},

                    //style changes when icon is selected//
                    tabBarIcon: ({focused}) => 
                        focused ? (

                            //icons called from internet source//
                            <Entypo name="home" size={24} color="green" />
                        ) : (
                            <Entypo name="home" size={24} color="black" />
                        )
                }}/>

            
            <Tab.Screen 
            //copy/pasted from above//
                name = 'Profile' 
                component={ProfileScreen}
                options = {{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarLabelStyle: {color: 'white'},
                    tabBarIcon: ({focused}) => 
                        focused ? (
                            <Ionicons name="person-circle-outline" size={24} color="green" />
                        ) : (
                            <Ionicons name="person-circle-outline" size={24} color="black" />
                        )
                }}/>  


        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator ();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Main'
                    component={BottomTabs}
                    options = {{headerShown: false}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation