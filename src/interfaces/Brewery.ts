export interface Brewery {
    id: string;           // unique brewery ID
    name: string;         // brewery name
    brewery_type: string; // brewery type (micro, regional, brewpub, etc.)
    city: string;         // city
    state: string;        // state
    country: string;      // country
    website_url?: string; // optional website URL
    phone?: string;       // optional phone number
}
