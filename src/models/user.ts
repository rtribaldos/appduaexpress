import { Profile } from './global.enum';

export class User {
    email: string;
    password: string;

    active: boolean;
    name: string;
    cif: string;
    company: string;
    tel: string;
    address: string;
    postalCode: string;
    city: string;
    state: string;
    profile: Profile;

}

