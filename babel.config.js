module.exports = function(api) {
  api.cache(true);
  const presets = [
    'babel-preset-expo',
    'module:metro-react-native-babel-preset'
  ];

  const plugins = [
      'module:react-native-dotenv',
      'react-native-paper/babel'
  ];

  return {
    presets,
    plugins
  };
};
