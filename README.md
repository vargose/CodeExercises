# Code Exercises

## Description
Node.js based project. 
Exercise requirements demonstrated with jest unit tests.
Feel free to add more test cases to letters.test.js and particleAnimator.test.js to confirm.


## Instructions
From project directory:
```
npm install
npm test
```


## Tools Used
1. Visual Studio Code was used to take advantage of its excellent javascript intellisense and eslint plugins
2. Eslint with airbnb base for code quality and consistent style


### Notes
1. I didn't make a user interface for these functions. I had thought about making a REST service or CLI, but as it stands you'll have to add tests if you want to try diffferent scenarios.
2. letters.test.js contains some performance tests. They are the left overs from when I was trying to make it faster. I think some form of snapshot testing solution with perfoamce metrics in mind would be better for CI stability. [This thread had some good thoughts](https://github.com/facebook/jest/issues/2694)