# Lambdas

Lambas are functions that we can store in variables. We can create a lambda variable with the following syntax.

```kotlin
val greet: (String) -> Unit = { name -> 
    println("Hello, $name!")
}
```

We can call a lambda like we would a normal function.

```kotlin
greet("World")
```

This doesn't seem like much better than a regular function. The real power comes when you realize that you can pass around.

## As function parameters

Imagine you have a button in you're UI, and you want it to do something when the user clicks on it. Most UI frameworks will use a function called a callback to do that.

```kotlin
fun setOnButtonPressed(callback: () -> Unit) {
    // UI code...
}
```



