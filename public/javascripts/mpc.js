(function(){
  
  var app = angular.module('mpc', []);
  
  // Array of sterling coins to convert input to
  var coins = [
    {
      name: '1p',
      value: null,
      pennyValue: 1
    },
    {
      name: '2p',
      value: null,
      pennyValue: 2
    },
    {
      name: '50p',
      value: null,
      pennyValue: 50
    },
    {
      name: '£1',
      value: null,
      pennyValue: 100
    },
    {
      name: '£2',
      value: null,
      pennyValue: 200,
    }
  ];
  
  app.controller('MainController', function($scope){
    
    // Set coins
    this.coins = coins;
    
    // Stores the user input value
    this.inputValue = null;
    
    // Stores the input value converted to pennies
    this.convertedInputValue = null;
    
    // Error message when form is invalid
    this.errorMessage = null;
    
    // Normal message
    this.message = null;
    
    /**
     * Submit handler
     * 
     * @param   {obj} form Angular form object
     * @return  void
     */
    this.onSubmit = function(form) {
      if (form.$invalid) {
        this.message = null;
        this.errorMessage = 'Invalid form input';
        return;
      } else {
        this.errorMessage = null;
      }
      
      // Convert to pennies by checking for decimal.
      // If decimal or £ is present then multiply by 100 because
      // this indicates the value is pounds vs pennies
      if (this.inputValue.indexOf('.') !== -1 || this.inputValue.indexOf('£') !== -1) {
        this.convertedInputValue = Math.round(this.inputValue.replace(/[^0-9.]/g, '') * 100);
      } else {
        this.convertedInputValue = Math.round(this.inputValue.replace(/[^0-9.]/g, ''));
      }
      this.message = 'Converting ' + this.convertedInputValue + ' pennies into coins';
      
      // Now calculate the values for the coins
      // by cloning remainder and looping backwards.
      var remainder = this.convertedInputValue;
      for (var i = this.coins.length-1; i >= 0; --i) {
        var coin = this.coins[i];
        console.log(remainder / coin.pennyValue);
        var coinValue = Math.floor(remainder / coin.pennyValue);
        
        // Recalculate remainder
        remainder = remainder % coin.pennyValue;
        this.coins[i].value = coinValue;
      }
    };
   
  }); // End controller
})();