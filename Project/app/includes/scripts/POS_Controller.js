$app.controller('Home', function ($scope, CacheServiceApp, $navigate) {
	$scope.Search = function()
	{
		alert("Search!");
	};
	$scope.Category = function()
	{
		$navigate.go("/pages/Categories","slide");
	};
	$scope.More = function()
	{
		alert("More!!!");
	};
});

$app.controller('category', function($scope,CacheServiceApp, $navigate){
	
	$scope.gotocategoryproduct = function()
	{
		$navigate.go("/category/Category_product","slide");
	};
	
	
});

$app.controller('category_product', function($scope,CacheServiceApp, $navigate){
	
	$scope.openproduct = function()
	{
		$navigate.go("/products/productdetail","slide");	
	};
});

$app.controller('Login_Form', function($scope, CacheServiceApp, $navigate, $http){
	$scope.POS = {username:"",password:"",fullname:""};
	$scope.loguser = function()
	{
			
			$http({
      				 method : 'POST',
      			 	 url : 'http://localhost:3035/VuthServer/Demo_Mobile_POS.php',
       				 data : 'Username='+$scope.POS.username+'&Password='+$scope.POS.password,
       				 headers: {'Content-Type':'application/x-www-form-urlencoded'}
  				 })
				 .success(function(data){
	          	 	//on success do somthing
					if (data=="0"){
						alert("incorrect");
					}
					else
					{
						$navigate.go("/Home","slide");
					}

					
  				 }) 
				 
	
	};
	
	$scope.createnewuser = function()
	{
		$navigate.go("/NewUser","slide");	
	};
});

$app.controller('New_User', function($scope, CacheServiceApp, $navigate, $http){
	$scope.New = {username:"",password:"",fullname:""};
	$scope.submitnewuser = function()
	{
		$http({
      				 method : 'POST',
      			 	 url : 'http://localhost:3035/VuthServer/Demo_Mobile_POS_newuser.php',
       				 data : 'Username='+$scope.New.username+'&Password='+$scope.New.password+'&Fullname='+$scope.New.fullname,
       				 headers: {'Content-Type':'application/x-www-form-urlencoded'}
  				 })
				 .success(function(data){
	          	 	//on success do somthing
					alert("Added");
	
  		}) 
	};	

});

$app.factory('CacheServiceApp', function($cacheFactory) {
  		return $cacheFactory('CacheServiceApp');
});