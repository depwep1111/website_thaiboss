angular.module('appRoutes', []).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        /*Điều hướng 404*/
        $urlRouterProvider.otherwise("/page-not-found");
        /*Thiết lập các state*/
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/views/home.html",
                controller: "homeController"
            })
            .state('banhgao', {
                url: "/banhgao",
                templateUrl: "/views/banhgao.html"
            })
            .state('nuocep', {
                url: "/nuocep",
                templateUrl: "/views/nuocep.html"
            })
            .state('checkout', {
                url: "/checkout",
                templateUrl: "/views/checkout.html",
                controller: "checkoutController"
            })
            .state('hoadon', {
                url: "/hoadon",
                templateUrl: "/views/hoadon.html",
                controller: "thanhtoanController"
            })
            .state('detail', {
                url: "/detail/:id",
                templateUrl: "/views/chitiet.html",
                controller: "productController"
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "/views/contact.html"
            })
            .state('success', {
                url: "/success",
                templateUrl: "/views/success.html"
            })
            .state('fail', {
                url: "/fail",
                templateUrl: "/views/fail.html"
            })
            .state('404', {
                url: "/page-not-found",
                templateUrl: '/views/404.html',
                title: '404 - Không tìm thấy trang yêu cầu'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
    }
]);