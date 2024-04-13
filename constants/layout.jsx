const { Dimensions } = require('react-native');

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

module.exports = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
