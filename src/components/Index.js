import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela01 from './Tela01';
import Tela02 from './Tela02';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';


const Stack = createStackNavigator();

// Função que retorna a tela de login
export default function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Tela01"
					component={Tela01}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Tela02"
					component={Tela02}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>

				<Stack.Screen 
					name = "Cadastro"
					component = {Cadastro}
					options = {{title: 'Faça seu cadastro'}}
				/>

				<Stack.Screen 
					name = "Home"
					component = {Home}
					options = {{title: 'Tela inicial'}}
				/>

			</Stack.Navigator>
		</NavigationContainer>

	)
}

// const MainNavigation = createStackNavigator({
//     Login:{
//         screen: Login,
//         navigationOptions:{
//             headerShow: false
//         }
//     }
// })

// const App = createAppContainer(MainNavigation)

// export default App
