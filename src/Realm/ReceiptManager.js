export const ReceiptSchema = {
  name: 'Receipt',
  properties: {
    id: 'string',
    date: 'string',
    description: 'string',
    amount: {type: 'double', default: 0},
    taxApplicable: {type: 'bool', default: false},
    image: 'string',
  },
};
