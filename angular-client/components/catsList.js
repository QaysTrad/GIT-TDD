var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
  $scope.imgHere ='https://pbs.twimg.com/profile_images/963453873812893696/wRf1-zn-_400x400.jpg';

var getCats = function() {
	  $http({
    method:'GET',
    url:'/cats',
    }).then(function (data){
      $scope.cats = data.data

    }, function (err) {
      console.log('error' , err)
    })

};
getCats();

$scope.addCats=function() {
  $http({
  	method:'POST',
  	url:'/cats',
  	data:{
  		catName : $scope.catName,
  		ownerEmail: $scope.ownerEmail,
  		imageUrl  : $scope.imageUrl,
  		adoptionMessage: $scope.adoptionMessage
  		}
  	}).then(function (){
  		console.log('done')
  	}, function () {
  		console.log('error')
  	})
}

});
