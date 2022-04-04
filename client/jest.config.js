module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.ts?$': 'babel-jest'
    },
   
  }