(
    function(){
        angular.module("myFirstApp" , [])
        .controller("myFirstController" , MainFucntion);
        
        MainFucntion.$inject =["$scope","$filter"];

        function MainFucntion($scope , $filter){
            $scope.name = "Bilal Sarfraz";
            $scope.Bname = "Adeel Sarfraz"
            $scope.myAge ="";
            $scope.Cpic = "jag"


            $scope.age = function(){
                $scope.myAge = "i am 42 years old baby :)"
                return $scope.myAge
            };

            $scope.BUCname = function(){
                var aa = $filter("uppercase");
                $scope.Bname = aa($scope.Bname);
                return $scope.Bname
            };

            $scope.CPChanger = function(){
                $scope.Cpic = "jag1";
                return $scope.Cpic;
            }
        };
    }
)();
