module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper:{
      '^.+\\.(css|less)$': '<rootDir>/test/config/CSSStub.js',
      '^.+\\.(svg)$': '<rootDir>/test/config/SVGStub.js'
    },
    transformIgnorePatterns:[
      "node_modules/(?!antlr4)/"
    ]
  };