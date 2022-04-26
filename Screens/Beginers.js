import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class Beginer extends Component {

  render() {
    return (
      <ScrollView>
      <View>
        <Text style={styles.header}>When You First Start:</Text>
        <Text style={styles.color1}>Go to the codes page and redeem all of the codes that don't give you boosts. We will save the boosts for later. You should get a lot of honey and tickets. Go to the egg shop and buy as many basic eggs as you can. Don't forget to come and check the codes to see if there are any new ones later. Talk to black bear and mother bear and do their quests. Later quests give a lot of honey. Buy better backpack and pollen collecters ASAP. When fighting a mob jump around a lot. Mobs don't follow you while in the air so it will confuse them. If you can buy eggs but it instead of buying things from the shop. 
</Text>
<Text style={styles.header}>When You get 5 bees:</Text>
<Text style={styles.color2}>Once you make it to the 5 bee area talk to the Panda Bear for new quests that involve killing mobs. Give priority to completing his quests over Black Bear's quests. If the mobs for completing his quests aren't available, work on other quests.  Collect pollen from double flowers or big flowers. Double flowers give double pollen and big ones give tripple.</Text>
<Text style={styles.header}>When You get 10 bees:</Text>
<Text style={styles.color3}>Once you get 10 bees talk to the Science Bear for new quests that involve a little bit of everything, but focus on having variety in your hive. Always prioritize his quests over other quests. If you have royal jelly use it on basic bees to get a variety of bees for science bear. Go to the shop in the 10 bee area and buy the Super-Scooper and Mega-Jug. When you get more honey get a parachute.</Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    alignSelf: "center",
    fontSize:35
  },
  color1:{
    color:"red"
  },
  color2:{
    color:"orange"
  },
  color3:{
    color:"yellow"
  },
});
