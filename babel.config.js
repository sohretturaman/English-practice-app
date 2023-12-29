/** @format */

module.exports = function (api) {
  api.cache(true);
  const presets = ["babel-preset-expo"];
  const plugins = [
    "react-native-paper/babel",
    "react-native-reanimated/plugin",
  ];

  return {
    presets,
    plugins,
  };
};
