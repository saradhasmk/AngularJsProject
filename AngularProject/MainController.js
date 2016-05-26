/**
 * 
 */
app.controller('MainCtrl',function($scope,$http){
	
$scope.name="Saradhas";
      function getVolunteerList(){
        console.log("from control");
        $http.get('/volunteerlist').success(function(response){
            console.log("Response ::: "+JSON.stringify(response));
            $scope.volunteerList=response;
        });

    }
    getVolunteerList();
    $scope.addVolunteerInfo=function(){
        console.log($scope.book);
        $http.post('/addvolunteer',$scope.volunteer).success(function(response){
            $scope.volunteerList.push(response);
            $scope.volunteer="";
            getVolunteerList();
        });
    };

});