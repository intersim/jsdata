'use  strict';

app.factory('User', function(DS) {
	
  var UserFactory = DS.defineResource({
    name: 'users'
  });

  return UserFactory;
}).run(function (User) {});

