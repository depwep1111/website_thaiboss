angular.module('productService', [])
.factory('product',['$http', function($http) {
    return {
        get : function(){
            return $http.get('/api/product');
        },
        detailproduct : function(id){
            return $http.get('/api/product/detail/'+ id);
        },
        thanhtoanhoadon : function(formData) {
            return $http.post('/api/thanhtoan', formData);
        }
    };
}]);