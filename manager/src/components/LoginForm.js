import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions/authActions";

class LoginForm extends Component {
    onEmailChange(email) {
        this.props.emailChanged(email);
    }

    onPasswordChange(password) {
        this.props.passwordChanged(password);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser(email, password);
    }

    renderButton() {
        if(this.props.loading)
            return <Spinner size="large" />

        return (<Button onPress={this.onButtonPress.bind(this)}>Login</Button>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="test@test.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="Password"
                        secureTextEntry
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.props.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 25,
        color: "red",
        alignSelf: "center"
    }
});

const mapStateToProps = ({ auth }) => ({
        email: auth.email,
        password: auth.password,
        loading: auth.loading,
        error: auth.error
});

export default connect(
    mapStateToProps, 
    { 
        emailChanged,
        passwordChanged,
        loginUser
    }
)(LoginForm);