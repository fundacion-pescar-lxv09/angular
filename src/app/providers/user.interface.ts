import { Login, Picture } from "./profile.interface"
import { Name, ID, Dob } from "./data.interface";
import { Location } from "./address.interface";

export interface UserData {
    gender?:     "male"|"female"|"other";
    name?:       Name;
    location?:   Location;
    email?:      string;
    login?:      Login;
    dob?:        Dob;
    registered?: Dob;
    phone?:      string;
    cell?:       string;
    id?:         ID;
    picture?:    Picture;
    nat?:        string;
}