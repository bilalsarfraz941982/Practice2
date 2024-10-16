(
    function(){
        angular.module("myFirstApp" , [])
        .controller("myFirstController" , MainFucntion);
        
        MainFucntion.$inject =["$scope"];

        function MainFucntion($scope){
            $scope.name = "Bilal Sarfraz";
            
        };
    }
)();
