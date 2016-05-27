/**
 * 
 */
app.controller('MainCtrl',function($scope,$http){
	 $scope.countrylist = ["Emil", "Tobias", "Linus"];
      function getVolunteerList(){
        console.log("from control");
        $http.get('/volunteerlist').success(function(response){
            console.log("Response ::: "+JSON.stringify(response));
            response= [{"_id":"574732e6a45090e9efdbd3b3","id":"4","firstname":"ss3","lastname":"","country":"india","street":"1st Street","city":"Madras","zip":"620002","email":"ss@gmail.com"},{"_id":"574732f0a45090e9efdbd3b4","id":"1","firstname":"ss","lastname":"","country":"india","street":"1st Street","city":"Madras","zip":"620002","email":"ss@gmail.com"},{"fname":"test","sname":"test","country":"12","street":"12","city":"12qw","email":"23we","_id":"57473852829ef44417986aa9"}]

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