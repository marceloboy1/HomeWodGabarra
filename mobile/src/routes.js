import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator();

import Main from './pages/Main'
import Pilates from './pages/Pilates'
import Crossfit from './pages/Crossfit'
import Idoso from './pages/Idoso'
import Detail from './pages/Detail'
import Lista from './pages/Lista'
import Upload from './pages/Upload'

export default function Routes(){
return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>

                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="Pilates" component={Pilates} />
                <AppStack.Screen name="Crossfit" component={Crossfit} />
                <AppStack.Screen name="Idoso" component={Idoso} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Lista" component={Lista} />
                <AppStack.Screen name="Upload" component={Upload} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}