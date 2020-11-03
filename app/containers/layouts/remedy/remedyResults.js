import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { List, withStyles, Avatar, Text, Button } from "react-native-ui-kitten";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { cameraPlaceholder } from "@app/assets";
import ScrollableAvoidKeyboardComponent from "@app/components/common/ScrollableAvoidKeyboardComponent";
import { navigate, navigateAndReset } from "@app/actions/routes";
import { NameValidator } from "@app/validators";
import ValidationInput from "../../../components/common/ValidationInput";

class RemedyResults extends Component {
  render() {
    const { themedStyle } = this.props;
    return (
      <ScrollableAvoidKeyboardComponent style={themedStyle.container}>
        <LinearGradient colors={["#077806", "#ffffff"]} style={{ flex: 1 }}>
          <View style={themedStyle.mainContainer}>
            <View style={[themedStyle.imageContainer]}>
              <Image
                source={cameraPlaceholder}
                style={{ width: "100%", height: 250 }}
              />
            </View>
            <View style={themedStyle.valueContainer}>
              <Text
                style={{ color: "#ffffff", fontSize: 18, marginBottom: 10 }}
              >
                Insert the following values:
              </Text>
            </View>
            <View style={themedStyle.buttonContainer}>
              <Button
                size="large"
                style={themedStyle.SignUpButton}
                onPress={() => this.props.navigate("Remedy Researches")}
              >
                Check Remedy
              </Button>
            </View>
          </View>
        </LinearGradient>
      </ScrollableAvoidKeyboardComponent>
    );
  }
}

const Actions = {
  navigate,
  navigateAndReset,
};

const RemedyResultsContainer = withStyles(RemedyResults, () => ({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 250,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  mainContainer: {
    flex: 1,
  },
  valueContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  textInput: {
    marginTop: 8,
  },
  buttonContainer: { marginVertical: 8, marginHorizontal: 8, marginBottom: 20 },
}));

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, Actions)(RemedyResultsContainer);
