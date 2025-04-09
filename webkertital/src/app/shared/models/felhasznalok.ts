export interface Felhasznalo{
    id: number;
    vezeteknev: string;
    keresztnev: string;
    email: string;
    jelszo: string;
    telefonszam: string;
    szallitasi_adatok: string;
    admin: boolean;
    fizetesi_adatok: "kartya" | "utanvet";
    hirlevelsub: "igen" | "nem";
}

export const FelhasznalokObject = [
    {
        id: 1,
        vezeteknev: "Kiss",
        keresztnev: "Janos",
        email: "janos.kiss@example.com",
        jelszo: "jelszo123",
        telefonszam: "+36123456789",
        szallitasi_adatok: "1234 Budapest, Fo utca 1.",
        admin: true,
        fizetesi_adatok: "kartya",
        hirlevelsub: "igen"
    },
    {
        
        id: 2,
        vezeteknev: "Nagy",
        keresztnev: "Anna",
        email: "anna.nagy@example.com",
        jelszo: "jelszo456",
        telefonszam: "+36123456780",
        szallitasi_adatok: "5678 Budapest, Bar utca 2.",
        admin: false,
        fizetesi_adatok: "utanvet",
        hirlevelsub: "nem"
    },
    {
        
        id: 3,
        vezeteknev: "Szabo",
        keresztnev: "Peter",
        email: "peter.szabo@example.com",
        jelszo: "jelszo789",
        telefonszam: "+36123456781",
        szallitasi_adatok: "9101 Budapest, Kert utca 3.",
        admin: false,
        fizetesi_adatok: "kartya",
        hirlevelsub: "igen"
    }
]