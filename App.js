(
    function(){
        angular.module("myfirstapp" , [])
        .controller("myfirstcontroller" , MainFucntion);
        
        MainFucntion.$inject =["$Scope"];

        function MainFucntion($scope){
            $scope.name = "Bilal Sarfraz"
        }
    }
)();
