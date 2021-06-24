import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types"
import { render } from "react-dom";

export default function Weather({ temp }) {
    return(
        <View styles={styles.container}>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});