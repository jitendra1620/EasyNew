export const JourneySchema = {
  name: 'Journey',
  properties: {
    id: 'string',
    date: 'string',
    destination: 'string',
    reason: 'string',
    startingMiles: {type: 'int', default: 0},
    finishingMiles: {type: 'int', default: 0},
    total: {type: 'int', default: 0},
  },
};
