controllers.controller(SMILES.CONTROLLERS.DashboardController, DashboardController);

DashboardController.inject = ['$scope', '$http', '$state', 'ActivityFactory','$ionicPopup',"$ionicLoading"];
function DashboardController($scope,$http,$state,$ionicPopup,$ionicLoading,ActivityFactory){
    $scope.data = {};
    $scope.error = {
        'error': false
    }

    $scope.data.initialize = function() {
    	ActivityFactory.getActivitiesList()
            .then(function(response) {
                $scope.data.activities = response;
            }, function(err) {
                $scope.error = {
                    'error': true,
                    'errMsg': error
                }
            });
    }

$scope.control = {

    // Triggered on a button click, or some other target
    showPopup : function() {
      $scope.data.popupData = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: '../../templates/popupTemplate.html',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Pay</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.popupData.amount) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.popupData.amount;
              }
            }
          }
        ]
      });

      myPopup.then(function(res) {
        console.log('Tapped!', res);
        var req = {
          method: "POST",
          url: "https://api.sandbox.paypal.com/v1/oauth2/token",
          headers : {
            "Authorization" : "Basic " + btoa("AcFQ8krz-nKRYQ1t07a8zpYrYKggt0cVvFDQCXDMjzpvBEk23HNkH_fvVtUCEC3O2PSDrrkSW2omb3dX:ELE6LWcg4THGMnYkPGY67S9wxBmEKOFBiaAv6na62MCF6bfr1wXmmB8wg3XZF4J0AAD4Qc3aXT_K3Mcz"),
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data:"grant_type=client_credentials"
        }
        console.log('req :',req);
        $http(req)            
      .success(function(data, status, headers, config){
        console.log('in getToken success method');  
        console.log(data);
        accessToken=data.access_token;
      
        // Succesful callback

          var slicedPrice=res;

          console.log('slicedPrice :'+slicedPrice);

          var req = {
            method: "POST",
            url: "https://api.sandbox.paypal.com/v1/payments/payment",
            headers:{
              'Authorization': 'Bearer '+accessToken
            },
            data: {
            "intent": "sale",
            "payer": {
              "payment_method": "credit_card",
              "funding_instruments": [{
                "credit_card": {
                  "type": "visa",
                  "number": "4417119669820331",
                  "expire_month": "11",
                  "expire_year": "2018",
                  "cvv2": "874",
                  "first_name": "Joe",
                  "last_name": "Shopper",
                  "billing_address": {
                    "line1": "52 N Main ST",
                    "city": "Johnstown",
                    "state": "OH",
                    "postal_code": "43210",
                    "country_code": "US" }}}]},
            "transactions": [{
              "amount": {
                "total": "7.47",
                "currency": "USD",
                "details": {
                  "subtotal": "7.41",
                  "tax": "0.03",
                  "shipping": "0.03"}},
              "description": "This is the payment transaction description." }]
            }
          }
          console.log('req :',req);
          $ionicLoading.show({
            template: 'Loading...'
          });
          $http(req)            
            .success(function(data, status, headers, config){
              $ionicLoading.hide();
              console.log('in order success method');
              console.log(data);
              if(data.state=="approved"){
                //storing credit Card          
              }else{
                var popup=$ionicPopup.alert({
                  title: 'Message',
                  template: "<div style='color:black'>Payment Succesfully made</div>"
                });
                popup.then(function(){            

                });
              }
            })

            .error(function(data, status, headers, config){
               $ionicLoading.hide();
              console.log('in order error method');
              console.log(data);
              var popup=$ionicPopup.alert({
                  title: 'Message',
                  template: "<div style='color:black'>Payment Succesfully made</div>"
                });
                popup.then(function(){            

                });
            });
      })
      .error(function(data, status, headers, config){
        console.log('in getToken error method');
        console.log(data);
      });
      },function(){
        console.log('Error');
      });
     }
}
    $scope.data.initialize();

}
