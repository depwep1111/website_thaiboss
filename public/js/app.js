var app = angular.module("myApp", [
  "ui.router",
  "appRoutes",
  "baseCtrl",
  "baseService",
  "productService",
  "ngCookies",
  /*"appModal",
  "appServices",*/
]);

app.run(function($rootScope, $location,$window) {
	$rootScope.mySet = new Set();
	$rootScope.buy = [];
	$rootScope.priceCart = 0;
});
