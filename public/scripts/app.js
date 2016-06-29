var app = angular.module("selectColor",[]);

app.controller("mainCtrl",function($scope,dataService){
	$scope.name = "white";
    dataService.names(function(response){
        $scope.names = response.data;
    });

 $scope.selectedColor = function(name){
 		$scope.name = name;
 }

});

app.service('dataService',function($http){
    this.names = function(callback){
        $http.get('data/data.json').
        then(callback);
    };
});