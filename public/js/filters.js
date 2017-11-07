angular.module('appFilters', [])
.filter('unsafe',['$sce',function($sce) {
	return function(val) {
	    return $sce.trustAsHtml(val);
	};
}])
.filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  };
})
.filter('range', function(){
  return function(n) {
    var res = [];
    for (var i = 0; i < n; i++) {
      res.push(i);
    }
    return res;
  };
});
