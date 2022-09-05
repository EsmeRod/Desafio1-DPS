/**
 * @format
 */

 import React, {Component} from 'react';
 import {AppRegistry} from 'react-native'
 import {Text,View} from 'react-native';
 import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image} from 'react-native';
const DATA = [
 {
 id: '1',
 title: 'Mercurio',
 src:require('./src/imgs/planetamercurio.jpeg'),
 },
 {
 id: '2',
 title: 'Venus',
 src:require('./src/imgs/venus.jpeg'),

 },
 {
 id: '3',
 title: 'La Tierra',
 src:require('./src/imgs/tierra.jpeg'),

 },
 {
    id: '4',
    title: 'Estacion Espacial',
    src:require('./src/imgs/estacion.jpeg'),

},
{
    id: '5',
    title: 'Luna',
    src:require('./src/imgs/luna.jpeg'),

},
{
    id: '6',
    title: 'Marte',
    src:require('./src/imgs/marte.jpeg'),

},
{
    id: '7',
    title: 'Ceres',
    src:require('./src/imgs/ceres.webp'),

}
 ];
 const Item = ({ title }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 </View>
 );

 const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} />
 );

 return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
 }

 const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#f9c2ff',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 },
 title: {
 fontSize: 32,
 },
 });
AppRegistry.registerComponent("astronomia", () => App);
