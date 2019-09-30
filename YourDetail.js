import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Picker,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import SignatureCapture from 'react-native-signature-capture';
import {YourDetailsSchema} from './Realm';
class ViewTitleHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  chekifthisIsEmptyToShowError() {
    if (this.props.isAnyFieldEmpty) {
      switch (this.props.title) {
        case 'Name':
          return 'Please fill ' + this.props.title;
        case 'Company':
          return 'Please fill ' + this.props.title;
        case 'Address':
          return 'Please fill ' + this.props.title;
        case 'Postcode':
          return 'Please fill ' + this.props.title;
        case 'Email Address':
          return 'Please fill ' + this.props.title;
        default:
          return '';
      }
    }
    return '';
  }
  render() {
    var titleToSet = this.chekifthisIsEmptyToShowError();
    var colorToSet = '#000000';
    console.log(
      titleToSet,
      'title to set',
      this.props.title,
      'this.props.title',
    );
    console.log('10101010', titleToSet);
    console.log(titleToSet !== '', 'check');
    if (
      this.props.value === '' &&
      titleToSet !== '' &&
      titleToSet !== this.props.title
    ) {
      colorToSet = 'red';
    } else {
      titleToSet = this.props.title;
    }
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: 30,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: colorToSet, fontSize: 14, marginLeft: 12}}>
          {titleToSet}
        </Text>
      </View>
    );
  }
}
class ViewTextInput extends Component {
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#cadfe5',
          marginHorizontal: 8,
          padding: 4,
        }}>
        <TextInput
          // eslint-disable-next-line react-native/no-inline-styles
          style={{minHeight: 17, maxHeight: 150, flex: 1}}
          multiline={true}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}
export default class YourDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnyFieldEmpty: false,
      name: '',
      compony: '',
      addressOne: '',
      addressTwo: '',
      addressThree: '',
      pincode: '',
      signatureImage: '',
      emailID: '',
      tax: {type: 'double', default: 0},
    };
  }
  renderBackButton() {
    if (this.props.isFromHome === true)
      return (
        <Button
          onPress={() => {
            Navigation.dismissModal(this.props.componentId);
          }}
          title="Back"
          color="#ffffff"
        />
      );
    return null;
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }
  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }
  saveSign() {
    console.log('saveSign()');
    this.refs.sign.saveImage();
  }
  checkIfAnyFiledIsEmpty() {
    if (
      this.state.name === '' ||
      this.state.compony === '' ||
      this.state.addressOne === '' ||
      this.state.addressTwo === '' ||
      this.state.addressThree === '' ||
      this.state.pincode === '' ||
      this.state.emailID === ''
    ) {
      this.setState({isAnyFieldEmpty: true});
      return true;
    }
    return false;
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 100,
              backgroundColor: '#0d2734',
            }}
          />

          <View
            style={{
              height: 44,
              backgroundColor: '#639bad',
            }}>
            <Text style={{color: '#ffffff', padding: 12, fontSize: 16}}>
              Your Details
            </Text>
          </View>
          <ScrollView>
            <ViewTitleHeader
              title="Name"
              isAnyFieldEmpty={this.state.isAnyFieldEmpty}
              value={this.state.name}
            />
            <ViewTextInput
              placeholder="Enter Your Name"
              onChangeText={text =>
                this.setState({name: text, isAnyFieldEmpty: false})
              }
              value={this.state.name}
              isAnyFieldEmpty={this.state.isAnyFieldEmpty}
            />
            <ViewTitleHeader
              title="Company"
              isAnyFieldEmpty={this.state.isAnyFieldEmpty}
              value={this.state.compony}
            />
            <ViewTextInput
              placeholder="Enter Your Company Name"
              onChangeText={text =>
                this.setState({compony: text, isAnyFieldEmpty: false})
              }
              value={this.state.compony}
            />
            <ViewTitleHeader
              title="Address"
              isAnyFieldEmpty={this.state.isAnyFieldEmpty}
              value={
                (this.state.addressOne + this.state.addressTwo,
                this.state.addressThree)
              }
            />
            <ViewTextInput
              placeholder="Enter Your Address"
              onChangeText={text =>
                this.setState({addressOne: text, isAnyFieldEmpty: false})
              }
              value={this.state.addressOne}
            />
            <View style={{height: 8}}></View>
            <ViewTextInput
              placeholder="Enter Your Address"
              onChangeText={text =>
                this.setState({addressTwo: text, isAnyFieldEmpty: false})
              }
              value={this.state.addressTwo}
            />
            <View style={{height: 8}}></View>
            <ViewTextInput
              placeholder="Enter Your Address"
              onChangeText={text =>
                this.setState({addressThree: text, isAnyFieldEmpty: false})
              }
              value={this.state.addressThree}
            />
            <ViewTitleHeader
              title="Postcode"
              isAnyFieldEmpty={this.state.isAnyFieldEmpty}
              value={this.state.pincode}
            />
            <ViewTextInput
              placeholder="Enter Your Postcode"
              onChangeText={text =>
                this.setState({pincode: text, isAnyFieldEmpty: false})
              }
              value={this.state.pincode}
            />
            <ViewTitleHeader
              title="Signature"
              isAnyFieldEmpty={this.state.isAnyFieldEmpty}
            />
            <SignatureCapture
              style={[{flex: 1, height: 180, margin: 8}, styles.signature]}
              ref="sign"
              onDragEvent={this._onDragEvent}
              saveImageFileInExtStorage={false}
              showNativeButtons={false}
              showTitleLabel={false}
              viewMode={'portrait'}
            />
            <ViewTitleHeader
              title="Email Address"
              isAnyFieldEmpty={this.state.isAnyFieldEmpty}
              value={this.state.emailID}
            />
            <ViewTextInput
              placeholder="Enter Your Email Address"
              onChangeText={text =>
                this.setState({emailID: text, isAnyFieldEmpty: false})
              }
              value={this.state.emailID}
            />
            <ViewTitleHeader title="Tax" />
            <Picker
              style={{
                margin: 5,
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
          </ScrollView>

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 44,
              backgroundColor: '#0d2734',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>{this.renderBackButton()}</View>

            <Button
              onPress={() => {
                if (this.checkIfAnyFiledIsEmpty()) {
                  // eslint-disable-next-line no-alert
                  // alert('Please fill every field');
                } else {
                  _saveYourDetailsInDataba
                  Navigation.dismissModal(this.props.componentId);
                }
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
const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});
