# Functions

Functions are bundles of code that we can execute at a later time. This code will only run when the function itself is called.

Let's look at the the program we created in the [first tutorial](/kotlin/).

```kotlin
package sample

fun hello(): String = "Hello, Kotlin/Native!"

fun main(args: Array<String>) {
    println(hello())
}
```

You'll notice that lines 3 and 5 have the keyword `fun` at the start. That's the keyword that tells Kotlin that we are about to define a function. In general, a function definition takes to following form.

```kotlin
fun functionName(parameter: ParameterType): ReturnType {
    // Code goes here...
}
```

## Parameters

A function can have 0 to many parameters. These act as values that the function can use who's values are set when the function is called.

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}
```

We call a function by using it's name and in parentheses, values for the arguments in the same order that they appear in function definition, separated by commas.

```kotlin 
val sum = add(2, 3)
println(sum) // Will output 5
```

You can call a function as many times as you want and with as many different values.

```kotlin
println(add(2, 2))
println(add(1, -2))
println(add(0, 32))
println(add(3, 5))
```

The type of the value you pass in **must** match up with the parameter. This means that our `add()` function won't work with `String` values, even though they can be added together.

```kotlin
add("Hello, ", "World!") // Won't compile
```

We can get around this by using function overloading. But first, let's talk about return types.

## Return types

The return type is the type of value that we will `return` from a function. Let's look at the return type of our `add()` function.

```kotlin
//                      here
//                       vvv
fun add(a: Int, b: Int): Int {
    return a + b
}
```

We're using `Int` for this function, meaning the the value we return from this function will be an `Int`. We specify what value we are going to return using the `return` keyword. In our case it's the value from the expression `a + b`.

Note: When the program encounters a `return` statement. The function will stop executing after evaulating that statement. Meaning, any code listed after the `return` statement will not be run.

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
    println("Hello!") // Won't run
}
```

We can use this to our advantage to return early from a function when we meet some condition. We'll learn more about that when we discuss [flow statements](/flow-statements/)

The default return type is `Unit`. Functions that return `Unit` don't need to specify the return type. You also don't need to specify the `return` statement. For example

```kotlin
fun doStuff(): Unit {
    // Stuff being done...
    return
}
```

Is the same as

```kotlin
fun doStuff() {
    // Stuff being done...
}
```


## Overloading

You can create mutliple function definitions with the same name under some combination of 3 conditions.

1. The function **parameters/return types** differ.

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

// String version
fun add(a: String, b: String): String {
    return a + b
}
```

2. The functions are in **different files**.

```kotlin
// Inside a.kt
fun add(a: Int, b: Int): Int {
    return a + b
}

// Inside b.kt
fun add(a: Int, b: Int): Int {
    return a + b
}
```

3. The **number of parameters** differ.

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

//                      vvvvvv
fun add(a: Int, b: Int, c: Int): Int {
    return a + b + c
}
```

## Named arguments

Consider the following function.

```kotlin
fun doTheThing(n: Int, b: Boolean, d: Double) {
    println("$n$b$d")
}
```

This function will print out a `String` using the parameters `n`, `b`, and `d`. When we call these function, we **need** to specify the values **in the same order**: first an `Int`, then a `Boolean`, and finally a `Double`.

```kotlin
doTheThing(42, true, 3.14)
```

We can get around this using named arguments. Named arguments allow us to specify the values for our parameters any order by specifying what parameter we are setting.

```kotlin
doTheThing(
    d = 3.14,
    n = 42,
    b = true
)
```

Note: You mix passing arguments by position, and by name, but positional arguments **must** be passed in at the position they normally would go, so it's probably best just to stick to one or the other.

## Optional parameters

In addition to function overloading, we can alter the number of parameters we need to specify by providing a default value for our parameters.

```kotlin
fun hello(name: String = "World"): String {
    return "Hello, $name!"
}

println(hello())      // Will output "Hello, World!"
println(hello("Ben")) // Will output "Hello, Ben!"
```

Optional parameters are usually specified at the end of the parameter list, as they are easier to leave out that way.

```kotlin
fun complicatedFunction(id: Int, numCycles: Int = 1, dayOfWeek: String = "MON") {
    // Complicated code...
}

complicatedFunction(0, 20, "TUES")
complicatedFunction(1, 3)
complicatedFunction(2)
```

If we want to specify the a parameter after a default parameter, or we have position parameters after default ones, we need to use argument names.

```kotlin
complicatedFunction(4, dayOfWeek = "FRI")
```

## One line functions

If a function ends in the `return` statement, we can leave off the the `return` keyword.

```kotlin
fun add(a: Int, b: Int): Int {
    a + b
}
```

If the function consists of just the `return` statement we can use the single-expression format.

```kotlin
fun add(a: Int, b: Int): Int = a + b
```

We can leave off the return type as well.

```kotlin
fun add(a: Int, b: Int) = a + b
```

## Variable parameters, varargs

Somethings you want to execute a function on a variable number of values. You can use the `vararg` keyword for this.

```kotlin
fun sum(vararg numbers: Int): Int {
    var sum = 0;
    for (n in numbers) {
        sum += n;
    }
    return sum
}
```

This `sum()` function can take 0 to many numbers, and will compute the sum of all of them.

```kotlin
sum()
sum(1)
sum(1, 2)
sum(1, 2, 3)
sum(1, 2, 3, 4)
// etc...
```

You can only have **one** `vararg` parameter in any given function. Also if the function has parameters after the `vararg`, you need to specify them with named arguments.

```kotlin
fun greet(vararg names: String, greeting: String) {
    // ...
}

greet("Billy", "Joe", greeting="Hello!")
```

## The main() function

Our code from [the beginning](/kotlin/) is defined as follows.

```kotlin
fun main(args: Array<String>) {
    println(hello())
}
```

The program starts by calling this function. All programs must have a `main()` function. The `args` parameter is a list of command line arguments. You don't have to use this parameter. You can even leave it out of the function definition.

```kotlin
fun main() {
    prinln(hello())
}
```

## Documentation

If you need more info, check the [documentation](https://kotlinlang.org/docs/reference/functions.html).