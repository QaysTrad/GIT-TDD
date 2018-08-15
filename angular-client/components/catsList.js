var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
var getCats = function() {
	// TODO: Your code here

};
getCats();

$scope.addCats=function() {
// TODO: Your code here
  $http({
  	method:'POST',
  	url:'/cats',
  	data:{catName : $scope.catName,
  		ownerEmail: $scope.ownerEmail,
  		imageUrl  : $scope.imageUrl,
  		adoptionMessage: $scope.adoptionMessage
  	}.then(function (){
  		console.log('done')
  	}, function () {
  		console.log('error')
  	})
  })
}

});
