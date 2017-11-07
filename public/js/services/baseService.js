angular.module('baseService', [])
.factory('base',['$http', function($http) {
    return {
        get : function(){
            return $http.get('/api/session');
        }/*,
        letter : function(id){
            return $http.get('/api/product/letter/'+ id);
        },
        detailproduct : function(id){
            return $http.get('/api/product/detail/'+ id);
        },
        search : function(formData){
            return $http.post('/api/product/search', formData);
        }*/
    };
}]);