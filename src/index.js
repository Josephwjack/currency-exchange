import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';



function getElements(response) {
  if (response !== null) {
    let inputDollar = $('#dollarInput').val();
    $('#converted').text(parseInt(response * inputDollar)); 
  } else {
    $('.showErrors').text(`There was an error processing your request. Please try a different currency.`);
  }
}
async function makeApiCall(currencyInput) {
  const response = await ExchangeService.getChange(currencyInput);
  console.log(response);
  getElements(response.conversion_rates[currencyInput]);
}

$(document).ready(function() {
  $('#convert').click(function() {
    event.preventDefault();
    let currencyInput = $('#currencyInput').val();
    makeApiCall(currencyInput);
    $('.notForm').fadeIn();
  });
});


