import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default class About extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>Grow your own swarm of bees, collect pollen, and make honey in Bee Swarm Simulator!</Text>
        <Image source={require('../assets/Collect_honey.PNG')} style={styles.pictures}/>
        <Image source={require('../assets/Make_honey.PNG')} style={styles.pictures}/>
        <Text>Meet friendly bears, complete their quests and get rewards!</Text>
        <Image source={require('../assets/Friendly_bears.PNG')} style={styles.pictures}/>
        <Image source={require('../assets/quests.PNG')} style={styles.pictures}/>
        <Text>As your hive grows larger and larger, you can explore further up the mountain. Use your bees to defeat dangerous bugs and monsters.</Text>
        <Image source={require('../assets/Deadly_bugs.PNG')} style={styles.pictures}/>
        <Text>Look for treasures hidden around the map.</Text>
        <Image source={require('../assets/hidden_treasure.PNG')} style={styles.pictures}/>
        <Text>Discover new types of bees, all with their own traits and personalities!</Text>
        <Image source={require('../assets/New_bees.PNG')} style={styles.pictures}/>
        <Text>Once your bees get stronger you can fight bosses for lots of rewards!</Text>
        <Image source={require('../assets/Bosses.PNG')} style={styles.pictures}/>
      </View>
</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pictures:{
    width:200,
    height:200,
  },
});
