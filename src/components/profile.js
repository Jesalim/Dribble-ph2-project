import axios from 'axios';
function Profile () {
// const API_URL = 'https://api.dribbble.com/v2/';
// const ACCESS_TOKEN = 'your_access_token';
const API_URL = 'https://api.dribbble.com/v2/'
const ACCESS_TOKEN = '43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3';

axios.post(`${API_URL}users/dribbbleuser`, {
 headers: {
   'Authorization': `Bearer ${ACCESS_TOKEN}`,
   'Content-Type': 'application/json'
 }
}).then(_response => {
 // handle the response
}).catch(_error => {
 // handle the error
});
}
export default Profile;