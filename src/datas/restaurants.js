import pizza from '../../assets/img/pizza.jpeg';
import carry from '../../assets/img/carry.jpeg';
import burger from '../../assets/img/burger.jpeg';
import indian from '../../assets/img/indian.jpeg';
import sushi from '../../assets/img/sushi.jpeg';
import vegan from '../../assets/img/vegan.jpeg';

import burgerCategory from '../../assets/img/categories/burger-min.jpeg';
import indianCategory from '../../assets/img/categories/indian-min.jpeg';
import japanCategory from '../../assets/img/categories/japan-min.jpeg';
import pizzaCategory from '../../assets/img/categories/pizza-min.jpeg';
import reunionCategory from '../../assets/img/categories/reunion-min.jpeg';
import veganCategory from '../../assets/img/categories/vegan-min.jpeg';

export default [
    {
        name: 'Le Vesuvio',
        image: pizza,
        category: 'Pizza',
        deliveryPrice: 1,
        deliveryTime: 30,
        rate: 4.0,
        menu: [
            {
                name: 'Margharita',
                description: 'Tomate, Olives, Fromage',
                price: 10,
                size: 'Moyenne',
                extra: [
                    {
                        name: 'Grande',
                        price: 3,
                    },
                ],
            },
            {
                name: 'Calzone',
                description: 'Tomate, Jambon, Oeuf, Fromage',
                price: 10.5,
                size: 'Moyenne',
                extra: [
                    {
                        name: 'Grande',
                        price: 3,
                    },
                ],
            },
            {
                name: 'Reine',
                description: 'Tomate, Epaule , Champigons , Oeuf, Fromage',
                price: 10.5,
                size: 'Moyenne',
                extra: [
                    {
                        name: 'Grande',
                        price: 3,
                    },
                ],
            },
            {
                name: 'La Créole',
                description: 'Tomate, Saucisses fumées , Oignons , Gros Piments, Fromage',
                price: 11,
                size: 'Moyenne',
                extra: [
                    {
                        name: 'Grande',
                        price: 3,
                    },
                ],
            },
        ],
    },
    {
        name: 'La Marmite enchantée',
        image: carry,
        category: 'Réunion',
        deliveryPrice: 0.8,
        deliveryTime: 30,
        rate: 4.3,
    },
    {
        name: "Burger's Factory",
        image: burger,
        category: 'Burger',
        deliveryPrice: 1,
        deliveryTime: 30,
        rate: 4.0,
    },
    {
        name: 'Le Maharaja',
        image: indian,
        category: 'Inde',
        deliveryPrice: 1,
        deliveryTime: 40,
        rate: 4.6,
    },

    {
        name: 'Kyoto Sushi',
        image: sushi,
        category: 'Japon',
        deliveryPrice: 1.3,
        deliveryTime: 30,
        rate: 4.1,
        menu: [
            {
                name: 'Gyozas',
                description: '6 pièces au poulet',
                price: 6,
            },
            {
                name: 'Brochettes boeuf au fromage',
                description: 'Servi par paire',
                price: 4.5,
            },
            {
                name: 'Menu B1',
                description:
                    '6 régal roll frommage, 6 primptemps rolls saumon avocat et 6 California saumon avocat, servi avec 1 soupe et salade',
                price: 17.5,
                extra: [
                    {
                        name: 'Supplément wasabi',
                        price: 0,
                    },
                    {
                        name: 'Supplément sauce soja',
                        price: 0,
                    },
                ],
            },
            {
                name: 'Sashimi saumon',
                description: '9 pièces',
                price: 9,
                extra: [
                    {
                        name: 'Supplément wasabi',
                        price: 0,
                    },
                    {
                        name: 'Supplément sauce soja',
                        price: 0,
                    },
                ],
            },
            {
                name: 'Menu C3',
                description:
                    '8 California saumon et 3 sushis saumon, servi avec salade, soupe, riz',
                price: 17.5,
                extra: [
                    {
                        name: 'Supplément wasabi',
                        price: 0,
                    },
                    {
                        name: 'Supplément sauce soja',
                        price: 0,
                    },
                ],
            },
            {
                name: 'Menu mix Saumon/Thon',
                description: '8 sushis, 4 saumons et 4 thons, soupe et salade',
                price: 13.5,
                extra: [
                    {
                        name: 'Supplément wasabi',
                        price: 0,
                    },
                    {
                        name: 'Supplément sauce soja',
                        price: 0,
                    },
                ],
            },
        ],
    },
    {
        name: 'Vegeta',
        image: vegan,
        category: 'Végétarien',
        deliveryPrice: 1.15,
        deliveryTime: 20,
        rate: 3.8,
    },
];
