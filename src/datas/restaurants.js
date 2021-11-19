import pizza from '../../assets/img/pizza.jpeg';
import carry from '../../assets/img/carry.jpeg';
import burger from '../../assets/img/burger.jpeg';
import indian from '../../assets/img/indian.jpeg';
import sushi from '../../assets/img/sushi.jpeg';
import vegan from '../../assets/img/vegan.jpeg';

export default [
    {
        name: 'Le Vesuvio',
        id: 1,
        image: pizza,
        category: 'Pizza',
        deliveryPrice: 1,
        deliveryTime: 30,
        rate: 4.0,
        menu: [
            {
                name: 'Margharita',
                id: 11,
                description: 'Tomate, Olives, Fromage',
                price: 10,
                size: 'Moyenne',
                extra: [
                    {
                        id: 111,
                        label: 'xl',
                        value: 3,
                    },
                ],
            },
            {
                name: 'Calzone',
                id: 12,
                description: 'Tomate, Jambon, Oeuf, Fromage',
                price: 10.5,
                size: 'Moyenne',
                extra: [
                    {
                        id: 121,
                        label: 'Grande',
                        value: 3,
                    },
                ],
            },
            {
                name: 'Reine',
                id: 13,
                description: 'Tomate, Epaule , Champigons , Oeuf, Fromage',
                price: 10.5,
                size: 'Moyenne',
                extra: [
                    {
                        id: 131,
                        label: 'Grande',
                        value: 3,
                    },
                ],
            },
            {
                name: 'La Créole',
                id: 14,
                description: 'Tomate, Saucisses fumées , Oignons , Gros Piments, Fromage',
                price: 11,
                size: 'Moyenne',
                extra: [
                    {
                        id: 141,
                        label: 'Grande',
                        value: 3,
                    },
                ],
            },
        ],
    },
    {
        name: 'La Marmite enchantée',
        id: 2,
        image: carry,
        category: 'Réunion',
        deliveryPrice: 0.8,
        deliveryTime: 30,
        rate: 4.3,
    },
    {
        name: "Burger's Factory",
        id: 3,
        image: burger,
        category: 'Burger',
        deliveryPrice: 1,
        deliveryTime: 30,
        rate: 4.0,
    },
    {
        name: 'Le Maharaja',
        id: 4,
        image: indian,
        category: 'Inde',
        deliveryPrice: 1,
        deliveryTime: 40,
        rate: 4.6,
    },

    {
        name: 'Kyoto Sushi',
        id: 5,
        image: sushi,
        category: 'Japon',
        deliveryPrice: 1.3,
        deliveryTime: 30,
        rate: 4.1,
        menu: [
            {
                id: 51,
                name: 'Gyozas',
                description: '6 pièces au poulet',
                price: 6,
            },
            {
                id: 52,
                name: 'Brochettes boeuf au fromage',
                description: 'Servi par paire',
                price: 4.5,
            },
            {
                id: 53,
                name: 'Menu B1',
                description:
                    '6 régal roll frommage, 6 primptemps rolls saumon avocat et 6 California saumon avocat, servi avec 1 soupe et salade',
                price: 17.5,
                extra: [
                    {
                        id: 531,
                        label: 'Supplément wasabi',
                        value: 1,
                    },
                    {
                        id: 532,
                        label: 'Supplément sauce soja',
                        value: 2,
                    },
                ],
            },
            {
                id: 54,
                name: 'Sashimi saumon',
                description: '9 pièces',
                price: 9,
                extra: [
                    {
                        id: 541,
                        label: 'Supplément wasabi',
                        value: 0,
                    },
                    {
                        id: 542,
                        label: 'Supplément sauce soja',
                        value: 0,
                    },
                ],
            },
            {
                id: 55,
                name: 'Menu C3',
                description:
                    '8 California saumon et 3 sushis saumon, servi avec salade, soupe, riz',
                price: 17.5,
                extra: [
                    {
                        id: 551,
                        label: 'Supplément wasabi',
                        value: 0,
                    },
                    {
                        id: 552,
                        label: 'Supplément sauce soja',
                        value: 0,
                    },
                ],
            },
            {
                id: 56,
                name: 'Menu mix Saumon/Thon',
                description: '8 sushis, 4 saumons et 4 thons, soupe et salade',
                price: 13.5,
                extra: [
                    {
                        id: 561,
                        label: 'Supplément wasabi',
                        value: 0,
                    },
                    {
                        id: 562,
                        label: 'Supplément sauce soja',
                        value: 0,
                    },
                ],
            },
            {
                id: 57,
                name: 'Menu mix Saumon/Thon',
                description: '8 sushis, 4 saumons et 4 thons, soupe et salade',
                price: 13.5,
                extra: [
                    {
                        id: 571,
                        label: 'Supplément wasabi',
                        value: 0,
                    },
                    {
                        id: 572,
                        label: 'Supplément sauce soja',
                        value: 0,
                    },
                ],
            },
            {
                id: 58,
                name: 'Menu mix Saumon/Thon',
                description: '8 sushis, 4 saumons et 4 thons, soupe et salade',
                price: 13.5,
                extra: [
                    {
                        id: 581,
                        label: 'Supplément wasabi',
                        value: 0,
                    },
                    {
                        id: 582,
                        label: 'Supplément sauce soja',
                        value: 0,
                    },
                ],
            },
            {
                id: 59,
                name: 'Menu mix Saumon/Thon',
                description: '8 sushis, 4 saumons et 4 thons, soupe et salade',
                price: 13.5,
                extra: [
                    {
                        id: 591,
                        label: 'Supplément wasabi',
                        value: 0,
                    },
                    {
                        id: 592,
                        label: 'Supplément sauce soja',
                        value: 0,
                    },
                ],
            },
        ],
    },
    {
        name: 'Vegeta',
        id: 6,
        image: vegan,
        category: 'Végétarien',
        deliveryPrice: 1.15,
        deliveryTime: 20,
        rate: 3.8,
    },
];
