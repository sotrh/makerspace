# Weather App

**Check out the [Kotlin Tutorial](../../kotlin/) first before you tackle this project**

## Getting a forecast

We'll be using [api.weather.gov](https://api.weather.gov) to get our forecast data. It's not the most while layed out API, but it's free. We'll be using 2 endpoints. The first will give us some data we need for the second.

```
api.weather.gov/points/{latitude},{longitude}
```

[https://api.weather.gov/points/39.7456,-97.0892](https://api.weather.gov/points/39.7456,-97.0892)

From that we need `properties.cwa`, `properties.gridX`, and `properties.gridY`. We'll use those for the second endpoint.

```
api.weather.gov/gridpoints/{cwa}/{gridX},{gridY}/forecast
```
[https://api.weather.gov/gridpoints/TOP/31,80/forecast](https://api.weather.gov/gridpoints/TOP/31,80/forecast)

## Retrofit

[Retrofit](https://square.github.io/retrofit/) allows us to pull data from the internet in the form of Kotlin objects. To install retrofit in you're app you'll need to add the following to the `dependencies` block of your app's `build.gradle`.

```groovy
// Retrofit
implementation "com.squareup.retrofit2:retrofit:2.5.0"
implementation "com.squareup.retrofit2:converter-gson:2.5.0"
implementation 'com.jakewharton.retrofit:retrofit2-kotlin-coroutines-adapter:0.9.2'
```

Since we're using the `com.jakewharton.retrofit:retrofit2-kotlin-coroutines-adapter`, we're going to need to include some coroutine specific dependencies as well.

```groovy
// Kotlin coroutines
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.1.1"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.1.1"
```

We use Retrofit to access an API by `decorating` a Kotlin `interface`. For example, say we want to get use an imaginary API called `example.com`, specifically the `/hello` endpoint. Let's say it will return the following JSON.

```json
{
    "message": "Hello, World!"
}
```

In Kotlin, we'd do something like this.

```kotlin
interface HelloAPI {
    @GET("example.com/hello")
    fun getHelloAsync(): Deferred<Hello>
}
```

The `Hello` object would defined as follows.

```kotlin
data class Hello(val message: String)
```

Now lets say that our `/hello` endpoint has an optional url parameter. Something like `/hello/{name}`. We can use the `@Path` decorator on one a parameter of the `getHelloAysnc()` function.

```kotlin
interface HelloAPI {
    @GET("example.com/hello/{name}")
    fun getHelloAsync(@Path name: String): Deferred<Hello>
}
```

Calling `getHelloAsync("Fred")` would yeild us something like the following.

```json
{
    "message": "Hello, Fred!"
}
```
