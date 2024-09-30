// middleware/countryRedirect.js
import axios from "axios";

export default async function ({ req, redirect }) {
  // const allowedCountries = ["US", "UK", "JP", "GB", "NG", "SE", "CA"];
  // const apiKey = "3abf5524226e45";
  // try {
  //   const response = await axios.get(`http://ipinfo.io?token=${apiKey}`);
  //   const userCountry = response.data.country;
  //   // console.log(userCountry);
  //   if (!allowedCountries.includes(userCountry)) {
  //     redirect("https://www.reddit.com");
  //   }
  // } catch (error) {
  //   console.error("Error fetching user country:", error.message);
  // }
}
