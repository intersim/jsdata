 'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			thePost: function(Post, $stateParams) {
				return Post.find($stateParams.postId)
			}
		}


		/*
				add a resolve block that retrieves all the users
				so that the author field of the posts will be automatically 
				populated
		*/
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope,thePost) {

	$scope.post = thePost;
	console.log("the post is",thePost)

	/*
		2. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})