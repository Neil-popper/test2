import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class Intermediate extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Once you get 15 bees</Text>
        <Text style={styles.color4}>Talk to the Polar Bear for new quests that involve a little bit of everything. His quests take lower priority than any other quests. The Werewolf is very powerful and the easiest way to kill him is too put a cactus or pumpkin between you. There is a golden egg gaurded by very fast cave spiders inside the werefolf cave. To get the egg max out your speed boost then charge straight into the cave. Go back to the Codes page and start looking for codes with boosts in them. Activate those codes and focus on boosted fields to get lots of pollen and honey in short amounts of time. Your swarm may now be strong enough to take on the King Beetle. Kill him every day for lots of honey, Royal Jelly, and a chance at an amulet with some helpful boosts. One of the easiest ways to defeat him is to wait until he gets ready to charge, then jump and float to the side with the parachute. Stay close to where he lunges from and your bees won't get confused and run back to you as often. If Basic Eggs are starting to become very expensive, return to the second shop to buy some high-end items instead. Purchase the Propeller Hat and Port-O-Hive when you have enough honey, preferably in that order. If you absolutely must buy a better collector, save up for a Bubble Wand or Scythe, preferably the former. </Text>
        <Text style={styles.header}>When you get 20 bees</Text>
        <Text style={styles.color5}>You now have access to the Ant Challenge, which is an excellent source of Royal Jelly and will help you quickly improve the quality of your hive. It also allows you to get another amulet which will mostly help conversion. As your hive increases in size and bees grow in level, play the Ant Challenge to improve the quality of your Ant Amulet. Don't spend too many tickets buying Ant Passes. Generally, if you don't have a quest that demands you kill ants and don't have a lot of Basic Bees in your hive, they aren't worth buying. If you've finally reached five Gifted Bees, you can use one of the cannons and the Parachute to get into Star Hall and buy a Bronze Star Amulet for 25 million honey. This is not recommended, as there are much better things to spend that amount of honey on, but should be kept in mind for later. Your swarm may now be strong enough to take on the Tunnel Bear. Kill him every two days for lots of honey and Royal Jelly.</Text>

        <Text style={styles.header}>When you get 25 bees or 22 types of bees</Text>
        <Text style={styles.color6}>Use the Red Cannon to get past the Lion Bee Gate without having 25 bees in your swarm.
Use the Parachute in conjunction with the cannon to access any fields past the Brave or Honey Bee Gates quickly from the hive, or to gather more Royal Jelly around the map. Save up and buy Blue Guard and Red Guard to improve respective color pollen gathering rate. Do not bother with the Elite versions of the guard as they do not provide enough marginal benefit for their cost. Save up and buy the Beekeeper's Mask to greatly improve bee pollen gathering. This is preferable to buying hive expansions and eggs unless you have been buying eggs with Robux. When the Hive Slots become more expensive, spend honey on buying the Bronze Star Amulet (if you don't already have one) and replacing your Blue and Red Guards with the Bucko Guard and Riley Guard respectively (I recommend Riley first).
</Text>
<Text style={styles.header}>When you get 30 bees</Text>
<Text style={styles.color7}>You're pretty much a BSS pro now! You probably have learned enough about the game through reading this guide and playing the game that you can figure out for yourself what you should do. Head past the Bear Gate and talk to Onett for some endgame quests that should take you a long time to complete.</Text>

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
  color4:{
    color:"green"
  },
  color5:{
    color:"blue"
  },
  color6:{
    color:"violet"
  },
  color7:{
    color:"indigo"
  },
});