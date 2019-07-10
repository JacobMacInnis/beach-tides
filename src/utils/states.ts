import { string } from "prop-types";

// states object is used when user types in search like 'brooklyn, new york'  states object is matches the state word ('new york') to the state code 'NY' which is how the location database stores states.
export const states = {
  'alabama': 'AL', 
  'alaska': 'AK',
  'arizona': 'AZ',
  'california': 'CA',
  'colorodo': 'CO',
  'connecticut': 'CT',
  'delaware': 'DE',
  'florida': 'FL',
  'georga': 'GA',
  'hawaii': 'HI',
  'idaho': 'ID',
  'illinois': 'IL',
  'indiana': 'IN',
  'iowa': 'IA',
  'kansas': 'KS',
  'kentucky': 'KY',
  'louisiana': 'LA',
  'maine': 'ME',
  'maryland': 'MD',
  'massachusetts': 'MA',
  'michigan': 'MI',
  'minnesota': 'MN',
  'mississippi': 'MS',
  'missoruri': 'MO',
  'montana': 'MT',
  'nebraska': 'NE',
  'nevada': 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'north carolina': 'NC',
  'north dakota': 'ND',
  'ohio': 'OH',
  'oklahoma': 'OK',
  'oregon': 'OR',
  'pennsylvania': 'PA',
  'rhode island': 'RI',
  'south carolina': 'SC',
  'south dakota': 'SD',
  'tennessee': 'TN',
  'texas': 'TX',
  'utah': 'UT',
  'vermont': 'VT',
  'virginia': 'VA',
  'washington': 'WA',
  'west virginia': 'WV',
  'wisconsin': 'WI',
  'wyoming': 'WY',
  'american samoa': 'AS',
  'samoa': 'AS',
  'guam': 'GU',
  'northern mariana islands': 'MP',
  'puerto rico': 'PR',
  'u.s. virgin islands': 'VI',
  'virgin islands': 'VI'
};

// export interface States {
//   alabama: string; 
//   alaska: string; 
//   arizona: string; 
//   california: string; 
//   colorodo: string; 
//   connecticut: string; 
//   delaware: string; 
//   florida: string; 
//   georga: string; 
//   hawaii: string; 
//   idaho: string; 
//   illinois: string; 
//   indiana: string; 
//   iowa: string; 
//   kansas: string;
//   kentucky: string; 
//   louisiana: string;
//   maine: string;
//   maryland: string;
//   massachusetts: string;
//   michigan: string;
//   minnesota: string;
//   mississippi: string;
//   missoruri: string;
//   montana: string;
//   nebraska: string;
//   nevada: string;
//   new hampshire: string;
//   'new jersey': string;
//   'new mexico: string;
//   'new york: string;
//   north carolina: string;
//   north dakota: string;
//   ohio: string;
//   oklahoma: string;
//   oregon: string;
//   pennsylvania: string;
//   rhode island: string;
//   south carolina: string;
//   south dakota: string;
//   tennessee: string;
//   texas: string;
//   utah: string;
//   vermont: string;
//   virginia: string;
//   washington: string;
//   west virginia: string;
//   wisconsin: string;
//   wyoming: string;
//   american samoa: string;
//   samoa: string;
//   guam: string;
//   northern mariana islands: string;
//   puerto rico: string;
//   u.s. virgin islands: string;
//   virgin islands: string;
// };