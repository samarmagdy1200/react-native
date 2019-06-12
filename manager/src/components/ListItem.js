import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

import { CardSection } from "./common";

export default ListItem = ({ name, onPress }) => {
    return (
        <CardSection>
            <TouchableHighlight onPress={onPress}>
                <Text style={styles.textStyle}>{name}</Text>
            </TouchableHighlight>
        </CardSection>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});