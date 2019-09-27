import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  Button,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  SectionList,
  Text,
  Picker,
  Dimensions
} from 'react-native';
import DatePicker from 'react-native-date-picker';

class ViewTitleHeader extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: 30,
        }}>
        <Text style={{color: '#000000', fontSize: 14, marginLeft:14}}>
          {this.props.title}
        </Text>
        <ScrollView/>
        <Text style={{color: '#000000', fontSize: 14, marginRight:14}}>
          {this.props.dateStr}
        </Text>
      </View>
    );
  }
}

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStart: new Date(),
      dateEnd: new Date(),
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: 100,
            backgroundColor: '#0d2734',
          }}></View>
        <View
          style={{
            height: 44,
            backgroundColor: '#639bad',
            flexDirection: 'row',
            alignSelf: 'stretch',
          }}>
          <Text style={{color: '#ffffff', padding: 12, fontSize: 16}}>
            Select Period
          </Text>
        </View>
        <ViewTitleHeader title="Start Date" dateStr = {this.state.dateStart.toString}></ViewTitleHeader>
        <DatePicker style={{backgroundColor:"#c2dae1", alignSelf:"center", flexDirection:"row",width:Dimensions.get('window').width}}
        maximumDate = {this.state.dateEnd}
        mode = {'date'}
          date={this.state.dateStart}
          onDateChange={date => this.setState({dateStart:date})}
        />
        <ViewTitleHeader title="End Date"  dateStr = {this.state.dateEnd.toString}></ViewTitleHeader>
        <DatePicker style={{backgroundColor:"#c2dae1", flexDirection:"row",width:Dimensions.get('window').width}}
        maximumDate = {new Date()}
        mode = {'date'}
          date={this.state.dateEnd}
          onDateChange={date => this.setState({dateEnd:date})}
        />
        <ScrollView />
        <View
          style={{
            height: 44,
            backgroundColor: '#0d2734',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button onPress={() => {}} title="Back" color="#ffffff" />
          <Button
            onPress={() => {
              alert('You tapped the button!');
            }}
            title="Generate Report"
            color="#ffffff"
          />
        </View>
      </SafeAreaView>
    );
  }
}
