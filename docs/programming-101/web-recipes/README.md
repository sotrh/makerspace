# Web Recipes

## Dropdown Navbar

Found at [https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp](https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drop-Down Navbar</title>
</head>

<body>
    <style>
        /* Navbar container */
        .navbar {
            overflow: hidden;
            background-color: #333;
            font-family: Arial;
        }

        /* Links inside the navbar */
        .navbar a {
            float: left;
            font-size: 16px;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        /* The dropdown container */
        .dropdown {
            float: left;
            overflow: hidden;
        }

        /* Dropdown button */
        .dropdown .dropbtn {
            font-size: 16px;
            border: none;
            outline: none;
            color: white;
            padding: 14px 16px;
            background-color: inherit;
            font-family: inherit;
            /* Important for vertical align on mobile phones */
            margin: 0;
            /* Important for vertical align on mobile phones */
        }

        /* Add a red background color to navbar links on hover */
        .navbar a:hover,
        .dropdown:hover .dropbtn {
            background-color: red;
        }

        /* Dropdown content (hidden by default) */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        /* Links inside the dropdown */
        .dropdown-content a {
            float: none;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
        }

        /* Add a grey background color to dropdown links on hover */
        .dropdown-content a:hover {
            background-color: #ddd;
        }

        /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content {
            display: block;
        }
    </style>
    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div class="dropdown">
            <button class="drop_button">
                Dropdown
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    </div>
</body>

</html>
```


## Multi Level Dropdown Navbar

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi Level Dropdown</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li class="menu"><a href="#">Single</a>
                <ul class="submenu">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </li>
            <li class="menu"><a href="#">Double</a>
                <ul class="submenu">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Sub Menu 1</a>
                        <ul class="submenu">
                            <li><a href="#">Sub 1</a></li>
                            <li><a href="#">Sub 2</a></li>
                            <li><a href="#">Sub 3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Sub Menu 2</a>
                        <ul class="submenu">
                            <li><a href="#">Sub 4</a></li>
                            <li><a href="#">Sub 5</a></li>
                            <li><a href="#">Sub 6</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="menu"><a href="#">Triple</a>
                <ul class="submenu">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Sub Menu 1</a>
                        <ul class="submenu">
                            <li><a href="#">Sub 1</a></li>
                            <li><a href="#">Sub 2</a></li>
                            <li><a href="#">Sub 3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Sub Menu 2</a>
                        <ul class="submenu">
                            <li><a href="#">Sub Sub Menu 1</a>
                                <ul class="submenu">
                                    <li><a href="#">Sub Sub 1</a></li>
                                    <li><a href="#">Sub Sub 2</a></li>
                                    <li><a href="#">Sub Sub 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Sub Sub Menu 2</a>
                                <ul class="submenu">
                                    <li><a href="#">Sub Sub 4</a></li>
                                    <li><a href="#">Sub Sub 5</a></li>
                                    <li><a href="#">Sub Sub 6</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Sub 4</a></li>
                            <li><a href="#">Sub 5</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</body>
</html>
```

`style.css`
```css
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}

nav {
    margin: 0;
    padding: 0;
    background-color: #333;
}

nav a {
    text-decoration: none;
    color: #eee
}

nav ul {
    padding: 0;
    margin: 0;
    display: flex;
}

nav ul li {
    list-style-type: none;
    padding: 0.4rem;
    position: relative;
    white-space: nowrap;
}

nav ul li:hover {
    background-color: #3bb;
}

nav .menu .submenu {
    position: absolute;
    background: #333;
    display: none;
}

nav .menu:hover .submenu {
    display: block;
}

nav .menu .submenu li .submenu {
    position: absolute;
    left: 100%;
    top: 0px;
    display: none;
}

nav .menu .submenu li:hover > .submenu {
    display: block;
}
```