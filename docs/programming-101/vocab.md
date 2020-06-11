# Common Programming Vocab

This is probably the barrier for most people who are interested in programming. There's a lot of jargon (technical terms) when reading all the blogs and tutorials out there. If you don't know what it means to "index and array and check if the pointer is null", then this guide is for you.

<div class="note">

This is by no means comprehensive. There's a lot of vocabulary out there that even I'm unaware of. If you encounter a word that's not on this list, you can always Google it.

</div>

## Comments

These are lines or sections of code that the computer ignores. They are often specified by specific characters. For example in Python.

```python
# Comment in python
```

Everything after the `#` will be ignored by the computer for that line. This is where people explain how certain parts of the program work, or how things are supposed to be used. Sometimes programmers use it to vent their frustrations with the project.

Most languages provide a way to have comments span multiple lines. These are called multiline comments. Here's an example in C++

```c
// Single line comment
/*
    Multi line comment
    All this will be ignored by the computer.
    It might not be ignored by your manager though.
*/
```

## Printing and Logging

The term printing in computer science often isn't about using a printer. Printing usually refers to your program outputing text to the user via a terminal/console. Programmers use print statements to see where they are in the code, and to see if things are working.

Logging is the same as printing. Which you use often depends on the language your using. In javascript, you `log` data to the `console` using `console.log`.

```javascript
// On Firefox, click the menu and choose 
// Web Developer | Web Console, and then type the following 
// into the window that appears to see "Hello, World!" 
// logged to the console.
console.log("Hello, World!");
```

## Variables

A variable is value that can be set and then updated later. It's like a box that you can put things in.

```javascript
// javascript
let my_box = "a good box";
```

So long as the program has access to `my_box`, we can use it's contents.

```javascript
// Will output "a good box"
console.log(my_box);
```

We can change the value in `my_box` by using an `=`.

```javascript
// Will output "a good box"
console.log(my_box);

// Change the value stored in my_box
my_box = "a different box";

// Will ouput "a different box"
console.log(my_box);
```

## Constants

Constants store data, like a variable, but there value can't be changed while your program is running. Constants are often used give certain important values a name. Consider the following code.

```javascript
if (people.length > 100) {
    console.log("Too many people!");
}
```

It's not clear here what the `100` relates to. We can fix this with a constant.

```javascript
const ELEVATOR_MAX_OCCUPANCY = 100;
if (people.length > ELEVATOR_MAX_OCCUPANCY) {
    console.log("Too many people!");
}
```

## Literal

[Wikipedia](http://en.wikipedia.org/wiki/Literal_%28computer_programming%29) specifies a literal as:

> A notation for representing a fixed value in source code

Some of the examples above use literals. For example:

```javascript
let my_box = "a good box";
```

In this case `"a good box"` is a literal. It's value will never change while to programming is running. Other examples of literals are numbers, and some keywords such as `true` and `false`.

```javascript
let pi = 3.14159;
let a_number = 42;
let the_truth = true;
let a_lie = false;
```

## Compile

This is the process which the compiler turns your code into instructions for your computer to run.

### Whitespace

Any text that is used for spacing. The most common examples are space, tab, and newline.

## Scope

This is an important thing to know. The `scope` of something is how `visible` it is to other parts of the program. You can think of scope as standing on different towers, from the highest tower you can see what's on top of all the towers, the lower ones can only see what's below them. The people on the ground can only see what's on the ground.

Most languages define scope using curly brances `{}`. Anything thing between the curly braces will be visible only to things within the same set of curly braces.

```rust
// rust
{
    let mut a = 0;
    a += 1; // Valid
}

{
    let mut b = 0;
    b += 1; // Valid
    a += 1; // Invalid, a is not in this scope.
}
```

### Nesting

Scopes can be `nested` or in other words, put inside each other. Things in a nested scope can view things in there parent scope but not there sibling scopes.

```rust
// rust
{
    let mut parent_num_children = 0;

    {
        let mut child_a = 1;
        child_a += 1;
        parent_num_children += 1;
    }

    {
        let mut child_b = 0;
        parent_num_children += 1;
        child_b += 1;
        child_a += 1; // Invalid! child_a is not in scope!
    }
}
```

<div class="note">

Some languages define scopes differently. Python for example using the [whitespace](#whitespace) characters of space or tab to define scope boundaries.

```python
def foo():
    a = 0

def bar():
    b = 0
    print(a + b) # Invalid! a is not in scope!
```

</div>

## Function

A function is code that can be used multiple times throughout the program. Functions will usually have a name that you can use them with.

```javascript
function sayHello() {
    console.log("Hello!");
}
```

Elsewhere in the program, we can use functions we've created by `calling` them. We can use the `sayHello()` function by typing the following code.

```javascript
sayHello();
```

Functions can call other functions as well (so long as they are in scope).

```javascript
function sayHello() {
    console.log("Hello!");
}

function sayGoodbye() {
    console.log("Goodbye.");
}

function sayHelloThenGoodbye() {
    sayHello();
    sayGoodbye();
}
```

### Function Scope

Functions create their own scope. So any value created within a function will be unavailable to anything outside it.

```javascript
function do2Plus2() {
    let result = 2 + 2;
}

// Invalid! result is not in scope!
console.log(result);
```

Anything created within a function will usually be destroyed when leaving the function unless it was passed in, or [returned](#return) by the function.

```javascript
function doThings(a) {
    let b = 3;
    let c = 4;
    a += b;
    a += c;
    return b;
    // c and b are destroyed, but the value in b
    // is returned to whatever called this function.
}
```

### Return

Returning from a function means that you stop the functions execution. For example, this function stop executing if `2 + 2` is equal to `4`.

```javascript
function panicIfMathIsBroken() {
    if 2 + 2 == 4 {
        return;
    } else {
        console.log("Panic!");
    }
}
```

A function will automatically return if it runs out of statements to execute.

```javascript
function doStuff() {
    console.log("Do thing 1");
    console.log("Do thing 2");
    console.log("Do thing 3");
    console.log("Do thing 4");
    // function returns here
}
```

If a function calls another function, the calling function will wait for the other to return before continuing.

```javascript
function doStuff() {
    console.log("Do thing 1");
    console.log("Do thing 2");
    doOtherStuff();
    console.log("Do thing 3");
}

function doOtherStuff() {
    console.log("Do other stuff");
}

// Output:
// Do thing 1
// Do thing 2
// Do other stuff
// Do thing 3
```

A return statement can include a value.

```javascript
function getPi() {
    return 3.14159;
}
```

The value returned from a function can then be used like a [variable](#variable) or a [literal](#literal).

```javascript
let pi = getPi();
let twoPi = 2.0 * getPi();
```

<div class="note">

The value of a [return](#return) statement will be recalculated whenever the [function](#function) is run. This is by design as when you supply different [parameters](#parameters-arguments), the return value might change.

</div>

### Parameters/Arguments

Functions can take in data. This is done through parameters. Parameters are basically variables that you specify when you create the function.

```javascript
function sayHelloTo(name) {
    console.log("Hello, " + name + "!");
}

// This will print "Hello, Bob!" to the console.
sayHelloTo("Bob");
```

The stuff in the parentheses is the argument list. In most languages parameters are separated by commas.

```javascript
function doWork(a, b, c) {
    // ...
}
```

When you use a function, you need to specify values for it's parameters. You can pass [literals](#literal), [variables](#variables), as well as the values [returned](#return) from [functions](#function).

```javascript
function add(x, y) {
    return x + y;
}

let sum = add(1, 1);
console.log(add(1, add(sum, 1)));

// Output:
// 4
```

A function can have no parameters as well.

```javascript
function doSomething() {
    console.log("Something");
}
```

You still have to use the parentheses when calling theses functions.

```javascript
doSomething();

// Output:
// Something
```

## Lambda/Closure

This is what's called a higher order function. Basically it's a function that can be saved to a variable, and passed to a function. It can be called like a normal function.

```kotlin
// kotlin

val lambda = { x, y -> x + y };
println(lambda(1, 1))

// Output:
// 2
```

<div class = "note">

Some languages don't make a distinction between lambdas and [functions](#function). In javascript you can save a function to a variable and pass it to other functions.

```javascript
function add(x, y) {
    return x + y;
}

let a = add; // Note: no parentheses
console.log(a(1, 1));

function doAddition(adder) {
    console.log(adder(2, 2));
}
doAddition(add); // Note: no parentheses on `add`

// Output:
// 2
// 4
```

</div>

Lambda's often have a closure on variables in there parent's [scope(s)](#scope).

```kotlin
fun makeIncrementor(): (Int)->Int {
    val amountToIncrement = 1;

    incrementor = { x -> 
        x += amountToIncrement

        // In kotlin, the last statement in a lambda
        // is considered the return statment.
        x
    }

    return incrementor
}
```

<div class="warning">

Since variables and lambdas created in a function are destroyed if not returned by the function, or passed in, you may need to copy the values closured by the lambda.

</div>

## Object

An object is a collection of variables (and sometimes functions). Some languages allow you to create objects on the fly.

```javascript
let person = {
    name: "Jill",
    age: "32",
};
```

In most languages you can access variables in an object via the dot `.` syntax.

```javascript
person.name = "Bob";
console.log(person.name);

// Output:
// Bob
```

## Class/Struct

A class is code that defines a blueprint for a type of object.

```java
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

<div class="note">

The `this` keyword in this example is a stand in for the object being created by the `constructor`.

</div>

We can create a person by calling it's constructor.

```javascript
let person = Person("Fred", 20);
```