(
    function(){
        angular.module("myFirstApp" , [])
        .controller("myFirstController" , MainFucntion);
        
        MainFucntion.$inject =["$scope"];

        function MainFucntion($scope){
            $scope.name = "Bilal Sarfraz";
            $scope.myAge ="";


            $scope.age = function(){
                $scope.myAge = "i am 42 years old baby :)"
                return $scope.myAge
            }
        };
    }
)();
