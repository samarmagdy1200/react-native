import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { Card } from "./common";


class LibraryList extends Component {
    renderItem({ item }) {
        return <ListItem library={item} />;
    }

    render() {
        return (
            <Card>
                <FlatList
                    data={this.props.libraries}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </Card>
        );
    }
}

const mapStateToProps = ({ libraries }) => ({ libraries });

export default connect(mapStateToProps)(LibraryList);