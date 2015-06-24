(function(){
  
  var app = angular.module('mpc', []);
  
  app.controller('MainController', function(){
    
    // Stores the input value converted to pennies
    this.convertedInputValue = null;
    
    // Array of sterling coins to convert input to
    this.coins = [
      {
        name: '1p',
        defaultValue: ''
      },
      {
        name: '2p',
        defaultValue: ''
      },
      {
        name: '50p',
        defaultValue: ''
      },
      {
        name: '£1',
        defaultValue: ''
      },
      {
        name: '£2',
        defaultValue: ''
      }
    ];
    
    /**
     * Converts user input to the minimum amount of sterling coins
     * Also converts the user input into pennies if not already
     * 
     * @param {string} inputValue Raw user input
     * @return  int     Total convered pence
     */
    this.convertInput = function(inputValue) {
      if (inputValue) {
        
        //@TODO Convert user input to pennies
        this.convertedInputValue = inputValue;
      } else {
        this.convertedInputValue = null;
      }
    };
    
    /**
     * Submit handler
     * 
     */
    this.onSubmit = function() {
      console.log(this.inputValue);
      this.convertInput(this.inputValue);
    };
    
  }); // End controller

})();
