(
    function(){
        angular.module("myfirstmodule" , [])
        .controller("myfirstcontroller" , MainFunction);

        MainFunction.$inject = ["$scope","filter"];

        function MainFunction($scope , $filter){
              $scope.name = "bilal sarfraz";
              $scope.age= "42 years old :)"
        }
    }
)();