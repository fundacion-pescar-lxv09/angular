export interface Street {
    number?: number;
    name?:   string;
}
export interface Coordinates {
    latitude?:  string;
    longitude?: string;
}
export interface Timezone {
    offset?:      string;
    description?: string;
}
export interface Location {
    street?:      Street;
    city?:        string;
    state?:       string;
    country?:     string;
    postcode?:    number;
    coordinates?: Coordinates;
    timezone?:    Timezone;
}