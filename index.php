<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

var_dump($_SERVER['REQUEST_URI']);
$routes = [
    '/portfolio-2022/' => 'views/home.php',
    '/portfolio-2022/about.php' => 'views/about.php',
    '/portfolio-2022/projects.php' => 'views/projects.php',
    '/portfolio-2022/blog.php' => 'views/blog.php',
    '/portfolio-2022/contact.php' => 'views/contact.php',
];

if (array_key_exists($uri, $routes)) {
    require $routes[$uri];
}