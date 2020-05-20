# Creating a new project

First things first, install [Android studio](https://developer.android.com/studio/) on your computer if you haven't already (the Makerspace machines should have it installed). The installation instructions are pretty straight forward, so I won't reiterate them here.

Once that's done, we can create our project. If you haven't opened Android Studio before, you should see a welcome screen. Click the new project button. If that's not the case go to `File | New | New Project`.

You should see a `Select a Project Template` screen.

![](./step1.png)

Select the `Empty Activity` option and hit next. The next screen will ask for the projects name, and some other information.

![](./step2.png)

Set the name of the project as `Weather App`. You can leave the others as they are.

The Package name field deserves some explanation. In Java and Kotlin a package defines the location that code will be stored in when the project is created. It's also used as an ID to differentiate your app from other apps.

The package is usually the developer or companys domain backwards, followed by the lowercase app name with no spaces. For example if I was creating a weather app for Telos, I would use `org.telos.weatherapp`.

Now click finish, and Android Studio will create your project.

## A tour of your new project

Once Android Studio has finished building an syncing your project, you should see 2 folders in the Project Window. *You might need to wait awhile.*

![](./tour1.png)

### The app folder

The `app` folder is where we build our app. It's split up into 3 sub folders: `manifests`, `java`, and `res`.

1. The `manifests` folder only has one file: `AndroidMainifest.xml`. This file contains configuration data for our app such as what icon to use, and what the app should be called.
2. The `java` folder should have 3 sub folders. The name of these folders will be the package name you specified when you created the project. The first one is for the main app code, the second to are for testing code. We'll stick to the first folder for now.
3. The `res` folder holds all our resources. Theres quite a lot in here, so I won't go into much detail here, as we'll get into most of these when we need them.

The `Gradle Scripts` folder is a virtual folder. It holds the build files that we'll use the add things to our project. We won't need to add any new files to this folder, but we will be modifying `build.gradle (Module: app)` later on.

## Activities and MainActivity

In the `app/java/<package_name>/` folder, there should be one file: `MainActivity`. This is the starting point for our app. An activity represents a single chunk of an Android app. Every app needs at least one activity. Let's look at it piece by piece.

```kotlin
package com.example.weatherapp
```

This is the same as the package name we created earlier. All kotlin files need a package name that matches where they are in the `java` folder. Android Studio is pretty good about creating these for you.

```kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
```

These are import statements. They include code from other sources. The syntax for an import statement is the keword `import` followed by the package name of the file we want to use. The first line pulls in the `AppCompatActivity` class from the `androidx.appcompat.app` package.

```kotlin
class MainActivity : AppCompatActivity() {
    // ...
}
```

This block defines a `class` called `MainActivity`. The colon between `MainActivity` and `AppCompatActivity()` implies that `MainActivity` inherits code from `AppCompatActivity()`. Any code between the `{` and `}` will be included in the class. *If you're not familiar with classes, check out [the documentation](https://kotlinlang.org/docs/reference/classes.html).*

```kotlin
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
```

This defines a method called `onCreate`. This is where we'll create our resources and handle the visual parts of our app.

`R.layout.activity_main` is the layout resource for this activity. It references a file in the `res` folder. Speaking of which...

## Layouts and activity_main.xml

Layout files define the visual structure of our app. They use the XML format, which is a text format, but we can use a visual editor for this tutorial.

You'll find the `activity_main.xml` file in the `res/layout/` folder. It will look something like this when you open it.

![](./layout1.png)

The editor is split up into 4 parts

1. This panel shows an approximation of the final design on the left, and a blueprint the shows the underlying structure of the layout on the right. We'll drag components from the `Palette` to here to position our views.
 
![](./layout3.png)


2. On the top left of the editor, you have the `Palette`. This is where you can find all the different types of components (called Views) that you can include in your layouts.

3. The bottom left of the editor is the `Component Tree`, it shows the hierarchical structure of the layout (aka. what contains what). Currently the root of our layout is a `ConstraitLayout`, and it has one child: a `TextView` with the text `Hello World!`.

![](./layout4.png)

4. The right side of the editor is dedicated to the `Attributes` panel. This is where you can customize your views. If we select the `Hello World` box in the design view we can see its properties.

    There's a lot going on here, so we won't need to get into all of these options. Feel free to play around with them and see what they do to the design.

![](./layout2.png)