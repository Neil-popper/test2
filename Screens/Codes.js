import React, { Component } from 'react';
//import {
//  Table,
//  TableWrapper,
//  Row,
//  Rows,
//  Col,
//} from 'react-native-table-component';
//import { StyleSheet, Text, View, ScrollView } from 'react-native';
//
//export default class Codes extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      tableHead: ['Codes', 'Added', 'reward'],
//      tableTitle: [
//        '10mMembers',
//        'PlushFriday',
//        'MondoOutage',
//        '1MLikes',
//        'BANNED',
//        'Mocito100T',
//        'RedMarket',
//        'Cubly',
//        'Teespring',
//        'BeesBuzz123',
//        'Discord100k',
//        '500mil',
//        'Marshmallow',
//        'ClubConverters',
//        'Sure',
//        'GumdropsForScience',
//        'SecretProfileCode',
//        'ClubBean ',
//        'Wink',
//        '38217',
//        'Bopmaster',
//        'Buzz',
//        'Cog',
//        'Connoisseur',
//        'Crawlers',
//        'Nectar',
//        'Roof',
//        'Wax',
//      ],
//      tableData: [
//        ['2021-11-29', 'Neonberry x10, Strawberry x10, Blueberry x10, Pineapple x10, Sunflower Seed x10, Gumdrops //x10, Moon Charm x10, Haste x10, Focus x10, Red Boost x10, Blue Boost x10, White Boost x10, Black Bear Morph, //Conversion Boost (Duratation: 1 hour), Pineapple Patch Code Buff, Pepper Patch Code Buff, Stump Field Code Buff'],
//        ['2021-26-11', 'Marshmallow Bee x1, Neonberry x1, Micro-Converter x1, 1h Conversion Boost, Pine Tree //Forest Code Buff, Rose Field Code Buff, Dandelion Field Code Buff, Super Smoothie Buff'],
//        ['2021-31-10', 'Micro-Converter x3, Moon Charm x10, Neonberry x1, Marshmallow Bee x1, Mountain Top Field //Code Buff, Purple Potion Buff'],
//        ['2020-12-13', 'Super Smoothie Buff, Unlimited Gumdrops Buff x1, Mother Bear Morph, Blue Boost x1, Red //Boost x1, White Boost x1, Baby Love Buff, Melody Buff, Mountain Top Field Boost x1, Clover Field Boost x1, Blue //Flower Field Boost x1, Sunflower Field Boost x1, Mushroom Field Boost x1, Spider Field Boost x1, Strawberry Field //Boost x1, Bamboo Field Boost x1, Pineapple Patch Boost x1, Capacity Code Buff (Duration: 1 hour), Wealth Clock //Buff x1, Ticket x1, Treat x1, Bitterberry x1, Sunflower Seed x1, Strawberry x1, Blueberry x1, Pineapple x1, Moon //Charm x1, Cloud Vial x1, Ant Pass x1, Field Dice x1, Micro-Converter x1, Coconut x1, Stinger x1, Gumdrops x1, 1 //Honey'],
//        ['2020-11-22	', 'Stubborn Bee Jelly x1, Spider Field Code Buff'],
//        ['2020-06-27	', 'Coconut Field Boost x2, Coconut Field Capacity x2, Stinger x3, Gumdrops x5, Coconut x10,// Inspire x5'],
//        ['2020-06-16	', 'Pepper Patch Boost x1, Pepper Patch Capacity x1, Pepper Patch Market Boost (Duration: //30 minutes)'],
//        ['2020-04-24', 'Bumble Bee Jelly x1, Bitterberry x10, Micro-Converter x1, Capacity Code Buff (Duration: 1 //hour)'],
//        ['2019-10-29', 'Marshmallow Bee x1, Bamboo Field Boost x3, Bamboo Field Winds x3'],
//        ['2019-09-26', 'Cloud Vial x1, Bitterberry x5, Gumdrops x5'],
//        ['2019-07-06', 'Marshmallow Bee Buff, Rose Field Boost x3, Pine Tree Forest Boost x3, Spider Field Boost //x3, Gumdrops x3, Moon Charm x3, Ticket x3'],
//        ['2019-05-04', 'Field Dice x5, Gumdrops x5, Wealth Clock x5, 1h Conversion Boost, Stump Field Boost x2, //Bamboo Field Boost x3, Science Bear Morph'],
//        ['2019-04-18', 'Marshmallow Bee ×1, 1h Conversion Boost'],
//        ['2019-04-14', 'Micro-Converters x10 (Members only)'],
//        ['2019-02-21', '30 minute Conversion Boost, Dandelion Field Boost ×3, 2,500 Honey'],
//        ['2018-12-19', 'Gumdrops ×15'],
//        ['2018-12-04', 'Ant Pass, Shocked Bee Jelly, Oil Buff, Glue Buff, Enzymes Buff (Members only)'],
//        ['2018-11-28', 'Magic Bean, Pineapple Patch Boost ×2'],
//        ['2018-06-08', 'Tickets x5 , 5,000 Honey, Black Bear Morph, Dandelion Field Boost x7'],
//        ['2018-05-18', 'Ticket x5'],
//        ['2018-05-18', 'Ticket x5'],
//        ['2018-05-18', '5,000 Honey'],
//        ['2018-05-18', 'Ticket x5'],
//        ['2018-05-18', 'Ticket x5'],
//        ['2018-05-18', 'Ticket x5'],
//        ['2018-05-18', '5,000 Honey'],
//        ['2018-05-18', 'Ticket x5'],
//        ['2018-05-18', 'Ticket x5, 5,000 Honey'],
//      ],
//    };
//  }
//
//  render() {
//    const state = this.state;
//    return (
//      <ScrollView>
//        <View style={styles.container}>
//          <Table borderStyle={{ borderWidth: 1 }}>
//            <Row
//              data={state.tableHead}
//              flexArr={[0.75, 1.5, 1.5]}
//              style={styles.head}
//              textStyle={styles.text}
//            />
//            <TableWrapper style={styles.wrapper}>
//              <Col
//                data={state.tableTitle}
//                style={styles.title}
//                heightArr={[150,150,150,610,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,//150,150,150,150,150,150,150,150,150]}
//                textStyle={styles.text}
//              />
//              <Rows
//                data={state.tableData}
//                flexArr={[1,1,2]}
//                heightArr={[150,150,150,610,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,//150,150,150,150,150,150,150]}
//                
//                textStyle={styles.text}
//              />
//            </TableWrapper>
//          </Table>
//        </View>
//      </ScrollView>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//  head: { height: 40, backgroundColor: '#f1f8ff' },
//  wrapper: { flexDirection: 'row' },
//  title: { flex: 1, backgroundColor: '#f6f8fa' },
//  row: { height: 150 },
//  text: { textAlign: 'center' },
//});
//