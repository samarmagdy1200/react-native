import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    LayoutAnimation
} from "react-native";
import { connect } from "react-redux";

import { CardSection } from "./common";
import { selectLibrary } from "../actions";

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { expanded, library: { description } } = this.props;

        if(expanded)
            return (
                <CardSection>
                    <Text>
                        {description}
                    </Text>
                </CardSection>
            );
    }

    render() {
        const { id, title } = this.props.library;

        return (
            <View>
                <TouchableHighlight onPress={() => this.props.selectLibrary(id)}>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </TouchableHighlight>

                {this.renderDescription()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        paddingLeft: 10
    }
});

const mapStateToProps = (state, ownProps) => {
    return {
        expanded: 
            state.selectedLibraryId === ownProps.library.id ? true : false
    };
};


export default connect(
    mapStateToProps,
    { selectLibrary: selectLibrary }
    )(ListItem);