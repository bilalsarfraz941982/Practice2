(
    function(){
        angular.module("myFirstApp" , [])
        .controller("myFirstController" , MainFucntion)
        .filter("ADDNumber" , AddNumber);
        
        MainFucntion.$inject =["$scope","$filter"];

        function MainFucntion($scope , $filter, ADDNumberFilter){
            $scope.name = "Bilal Sarfraz";
            $scope.Bname = "Adeel Sarfraz"
            $scope.myAge ="";
            $scope.Cpic = "jag";
            $scope.input="";
            $scope.AdNumber = "";
             

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

        function AddNumber(){
            return function(input , fValue , sValue){
                 input = fValue + sValue ;
                 return  input
            }
        }
    }
)();
