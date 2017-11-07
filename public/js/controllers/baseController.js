angular.module('baseCtrl', [])
    .controller('baseController', ['$rootScope', '$scope', '$http','$cookies',
        function($rootScope, $scope, $http, $cookies) {
            var setError = new Set();
            $scope.fail = 0;
            
            $scope.changeQuanity = function(id, quanity) {
                console.log(id + "_" + quanity);
                if (quanity <= 0) {
                    $scope.fail = id;
                    setError.add(id);

                } else {
                    $scope.fail = 0;
                    setError.delete(id);
                    $rootScope.mySet.forEach(function(value) {
                        if (value.id == id) {
                            $rootScope.priceCart = $rootScope.priceCart + value.price * (quanity - value.quanity);
                            value.quanity = quanity;
                        }
                    });
                }
                $rootScope.buy = Array.from($rootScope.mySet);
            }
            $scope.checkSetError = function(id) {
                return setError.has(id);
            }
            $scope.deleteProduct = function(id, name, price, quanity) {
                var d = {};
                $rootScope.mySet.forEach(function(value) {
                    if (value.id == id) {
                        d = value;
                    }
                });
                $rootScope.mySet.delete(d);
                $rootScope.buy = Array.from($rootScope.mySet);
                $rootScope.priceCart = $rootScope.priceCart - quanity * price;
            }
        }
    ])
    .controller('homeController', ['$rootScope', '$scope', '$http', 'product',
        function($rootScope, $scope, $http, product) {
        	product.get().success(function(data) {
        		$scope.products = data;
        	});
            $scope.submitAddToCart = function(id, name, price) {
                var flag = false;
                $rootScope.mySet.forEach(function(value) {
                    if (value.id == id) {
                        value.quanity = value.quanity + 1;
                        flag = true;
                        $rootScope.priceCart = $rootScope.priceCart + price;
                    }
                });
                if (!flag) {
                    $rootScope.mySet.add({ "id": id, "name": name, "price": price, "quanity": 1 });
                    $rootScope.priceCart = $rootScope.priceCart + price;
                }
                $rootScope.buy = Array.from($rootScope.mySet);
            }

        }
    ])
    .controller('productController', ['$rootScope', '$scope', '$http', 'product', '$stateParams',
        function($rootScope, $scope, $http, product, $stateParams) {
        	product.detailproduct($stateParams.id).success(function(data) {
        		$scope.product = data;
        	});
        	$scope.submitAddToCart = function(id, name, price) {
                var flag = false;
                $rootScope.mySet.forEach(function(value) {
                    if (value.id == id) {
                        value.quanity = value.quanity + 1;
                        flag = true;
                        $rootScope.priceCart = $rootScope.priceCart + price;
                    }
                });
                if (!flag) {
                    $rootScope.mySet.add({ "id": id, "name": name, "price": price, "quanity": 1 });
                    $rootScope.priceCart = $rootScope.priceCart + price;
                }
                $rootScope.buy = Array.from($rootScope.mySet);
            }
        }
    ])
    .controller('thanhtoanController', ['$rootScope', '$scope', '$http', 'product', '$state',
        function($rootScope, $scope, $http, product, $state) {
        	$scope.formData = {};
        	$scope.thanhtoan = function() {
        		$scope.formData.buy = $rootScope.buy;
        		$scope.formData.priceCart = $rootScope.priceCart + 12000;
        		product.thanhtoanhoadon($scope.formData).success(function(data){
        			$rootScope.mySet = new Set();
        			$rootScope.buy = $rootScope.mySet;
        			$rootScope.priceCart = 0;
        			$state.go('success');
        		})
        		.error(function(data){
        			$state.go('error');
        		});
        	}
        }
    ])
    .controller('checkoutController', ['$rootScope', '$scope', '$http', 'product',
        function($rootScope, $scope, $http, product) {
        	product.get().success(function(data) {
        		$scope.items = data;
        	});
            $scope.minus = function(id) {
                var d = {};
                $rootScope.mySet.forEach(function(value) {
                    if (value.id == id) {
                        if (value.quanity > 1) {
                            $rootScope.priceCart = $rootScope.priceCart - value.price;
                            value.quanity = value.quanity - 1;
                        } else {
                            d = value;
                            $rootScope.priceCart = $rootScope.priceCart - value.price;
                        }
                    }
                });
                $rootScope.mySet.delete(d);
                $rootScope.buy = Array.from($rootScope.mySet);
            }

            $scope.plus = function(id) {
                var d = {};
                $rootScope.mySet.forEach(function(value) {
                    if (value.id == id) {
                        $rootScope.priceCart = $rootScope.priceCart + value.price;
                        value.quanity = value.quanity + 1;
                    }
                });
                $rootScope.buy = Array.from($rootScope.mySet);
            }

            $scope.delete = function(id) {
                var d = {};
                $rootScope.mySet.forEach(function(value) {
                    if (value.id == id) {
                        d = value;
                        $rootScope.priceCart = $rootScope.priceCart - value.price*value.quanity;
                    }
                });
                $rootScope.mySet.delete(d);
                $rootScope.buy = Array.from($rootScope.mySet);
            }
        }
    ]);