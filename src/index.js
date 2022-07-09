import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';



function getElements(response) {
  if (response.ok) {
    let inputDollar = $('#dollarInput').val();
    let currencyInput = $('#currencyInput').val();
    $('#converted').text(parseInt(response.conversion_rates[currencyInput] * inputDollar)); 
  } else {
    $('.showErrors').text(`There was an error processing your request. Please try a different currency.`);
  }
}  
async function makeApiCall(currencyInput) {
  const response = await ExchangeService.getChange(currencyInput);
  getElements(response);
}

$(document).ready(function() {
  $('#convert').click(function() {
    event.preventDefault();
    makeApiCall();
    $('.notForm').fadeIn();
  });
});


