module.exports = {
  presets: [
    ['@babel/preset-env', {
      // useBuiltIns: 'usage',
      // modules: false,
      targets: {
        browsers: [
          '> 1%',
          'Android >= 5.0',
          'IOS >= 9',
          'ie >= 11',
        ],
      },
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
  ],
};
