export default class ExchangeService {
  static async getChange() {
    try {
      let url =(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let request = await fetch(url);
      if (request.ok && request.status === 200) {
        let response = await request.json();
        return response;
      } else {
        request = false;
      }    
    } catch (error) {
      return false;
    }
  }
}




