<?php

 $uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    '/' => 'views/home.php',
    '/about' => 'views/about.php',
    '/projects' => 'views/projects.php',
    '/contact' => 'views/contact.php',
];

function routeToView(string $uri, array $routes) : void {
    if (array_key_exists($uri, $routes)) {
        require $routes[$uri];
    }else {
        abort();
    }
}

function abort() : void {
    http_response_code(404);

    require 'views/404.php';
}

routeToView($uri, $routes);