import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button } from 'react-native';

export default class Login extends Component {

	constructor(){
		super()
		this.state = {
			cpf: '',
			senha: ''
		}
	}

	entrar = e => {
		if(!this.validar()) return // se não tiver validado, retorna a função validar()
	}

	cadastrar = e => {
		this.props.navigation.navigate('Cadastro')
	}

	validar = () => {
		const {email, senha} = this.state
		if(!email || !senha){
			alert('Ops...', 'Todos os campos são obrigatórios')
			return false
		}
		return true
	}


	render() {
		return (
			<View style={styles.container} >
				<View style={styles.form}>
					<Text style={styles.titulo}>Login</Text>
					<TextInput style={styles.input} placeholder="Seu e-mail" onChangeText={texto => this.setState({email:texto})} />
					<TextInput style={styles.input} placeholder="Sua senha" onChangeText={texto => this.setState({senha:texto})} ></TextInput>

					<TouchableOpacity style={styles.button} onPress = {this.entrar}>
						<Text style={styles.textButton}>Entrar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonDarkBlue} onPress = {this.cadastrar} >
						<Text style={styles.textButtonBlack}>Cadastrar-se</Text>
					</TouchableOpacity>

				</View>
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

	form:{
		margin:16,
		backgroundColor:'white',
		padding:16,
		borderRadius: 10,
		alignItems: 'center'
	},

	titulo:{
		marginBottom:20,
		fontSize:30,
		color: '#01579b',
		fontWeight: 'bold',
		textAlign:"center",
		borderBottomColor: '#2196f3',
		borderBottomWidth: 1,
		width:200,
		paddingBottom: 12

	}, 

	input:{
		marginTop: 8,
		padding: 8,
		alignSelf: 'stretch',
		backgroundColor: 'white',
		fontSize: 16,
		borderRadius: 8,
		borderColor: '#b0bec5',
		borderWidth: 1,
	},

	button:{
		alignItems: 'center',
		alignSelf: 'stretch',
		height:42,
		marginTop:16,
		borderRadius:8,
		borderColor:'#253F5B',
		backgroundColor:'#253F5B',
		borderWidth: 2,
		padding: 8

	},

	buttonDarkBlue:{
		backgroundColor:'#b0bec5',
		alignItems: 'center',
		alignSelf: 'stretch',
		height:42,
		marginTop:16,
		borderRadius:8,
		borderColor:'#b0bec5',
		borderWidth: 2,
		padding: 8
	},

	textButtonBlack:{
		color:'black',
		fontSize:15,
		fontWeight: "bold"
	},

	textButton:{
		color:'white',
		fontSize:15,
		
	}

})