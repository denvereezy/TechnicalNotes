# Denver's Technical Notes

## Workshops

* [Functions & Objects](./workshops/functions_and_objects_slides.html)
* [Useful algorithms](./workshops/useful_algorithms.md)
* Useful algoritms using functions (lodash)
* How does a web application work?
* Others?
* Using Qunit with Python

## Keep updated

To ensure your fork have the latest changes from this repository.

[Look at these instructions](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

You need to create an upstream repository for your fork.

## Notes

Notes on things I learned & snippets of code that will make my life easier

### How to print a string to the console in Javascript

```javascript
// how do I print to the console again?
console.log("Hello World");
```

### How to write an if statement in Javascript

```javascript
// how to write an if statement
if(2 > 5){
  console.log("Hello World");
}
else{
  console.log("Hello!");
}
```
### How to test with mocha
* In your projects folder create a test folder
* Running 'mocha' now should say "0 passing"
* Create a test like example below:

```javascript
var assert = require("assert");

describe("In the ferry kata", function(){
    it("should be able to create cars", function(){
        assert.equal("car", "car");
    });
});
```
* Now run 'mocha' agin and test should pass or fail
*An example of a failing test:
```javascript
var assert = require("assert");

describe("In the ferry kata", function(){
    it("should be able to create cars", function(){
        assert.equal(1 == 2);
    });
});
```
### A note about something else
add more here...

### If things get to long...

* [Todo something useful](notes/my_file.md) A short description here
* [Create a basic Express app](notes/my_file.md) How to get going with express
* [Denver's notes ](denver.md) useful things
