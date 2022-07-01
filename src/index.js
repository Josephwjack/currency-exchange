import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';



async function makeApiCall(currencyInput) {
  const response = await ExchangeService.getChange(currencyInput);
  console.log(response);
  getElements(response.conversion_rates[currencyInput]);
}



$(document).ready(function() {
  $('#convert').click(function() {
    let currencyInput = $('#currencyInput').val();
    makeApiCall(currencyInput);
  })
});


    function getElements(response) {
      if (response !== null) {
      let inputDollar = $('#dollarInput').val()
      $('#output').text(parseInt(response * inputDollar));
      
    
    } else {
    $('.showErrors').text(`There was an error processing your request. Please try a different currency.`)
    }
  }
