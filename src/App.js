import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇲": "Armenia",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇧🇲": "Bermuda",
  "🇧🇴": "Bolivia",

  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇧🇼": "Botswana",
  "🇧🇾": "Belarus",
  "🇨🇦": "Canada",
  "🇨🇫": "Central African Republic",
  "🇨🇬": "Congo - Brazzaville",
  "🇨🇭": "Switzerland",
  "🇨🇰": "Cook Islands",
  "🇨🇱": "Chile",
  "🇨🇳": "China",
  "🇨🇴": "Colombia",
  "🇨🇷": "Costa Rica",
  "🇨🇺": "Cuba",
  "🇨🇽": "Christmas Island",
  "🇨🇾": "Cyprus",
  "🇨🇿": "Czechia",
  "🇩🇪": "Germany",
  "🇩🇰": "Denmark",
  "🇩🇴": "Dominican Republic",
  "🇩🇿": "Algeria",
  "🇪🇪": "Estonia",
  "🇪🇬": "Egypt",
  "🇪🇭": "Western Sahara",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇪🇺": "European Union",
  "🇫🇮": "Finland",
  "🇫🇯": "Fiji",
  "🇫🇷": "France",
  "🇬🇧": "United Kingdom",
  "🇬🇩": "Grenada",
  "🇬🇪": "Georgia",
  "🇬🇫": "French Guiana",
  "🇬🇱": "Greenland",
  "🇬🇲": "Gambia",
  "🇬🇳": "Guinea",
  "🇬🇶": "Equatorial Guinea",
  "🇬🇷": "Greece",
  "🇭🇰": "Hong Kong SAR China",
  "🇭🇷": "Croatia",
  "🇭🇹": "Haiti",
  "🇭🇺": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇲": "Isle of Man",
  "🇮🇳": "India",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇰🇾": "Cayman Islands",
  "🇰🇿": "Kazakhstan",
  "🇱🇦": "Laos",
  "🇱🇧": "Lebanon",
  "🇱🇰": "Sri Lanka",
  "🇱🇷": "Liberia",

  "🇱🇺": "Luxembourg",

  "🇱🇾": "Libya",
  "🇲🇦": "Morocco",
  "🇲🇨": "Monaco",
  "🇲🇬": "Madagascar",
  "🇲🇲": "Myanmar (Burma)",
  "🇲🇳": "Mongolia",
  "🇲🇺": "Mauritius",
  "🇲🇻": "Maldives",

  "🇲🇽": "Mexico",
  "🇲🇾": "Malaysia",
  "🇲🇿": "Mozambique",
  "🇳🇦": "Namibia",

  "🇳🇬": "Nigeria",
  "🇳🇮": "Nicaragua",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇬": "Papua New Guinea",
  "🇵🇭": "Philippines",
  "🇵🇰": "Pakistan",
  "🇵🇱": "Poland",

  "🇵🇷": "Puerto Rico",

  "🇵🇹": "Portugal",
  "🇵🇼": "Palau",
  "🇵🇾": "Paraguay",
  "🇶🇦": "Qatar",
  "🇷🇪": "Réunion",
  "🇷🇴": "Romania",
  "🇷🇸": "Serbia",
  "🇷🇺": "Russia",

  "🇸🇦": "Saudi Arabia",
  "🇸🇧": "Solomon Islands",

  "🇸🇩": "Sudan",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore",

  "🇸🇮": "Slovenia",

  "🇸🇰": "Slovakia",

  "🇸🇴": "Somalia",

  "🇸🇸": "South Sudan",
  "🇸🇻": "El Salvador",

  "🇸🇾": "Syria",

  "🇹🇬": "Togo",
  "🇹🇭": "Thailand",
  "🇹🇯": "Tajikistan",
  "🇹🇷": "Turkey",

  "🇹🇼": "Taiwan",
  "🇹🇿": "Tanzania",
  "🇺🇦": "Ukraine",
  "🇺🇬": "Uganda",

  "🇺🇳": "United Nations",
  "🇺🇸": "United States",
  "🇺🇾": "Uruguay",
  "🇺🇿": "Uzbekistan",
  "🇻🇦": "Vatican City",

  "🇻🇪": "Venezuela",

  "🇻🇮": "U.S. Virgin Islands",
  "🇻🇳": "Vietnam",
  "🇾🇪": "Yemen",
  "🇿🇦": "South Africa",
  "🇿🇲": "Zambia",
  "🇿🇼": "Zimbabwe",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "England",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland"
};

export default function App() {
  var flagarray = Object.keys(flagDictionary);
  const [country, setcountry] = useState("Country will appear here..");

  function ClickHandler(item) {
    var country = flagDictionary[item];
    setcountry(country);
  }

  function changeHandler(event) {
    var flag = event.target.value;
    if (!(flag in flagDictionary)) {
      var country = "Oops! We didn't know this flag existed!";
    } else if (flag === "" || flag === " ") {
      country = "Country will appear here..";
    } else {
      country = flagDictionary[flag];
    }
    setcountry(country);
  }
  return (
    <div className="App">
      <nav>
        <h1>FLAGS OF THE WORLD</h1>
      </nav>

      <main>
        <div className="main-question-text">
          <p>Want to know which country a flag represents?</p>
          <p>Type a flag emoticon below or select from Library!</p>
        </div>
        <input
          className="main-input-flag"
          type="text"
          onChange={changeHandler}
        ></input>
        <p>
          <strong className="main-diplay-country">{country}</strong>
        </p>
        <div className="list-container" style={{ maxWidth: "1200px" }}>
          <ul>
            {flagarray.map((item, index) => (
              <li
                style={{
                  display: "inline",
                  padding: "1rem",
                  fontSize: "3rem",
                  cursor: "pointer"
                }}
                onClick={() => ClickHandler(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer>
        <p>
          source of flag information:{" "}
          <a
            className="footer-link"
            href="https://emojipedia.org/flags/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            emojipedia
          </a>
        </p>
      </footer>
    </div>
  );
}
