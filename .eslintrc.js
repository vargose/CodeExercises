module.exports = {
    "extends": ["airbnb-base","plugin:jest/recommended"],
    "plugins": ["import","jest"],
    "env": {
        "node": true,
        "jest/globals": true
      },
    "rules": {
        "linebreak-style":0,
        "indent":[2,4]
    }
};
