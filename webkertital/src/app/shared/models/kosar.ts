export class Kosar{
    id: number;
    termeknev: string;
    termekara: number;
    kepelerese: string;
    mennyi: number;
    user_id: number;
    productsid: number;

    static kosarId = 6;
    constructor(id: number, termeknev: string, termekara: number, kepelerese: string, mennyi: number, user_id: number, productsid: number) {
        this.id = id;
        this.termeknev = termeknev;
        this.termekara = termekara;
        this.kepelerese = kepelerese;
        this.mennyi = mennyi;
        this.user_id = user_id;
        this.productsid = productsid;
    }

}

export const KosarObject: Kosar[] = [
    {
        id: 1,
        termeknev: "Termék 1",
        termekara: 300,
        kepelerese: '../../../assets/img/absolut.jpg',
        mennyi: 3,
        user_id: 1,
        productsid: 1
    },
    {
        id: 2,
        termeknev: "Termék 2",
        termekara: 450,
        kepelerese: '../../../assets/img/bacardi.jpg',
        mennyi: 2,
        user_id: 1,
        productsid: 2
    },
    {
        
        id: 3,
        termeknev: "Termék 3",
        termekara: 150,
        kepelerese: '../../../assets/img/fanta-bodza.jpg',
        mennyi: 1,
        user_id: 1,
        productsid: 3
    },
    {
        id: 4,
        termeknev: "Termék 4",
        termekara: 200,
        kepelerese: '../../../assets/img/fanta-szolo.jpg',
        mennyi: 1,
        user_id: 2,
        productsid: 4
    },
    {
        id: 5,
        termeknev: "Termék 5",
        termekara: 200,
        kepelerese: '../../../assets/img/armandchampagne.jpg',
        mennyi: 4,
        user_id: 2,
        productsid: 5
    }
]