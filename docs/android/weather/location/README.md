# Getting the devices location

In order to get the weather at the devices current location, we first need to get the location itself. Before we do that, we need to give our device persmission to use location data at all.

## Permissions and location

Permissions are Android's way of telling users what features of your device an app wants to use. If an app wants to access location data, it has to do 2 things.

1. Declare that it wants to use `ACCESS_COARSE_LOCATION` and/or `ACCESS_FINE_LOCATION` in the `AndroidManifest.xml`.

2. Request permission from the user directly before using the location data for the first time.

Lets tackle the first thing on our todo list. Add the `ACCESS_COARSE_LOCATION` permission to the `manifest` block of `AndroidManifest.xml` using the `<uses-permission>` tag.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.weatherapp">

    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

    <!-- application block... -->

</manifest>
```

<div class="note">

The `ACCESS_COARSE_LOCATION` permission is used for city block level location data. You need to use `ACCESS_FINE_LOCATION` if you want to get the users exact location. For weather, we don't really need much precision, so `ACCESS_COARSE_LOCATION` is just fine. You can check out more in the [docs](https://developer.android.com/training/location/permissions)

</div>

## Asking the user for permission

Step 2 on our todo list requires some actual code. In our `MainActivity`, in the `onCreate()` function, we need to check if our user has already given us permission to use location data.

```kotlin
package com.example.weatherapp

import android.Manifest // NEW!
import android.content.pm.PackageManager // NEW!
// ...
import androidx.core.content.ContextCompat // NEW!
// ...

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // NEW!
        when {
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED-> {
                getLocation()
            }
        }

        // ...
    }

    // ...
}
```

<div class="note">

We used `ContextCompat.checkSelfPermission()`, but we could have used just `checkSelfPermission()`. Doing this however would limit what devices could use our app as `checkSelfPermission()` is a newer method that older versions of Android don't have. `ContextCompat` bridges the gap for us so we don't run into that issue.

</div>

The `getLocation()` method doesn't exist yet. We'll create it in `MainActivity`.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        //...
    }

    private fun getLocation() {

    }
}
```

If the user hasn't given us permission to use location data, we need to check to see if we've already asked them for it.

```kotlin
package com.example.weatherapp

import android.Manifest
import android.content.pm.PackageManager
// ...
import androidx.core.app.ActivityCompat // NEW!
import androidx.core.content.ContextCompat
// ...

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        when {
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED-> {
                getLocation()
            }
            // NEW!
            ActivityCompat.shouldShowRequestPermissionRationale(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) -> {
                showLocationRequestUI()
            }
        }

        // ...
    }

    // ...
}
```

<div class="note">

`ActivityCompat` serves a similar purpose to `ContextCompat`, but specifically for classes that inherit from `Activity`. `MainActivity` is both a `Context` and an `Activity`.

</div>

Like `getLocation()`, `showLocationRequestUI()` doesn't exist yet, so we'll create it below.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        //...
    }

    private fun getLocation() {

    }

    // NEW!
    private fun showLocationRequestUI()  {

    }
}
```

Finally, we need to handle the case that the user hasn't given us permission, but we don't need to tell them why we need permission.

```kotlin
package com.example.weatherapp

import android.Manifest
import android.content.pm.PackageManager
// ...
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
// ...

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        when {
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED-> {
                getLocation()
            }
            ActivityCompat.shouldShowRequestPermissionRationale(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) -> {
                showLocationRequestUI()
            }
            // NEW!
            else -> {
                requestLocationPermission()
            }
        }

        // ...
    }

    // ...
}
```

Yet again, `requestLocationPermission()` doesn't exist yet. This time will actually do something.

```kotlin
class MainActivity : AppCompatActivity() {
    // ...

    private fun requestLocationPermission() {
        ActivityCompat.requestPermissions(
            this,
            arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION),
            LOCATION_REQUEST_CODE
        )
    }
}
```

The `ActivityCompat.requestPermissions()` method takes 3 parameters.

1. The activity the request is being preformed on in our case `this` (referring to `MainActivity`).
2. An array of permission strings that we want the user to give us access to.
3. An `Int` request code that we'll use to see if our request was granted.

The `LOCATION_REQUEST_CODE` value is a custom value that we are going to create. Above `class MainActivity` add the following.

```kotlin
const val LOCATION_REQUEST_CODE = 0
```

<div class="note">

We could just use `0` in `requestPermissions()`, but using a named value will be easier when we get our permissions result back.

</div>

## onRequestPermissionsResult

Once we send of a permissions request, eventually Android will call the `onRequestPermissionsResult()` method on our `MainActivity`. We're not currently overriding `onRequestPermissionsResult()`, so we'll need to do that to actual see the result. Press Ctrl+O, find `onRequestPermissionsResult` and once it generates, modify it to check for our permission.

```kotlin
override fun onRequestPermissionsResult(
    requestCode: Int,
    permissions: Array<out String>,
    grantResults: IntArray
) {
    when (requestCode) {
        LOCATION_REQUEST_CODE -> {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                getLocation()
            } else {
                showLocationDeniedUI()
            }
        }
        else -> {}
    }
}
```