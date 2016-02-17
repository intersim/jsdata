'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $state) {

  $scope.signup = {};

  $scope.sendSignup = function () {
    console.log('clicked signup submit!');
    User.create($scope.signup)
    .then(function(userData) {
      console.log("userData: ", userData);
      $state.go('create', {userId: userData._id});
    }) 
  }
})