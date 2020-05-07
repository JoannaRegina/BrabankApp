import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, AsyncStorage } from 'react-native';

export default class Tela03 extends Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		email: this.props.navigation.state.email
	// 		// senha: ''
	// 	}
    //     // const {params} = this.props.navigation.state;
        // email = this.props.navigation.state.email
        // this.senha = params.senha;
	// }

	constructor(props) {
		super(props)
		const { params } = this.props.route.params
		this.state = {
			email: params.email,
			senha: params.email
		}
	}
	
	// constructor(props) {
	// 	super(props);
	// 	const { params } = this.props.navigation.state;
	// 	var data = params.email;     
	// 	this.state = {
	// 	  email : data
	// 	};
	//   }

	teste = () => {
		console.log(this.props.route.params.params)
		// console.log(this.state)
	}

	// this.props.navigation.getParam(paramName, defaultValue)
	render() {
		return (
			<View style={styles.container} >
				<Text>Bem vindo a Home : </Text>
				<TextInput style={styles.input} placeholder="Seu e-mail" onChangeText={texto => this.setState({ email: texto })} />
				<TouchableOpacity onPress={this.teste} >
					<Text>CLICA AQUI</Text>
				</TouchableOpacity>
			</View>


		)
	}


}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#01579b',
		justifyContent: "center",
	},

	form: {
		margin: 16,
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 10,
		alignItems: 'center'
	},

	titulo: {
		marginBottom: 20,
		fontSize: 30,
		color: '#01579b',
		fontWeight: 'bold',
		textAlign: "center",
		borderBottomColor: '#2196f3',
		borderBottomWidth: 1,
		width: 200,
		paddingBottom: 12

	},

	input: {
		marginTop: 8,
		padding: 8,
		alignSelf: 'stretch',
		backgroundColor: 'white',
		fontSize: 16,
		borderRadius: 8,
		borderColor: '#b0bec5',
		borderWidth: 1,
	},

	button: {
		alignItems: 'center',
		alignSelf: 'stretch',
		height: 42,
		marginTop: 16,
		borderRadius: 8,
		borderColor: '#253F5B',
		backgroundColor: '#253F5B',
		borderWidth: 2,
		padding: 8

	},

	buttonDarkBlue: {
		backgroundColor: '#b0bec5',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: 42,
		marginTop: 16,
		borderRadius: 8,
		borderColor: '#b0bec5',
		borderWidth: 2,
		padding: 8
	},

	textButtonBlack: {
		color: 'black',
		fontSize: 15,
		fontWeight: "bold"
	},

	textButton: {
		color: 'white',
		fontSize: 15,

	}

})