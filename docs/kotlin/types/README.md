# Kotlin Types

[Types](https://en.wikipedia.org/wiki/Data_type) represent the ways in which data can be stored. There a many basic types that come with Kotlin out of the box. There are others created by other people. You can even create your own!

## Creating a variable

Variables allow us to store and manipulate data. You'll use them a lot when righting code. The syntax for creating a variable is as follows.

```kotlin
var variableName: String = "variableValue"
```

This line creates a variable of type `String` (we'll talk about `String` in a bit). The `=` tells Kotlin to store the thing on the right into the thing on the left. The `"variableValue"` bit is a `String` value that gets stored inside the newly created `variableName`.

We can read this as: Create a new variable named `variableName` of type `String` and set that `=` to the `String`, `"variableValue"`.

If we don't want to specify a value when we create a variable we can use the following.

```kotlin
var variableName: String
```

If we don't want to specify the variables type, we have to specify a value.

```kotlin
var variableName = "variableValue"
```

Now that we can create variables, let's go over some of the most common types.

## Numbers

Numbers come up a lot in programming, and Kotlin is no different. There are 2 different types of numbers in most programming lanuages [integers](https://en.wikipedia.org/wiki/Integer), and [floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_arithmetic).

### Integers

The most common integer type you'll see is `Int`. Int can be a positive or negative whole number.

```kotlin
var daysInAWeek: Int = 7
```

An `Int` is 32 bit, meaning it takes up 4 bytes of memory (aka. RAM). There is a larger integer type called `Long` which takes up 64 bits/8 bytes. There's a smaller variant called `Short` which is 16 bits/2 bytes.

You'll generally use `Int`, but it's good to know the others are available.

### Floating-point numbers

The default floating-point type in Kotlin is `Double`. A `Double` is a double-precision floating-point number. It is twice as big as it's sister type `Float`. It can store numbers with fractional parts (aka. decimal numbers).

```kotlin
var pi: Double = 3.14159
```

If you want to use `Float`, you'll need to add an `f` to the end of the number.

```kotlin
var pi: Float = 3.14159f
```

This is because a `Double` is bigger than a `Float`, and therefore can't fit.

## Boolean

The `Boolean` type represents a `true` or `false` value. These are the **only** values a `Boolean` variable can have. We'll learn more about them when we talk about [manipulating variables](/kotlin/operators/)

```kotlin
var truthy: Boolean = true
var falsy: Boolean = false
```

## String

We saw the `String` type earlier. A `String` represents a piece of text, or in other words, a `String` of characters.

```kotlin
var hello: String = "Hello, World!"
```

### Char

A `Char` represents a single character in a `String`. The values that you can store in these are listed in the [ASCII table](https://www.ascii-code.com/). We can store a `Char` value using a single character between single quotes.

```kotlin
var at_symbol: Char = '@'
```

### Unit

This is the type for things that have no value. You won't see it on variables at all, but we'll get into it when we talk about [functions](/kotlin/functions/).

## val vs var

We've been creating our variables using `var` up to this point, but there's another keyword we can use: `val`. Creating a variable with `val` removes our ability to change it. This means the following code will not compile.

```kotlin
val pi = 3.1415
pi = 3 // Won't compile
```

Generally it's a good idea to *start* with a `val`, and change it to a `var` if you need the variable to, well, vary. We you know that you *definitely* don't want the value to change, use `val`.