# Lambdas

Lambas are functions that we can store in variables. We can create a lambda variable with the following syntax.

```kotlin
val greeter: (String) -> Unit = { name -> 
    println(name)
}
```

We can call a lambda like we would a normal function.

