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
  TextInput,
  Picker,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Navigation} from 'react-native-navigation';
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
        <Text style={{color: '#000000', fontSize: 14, marginLeft: 14}}>
          {this.props.title}
        </Text>
        <ScrollView />
        <Text style={{color: '#000000', fontSize: 14, marginRight: 14}}>
          {this.props.dateStr}
        </Text>
      </View>
    );
  }
}
class ViewTextInput extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#cadfe5',
          marginHorizontal: 8,
          padding: 4,
        }}>
        <TextInput
          style={{minHeight: 20, maxHeight: this.props.maxHeight, flex: 1}}
          multiline={false}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType}
        />
      </View>
    );
  }
}
export default class AddJourney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateOFJourney: new Date(),
      isDatePickerHidden: true,
    };
  }
  renderDatePickerView() {
    if (this.state.isDatePickerHidden !== true)
      return (
        <DatePicker
          style={{
            backgroundColor: '#c2dae1',
            alignSelf: 'center',
            flexDirection: 'row',
            width: Dimensions.get('window').width,
          }}
          maximumDate={new Date()}
          mode={'date'}
          date={this.state.dateOFJourney}
          onDateChange={date => this.setState({dateOFJourney: date})}
        />
      );
    return null;
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
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
              Add Journey
            </Text>
          </View>
          <ScrollView>
            <View style={{width: Dimensions.get('window').width}}>
              <ViewTitleHeader title="Date"></ViewTitleHeader>
              <View
                style={{
                  position: 'absolute',
                  width: Dimensions.get('window').width,
                }}>
                <Button
                  onPress={() => {
                    this.setState({
                      isDatePickerHidden: !this.state.isDatePickerHidden,
                    });
                  }}
                  title="Add Another Journey"
                  color="#ffffff"
                />
              </View>
            </View>
            <View>{this.renderDatePickerView()}</View>
            <ViewTitleHeader title="Destination"></ViewTitleHeader>
            <ViewTextInput
              placeholder="Enter desitnation of journey"
              maxHeight={20}
            />
            <View style={{height: 8}}></View>
            <Picker
              style={{
                backgroundColor: '#c2dae1',
                marginHorizontal: 8,
              }}
              selectedValue={(this.state && this.state.pickerValue) || 'a'}
              onValueChange={value => {
                this.setState({pickerValue: value});
              }}
              itemStyle={{color: 'black', fontSize: 17}}>
              <Picker.Item label={'1'} value={'b'} />
              <Picker.Item label={'2'} value={'c'} />
              <Picker.Item label={'3'} value={'d'} />
            </Picker>
            <ViewTitleHeader title="Reason For Journey"></ViewTitleHeader>
            <ViewTextInput
              placeholder="Enter reason for journey"
              maxHeight={20}
            />
            <View style={{height: 8}}></View>
            <Picker
              style={{
                backgroundColor: '#c2dae1',
                marginHorizontal: 8,
              }}
              selectedValue={(this.state && this.state.pickerValue) || 'a'}
              onValueChange={value => {
                this.setState({pickerValue: value});
              }}
              itemStyle={{color: 'black', fontSize: 17}}>
              <Picker.Item label={'1'} value={'b'} />
              <Picker.Item label={'2'} value={'c'} />
              <Picker.Item label={'3'} value={'d'} />
            </Picker>
            <ViewTitleHeader title="Starting Mileage"></ViewTitleHeader>
            <ViewTextInput
              placeholder="Enter Starting Mileage"
              maxHeight={20}
              keyboardType="numeric"
            />
            <ViewTitleHeader title="Finishing Mileage"></ViewTitleHeader>
            <ViewTextInput
              placeholder="Enter Finishing Mileage"
              maxHeight={20}
            />
            <View style={{height: 8}}></View>
          </ScrollView>
          <View
            style={{
              height: 44,
              backgroundColor: '#639bad',
              flexDirection: 'row',
              alignSelf: 'stretch',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#ffffff', padding: 12, fontSize: 16}}>
              Total Mileage
            </Text>
            <Text style={{color: '#ffffff', padding: 12, fontSize: 16}}>
              0 Miles
            </Text>
          </View>
          <View
            style={{
              height: 44,
              backgroundColor: '#0d2734',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              onPress={() => {
                Navigation.dismissModal(this.props.componentId);
              }}
              title="Back"
              color="#ffffff"
            />
            <Button
              onPress={() => {
                alert('You tapped the button!');
              }}
              title="Add Another Journey"
              color="#ffffff"
            />
            <Button
              onPress={() => {
                Navigation.dismissModal(this.props.componentId);
              }}
              title="Done"
              color="#ffffff"
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
