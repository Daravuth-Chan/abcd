 
    $app.controller('UpdateBirthday', function ($scope) {
        $scope.ShowAlert = function()
		{
			alert("change text !!!");
		};
    });

    $app.controller('MyCtrl',function($scope) {
      $scope.action = function() {
        $scope.name = 'OK';
        alert(e);
      }
      $scope.name = 'World';
      $scope.nText="hello 4df";
    } );

	$app.controller('Add',function($scope, $http){
		$scope.data={username:"",name:"",location:"",city:"",country:"",password:"",confirmpassword:""};
		$scope.adddata = function(){
			var tmpData={};
			tmpData["name"] = $scope.data.name;
			tmpData["location"] = $scope.data.location;
			tmpData["city"] = $scope.data.city;
			tmpData["country"] = $scope.data.country;
			tmpData["username"]=$scope.data.username;
			var data1 = JSON.stringify(tmpData);
			$http({
      				 method : 'POST',
      			 	 url : 'http://localhost:3035/VuthServer/ravuthdb.php',
       				 data : 'tmp=1&variable1=' + data1,
       				 headers: {'Content-Type':'application/x-www-form-urlencoded'}
  				 }).success(function(data){
          	 //on success do somthing
			 alert(data);
  			 })
			alert("data loaded !"+data1);
		}
	});
	
	$app.controller('Search',function ($scope, $http){
		$scope.Search = {name:""};
		$scope.users=[];
		$scope.StartSearch = function(){
			
			$http({
      				 method : 'POST',
      			 	 url : 'http://localhost:3035/VuthServer/ravuthdb2.php',
       				 data : 'Name=' + $scope.Search.name,
       				 headers: {'Content-Type':'application/x-www-form-urlencoded'}
  				 }).success(function(data){
          	 //on success do somthing
			 $scope.users = data;
			 alert($scope.users.length);
			 alert(data);
  			 })
			 
		};
		
	
	});
	$app.controller('Test',function($scope){
		$scope.name = "Ra Vuth";
		$scope.contacts = [{type:'phone',value:'012779874'},{type:'email',value:'chandaravuth@rocketmail.com'}];
		
		$scope.greet = function(){
			alert(name);	
		};
		
		$scope.addContact = function(){
			$scope.contacts.push({type:'email',value:'yourname@mail.com'});
		};
		
		$scope.removeContact = function(){
			var index = $scope.contacts.indexOf();
			$scope.contacts.splice(index, 1);
		};
		
		$scope.clearContact = function(contact){
			contact.type = 'phone';
			contact.value = '';
		};
	});
	
	$app.directive("testDir",function($rootScope){
     return {
        restrict:'E',
          scope:{
               text:"=",

          },
          link:function(scope,elem,attr){
          },

          template:"<h4>model = {{text}}</h4>",
          controller:function($scope){
          }
     };
    });
	
	
