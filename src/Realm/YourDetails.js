export const YourDetailsSchema = {
  name: 'YourDetails',
  properties: {
    id: 'string',
    name: 'string',
    compony: 'string',
    addressOne: 'string',
    addressTwo: 'string',
    addressThree: 'string',
    pincode: 'string',
    signatureImage: 'string',
    emailID: 'string',
    tax: {type: 'double', default: 0},
  },
};
