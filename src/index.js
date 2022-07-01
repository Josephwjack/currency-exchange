import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';


async function makeApiCall() {
  const response = await ExchangeService.getChange();
  getElements(response);
}

$(document).ready(function() {
  $('#convert').click(function() {
    let dollarInput = $('#dollarInput').val();
    let currencyInput = $('#currency')
    makeApiCall();
  })
});


