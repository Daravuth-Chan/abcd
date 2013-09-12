$app.controller('LoginPage', function ($scope, $http, CacheServiceApp) {
        $scope.GotoJoin = function()
		{
			$navigate.go("/Join","modal");
		};
		$scope.Data = {username:"",password:"",fullname:"",location:"",sex:"",country:""};
		$scope.Loginuser = function()
		{	
			
			$http({
      				 method : 'POST',
      			 	 url : 'http://localhost:3035/VuthServer/cont3nt_sample.php',
       				 data : 'Username='+$scope.Data.username+'&Password='+$scope.Data.password,
       				 headers: {'Content-Type':'application/x-www-form-urlencoded'}
  				 })
				 .success(function(data){
	          	 	//on success do somthing
					//alert("data loaded !"+CacheServiceApp.get("user"));
					
					if (data=="0"){
						
					}
					else
					{
						CacheServiceApp.put("user",data);
						//alert(CacheServiceApp.get("user").Name);
						$navigate.go("/MyProfile","modal");
					}
/*					if(data == "You are a valid user.")
					{
						CacheServiceApp.put("user",$scope.Data.username);
						CacheServiceApp.put("userpw",$scope.Data.password);
						
						$navigate.go("/MyProfile","modal");
					}
					else
						alert("Wrong Username or Password");*/
					
  				 }) 
				 
	
		};
		
			
 });
 
 $app.controller('JoinPage',function($scope, $http){
	$scope.New = {username:"",password:"",confirmpassword:"",fullname:"",location:"",city:"",country:"",sex:""};
 	$scope.JoinNow = function()
	{
		$http({
			method :'POST',
			url:'http://localhost:3035/VuthServer/cont3nt_sample_join_user.php',
			data:'Username='+$scope.New.username+'&Password='+$scope.New.password+'&Fullname='+$scope.New.fullname +'&Location='+$scope.New.location+'&City='+$scope.New.city+'&Country='+$scope.New.country+'&Sex='+$scope.New.sex,
			headers: {'Content-Type':'application/x-www-form-urlencoded'}
			
		}).success(function(data){
			//alert(data);
			$navigate.go("/Login","modal");
		})
		//alert("data loaded !");
	};
 
 
 });
 
 
 $app.controller('MyProfilePage',function($scope, $http,CacheServiceApp){
 	$scope.Profile = {fullname:'',location:'',sex:'',country:'',username:'',password:''};
	var obj = CacheServiceApp.get("user");
	$scope.Profile.username= obj.Username;
	$scope.Profile.password = obj.Password;
	$scope.Profile.fullname = obj.Name;
	$scope.Profile.location = obj.Location;
	$scope.Profile.sex = obj.Sex;
	$scope.Profile.country = obj.Country;
	
	$scope.changeusername = function()
	{
		alert("change!!");
	};
	$scope.changepassword = function()
	{
		alert("change!!");
	};
	
	
	
 });
 
 
	$app.factory('CacheServiceApp', function($cacheFactory) {
  		return $cacheFactory('CacheServiceApp');
	});
	
	
