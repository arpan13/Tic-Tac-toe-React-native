import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

let itemArray = new Array(9).fill("empty");

export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [winmessage, setWinMessage] = useState("");
  //to load fonts before loading apps
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // useEffect(() => {}, []);

  const drawItem = (itemNumber) => {
    //TODO:decide what to draw:circle or cross and default
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross;
      setIsCross(!itemArray[itemNumber]);
    }
    //TODO:check for  Wins 🤩🤩
    winGame();
  };
  const chooseItemIcon = (itemNumber) => {
    //TODO:choose appropriate icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  const chooseItemColor = (itemNumber) => {
    //TODO:choose color for icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  const resetGame = () => {
    //TODO:winning logic and check winner

    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty");

    //force update to the component
  };
  const winGame = () => {
    //TODO:wining logic
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      setWinMessage((itemArray[0] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      setWinMessage((itemArray[0] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      setWinMessage((itemArray[0] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
    if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      setWinMessage((itemArray[1] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
    if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      setWinMessage((itemArray[2] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
    if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      setWinMessage((itemArray[2] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
    if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      setWinMessage((itemArray[3] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
    if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      setWinMessage((itemArray[6] ? "cross" : "circle").concat(" Wins 🤩🤩"));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎇TIC TAC TOE🎇</Text>
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(0)}>
              <Entypo
                name={chooseItemIcon(0)}
                size={50}
                color={chooseItemColor(0)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(1)}>
              <Entypo
                name={chooseItemIcon(1)}
                size={50}
                color={chooseItemColor(1)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(2)}>
              <Entypo
                name={chooseItemIcon(2)}
                size={50}
                color={chooseItemColor(2)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(3)}>
              <Entypo
                name={chooseItemIcon(3)}
                size={50}
                color={chooseItemColor(3)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(4)}>
              <Entypo
                name={chooseItemIcon(4)}
                size={50}
                color={chooseItemColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(5)}>
              <Entypo
                name={chooseItemIcon(5)}
                size={50}
                color={chooseItemColor(5)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(6)}>
              <Entypo
                name={chooseItemIcon(6)}
                size={50}
                color={chooseItemColor(6)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(7)}>
              <Entypo
                name={chooseItemIcon(7)}
                size={50}
                color={chooseItemColor(7)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => drawItem(8)}>
              <Entypo
                name={chooseItemIcon(8)}
                size={50}
                color={chooseItemColor(8)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.winmessage}>{winmessage}</Text>
      <Button
        full
        rounded
        primary
        style={styles.btntext}
        style={styles.button}
        onPress={resetGame}
      >
        <Text>Reset Game</Text>
      </Button>
    </View>
  );
}

//functions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5d54a4",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {},
  row: { flexDirection: "row" },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30,
    backgroundColor: "#d789d7",
  },
  winmessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: "#9d65c9",
  },
  btntext: {
    color: "#FFF",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#e8e8e8",
    margin: 30,
  },
});
