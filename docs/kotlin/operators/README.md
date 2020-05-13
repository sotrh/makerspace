# Operators

Operators allow us to manipulate values in our variables. We've already used one of them: `=`. Let's go over some of the most common.

## plus + and minus -

The `+` and `-` operators work much like in math. `+` will add 2 values together, and `-` will subtract them.

```kotlin
var a = 2
var b = 3
var sum = a + b
var diff = a - b
var quick_maths = 2 + 2
var sum_plus_one = sum + 1
```

### Concatenating Strings

There is a special case for the `+` operator when it somes to `String`s. Take the following code.

```kotlin
"One half of the string. " + "The other half of the string"
```

This will result in the following value.

```kotlin
"One half of the string. The other half of the string"
```

Basically a `+` between 2 `String`s will *concatenate* or combine them. This is useful when you want to put other values into text.

```kotlin
var a = 2
var b = 3
var sum = a + b
println("a + b = " + sum)
```

Note: If you want to remove the `sum` variable in this example and just use `a + b`, you need to wrap the operation in parentheses.*

```kotlin
var a = 2
var b = 3
println("a + b = " + (a + b))
```

If you didn't do this, you would get "a + b = 23" as including a `String` in the operation changes it from normal math into string concatenation. The parentheses tell kotlin to add the values first, before including the result in the `String`.

You can avoid this all together by using [string templates](/strings/).

```kotlin
var a = 2
var b = 3
println("a + b = ${a + b}")
```

## multiply *, divide /, and modulus %

The `*` and `/` opererators represent multiply and divide respectively.

```kotlin
var a = 1.0
var b = 2.0
prinlnt(a * b) // "2.0"
println(a / b) // will be roughtly "0.5"
```

The `%` operator will return the remainder of a division. For example

```kotlin
5 % 4
```

will yield a value of 1, as 5 divided by for is 1 with a remainder of 1.

Be aware that if you divide by `0`. Your program will crash. We'll talk a bit more about how to handle errors like this when we talk about [exceptions](/kotlin/exceptions/)

## equals =

The `=` operator sets the expresion on the left equal to the expression on the right. It is known as the assignment operator.

```kotlin
var a = 2
var b = 3
var sum = a + b
```

We can have multiple `=` statements on one line.

```kotlin
var a: Int
var b: Int
var c = b = a = 2
```

The `=` operator doesn't not work with values of different types. You can set an `Int` variable to a `String` literal for example

```kotlin
var x: Int = "10" // Doesn't compile!
```

### The plus equals += minus equals -=  multiply equals *= and divide equals /= operators

Consider the following.

```kotlin
var a = 0
a = a + 1
```

This can be simplified using the `+=` operator.

```kotlin
var a = 0
a += 1
```

## increment ++ and decrement --

These are the increment and decrement operators. The increase, or decrease a value by 1. There a little weird to work with though. Consider the following.

```kotlin
var a = 0
var b = a++
```

In this example we use the increment operator to increase the value in `a` by 1. It would make sense for `b` to also be one, but it's actually 0. This is because we are post-incrementing `a`. This code basically translates to

```kotlin
var a = 0
var b = a
b += 1
```

We can use the pre-fix style if we want `b` to the same value of `a` after the increment.

```kotlin
var a = 0
var b = ++a
```

There's a lot of literature discussing how `++` and `--` are actually really bad to use, and that you should stick to `+=` and `-=` instead, but you'll see them in other peoples code, so it's good to know what they do.

## and &&, or &&, and not !

These operators manipulate `Boolean` values. The `&&` operator will yeild `true` if the values on both sides are `true`.

```kotlin
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

The `||` operator will yield `true` if at least one of the sides is `true`.

```kotlin
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

The `!` operator will invert the value next to it.

```kotlin
!true  // false
!false // true
```

It's important to note that `&&` takes precedence over `||`. That means that 

```kotlin
true || false && true
``` 

will be `false`, where as 

```kotlin
(true || false) && true
``` 

will be `true`.

The `!` operator takes precedence over both of them.

## equals-equals == and not-equals !=

The `==` operator returns `true` if both sides are equivalent.

```kotlin
var a = 2
println(a == 2) // true
println(a == 3) // false
```

The `!=` operator returns `true` if one side is different from the other.

```kotlin
var a = 2
println(a != 2) // false
println(a != 3) // true
```

### equality with Double and Float

It's highly recommend to not use `==` and `!=` with values of type `Float` and `Double`. Floating-point math tends to be impercise, so it's not uncommon to for an operation to yield a value that is extraordinarily close to the expected value, but is off by 0.000001. There are [techniques to do this](https://randomascii.wordpress.com/2012/02/25/comparing-floating-point-numbers-2012-edition/), but there a little less intuitive.

## But wait, there's more!

There's a more comprehesive list in [the documentation](https://kotlinlang.org/docs/reference/keyword-reference.html#operators-and-special-symbols).