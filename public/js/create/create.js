'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			theAuthor: function (User, $stateParams) {
				return User.find($stateParams.userId)
			}
		}
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, theAuthor, Post, $state) {

	console.log('theAuthor: ', theAuthor.username);
	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.newPost.name = theAuthor.username;
		$scope.previewTrue = !$scope.previewTrue;
	}

	// if there's no stateParam.userId,
	// User.find(newPost.name)
	// then set newPost.author to --> that promise

	// $scope.newPost.author = theAuthor || newPost.name

	$scope.createNewPost = function () {
		$scope.newPost.author = theAuthor._id;
	  
		Post.create($scope.newPost)
		.then(function (postData) {
			console.log("postData: ", postData);
			// $state.go('main', postData)
		})
	}
}) 