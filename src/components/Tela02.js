import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Tela02 extends Component {

    static navigationOptions = {
        title: 'Tela02',
    };

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.email = params.email;
        this.senha = params.senha;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Email : {this.email}</Text>
                <Text style={{marginTop: 10}}>senha : {this.senha}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
});