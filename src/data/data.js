import { FaHome, FaCity, FaBed, FaSwimmingPool, FaBuilding, FaUser } from 'react-icons/fa'
import { GiGreenhouse, GiHouse } from 'react-icons/gi'
import { MdSecurity } from "react-icons/md";

import { human1, human2, human3, human4, human5, human6 } from '../assets/human'

import { 
    house1, 
    house2, 
    house3, 
    house4, 
    house5, 
    house6, 
    house7, 
    house8, 
    house9, 
    house10, 
    house11, 
    house12, 
    house13, 
    house14, 
    house15,
    room1,
    room2,
    planRooms
} from "../assets/houses"

export const navLinks = [
    {
        id: 1,
        label: 'Home',
        path: '/',
        isOpenSubMenu: false,
        subMenu: []
    },
    {
        id: 2,
        label: 'Nieruchomości',
        // path: '/',
        isOpenSubMenu: false,
        subMenu: [
            {
                label: 'Kupuję',
                path: '/nieruchomosci',
                subMenu: []
            },
            {
                label: 'Sprzedaje',
                path: '/sprzedaj',
                subMenu: []
            },
        ]
    },
    {
        id: 3,
        label: 'Oferta',
        path: '/oferta',
        isOpenSubMenu: false,
        subMenu: []
    },
    {
        id: 4,
        label: 'O nas',
        path: '/o-nas',
        isOpenSubMenu: false,
        subMenu: []
    },
    {
        id: 5,
        label: 'Kontakt',
        path: '/kontakt',
        isOpenSubMenu: false,
        subMenu: []
    },
]

export const properties = [
    {
        id: 1,
        region: "Podkarpackie",
        city: "Rzeszów",
        adress: 'ul. Polna',
        priceSell: 565000,
        priceRent: '',
        area: 80,
        layout: {
            bathroom: 1,
            room: 4,
            garage: false,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house1,
        images: [ house1, room1, room2, planRooms ]
    },
    {
        id: 2,
        region: "Podkarpackie",
        city: "Rzeszów",
        adress: 'ul. Polna',
        priceSell: 535000,
        priceRent: '',
        area: 70,
        layout: {
            bathroom: 1,
            room: 3,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house2,
        images: [ house2, room1, room2, planRooms ]
    },
    {
        id: 3,
        region: "Podkarpackie",
        city: "Rzeszów",
        adress: 'ul. Polna',
        priceSell: 765000,
        priceRent: '',
        area: 140,
        layout: {
            bathroom: 2,
            room: 5,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house3,
        images: [ house3, room1, room2, planRooms ]
    },
    {
        id: 4,
        region: "Mazowieckie",
        city: "Warszawa",
        adress: 'ul. Mickiewicza',
        priceSell: 1165000,
        priceRent: '',
        area: 150,
        layout: {
            bathroom: 2,
            room: 5,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house4,
        images: [ house4, room1, room2, planRooms ]
    },
    {
        id: 5,
        region: "Mazowieckie",
        city: "Warszawa",
        adress: 'ul. Piłsudskiego',
        priceSell: 965000,
        priceRent: '',
        area: 100,
        layout: {
            bathroom: 1,
            room: 4,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house5,
        images: [ house5, room1, room2, planRooms ]
    },
    {
        id: 6,
        region: "Mazowieckie",
        city: "Warszawa",
        adress: 'ul. Piłsudskiego',
        priceSell: 1165000,
        priceRent: '',
        area: 150,
        layout: {
            bathroom: 2,
            room: 5,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house6,
        images: [ house6, room1, room2, planRooms ]
    },
    {
        id: 7,
        region: "Mazowieckie",
        city: "Warszawa",
        adress: 'ul. Mickiewicza',
        priceSell: 865000,
        priceRent: '',
        area: 110,
        layout: {
            bathroom: 1,
            room: 4,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house7,
        images: [ house7, room1, room2, planRooms ]
    },
    {
        id: 8,
        region: "Mazowieckie",
        city: "Warszawa",
        adress: 'ul. Mickiewicza',
        priceSell: 765000,
        priceRent: '',
        area: 110,
        layout: {
            bathroom: 1,
            room: 4,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house8,
        images: [ house8, room1, room2, planRooms ]
    },
    {
        id: 9,
        region: "Wielkopolskie",
        city: "Poznań",
        adress: 'ul. Mickiewicza',
        priceSell: 865000,
        priceRent: '',
        area: 110,
        layout: {
            bathroom: 1,
            room: 4,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house9,
        images: [ house9, room1, room2, planRooms ]
    },
    {
        id: 10,
        region: "Wielkopolskie",
        city: "Poznań",
        adress: 'ul. Mickiewicza',
        priceSell: 710000,
        priceRent: '',
        area: 120,
        layout: {
            bathroom: 2,
            room: 4,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house10,
        images: [ house10, room1, room2, planRooms ]
    },
    {
        id: 11,
        region: "Wielkopolskie",
        city: "Poznań",
        adress: 'ul. Mickiewicza',
        priceSell: 665000,
        priceRent: '',
        area: 85,
        layout: {
            bathroom: 1,
            room: 3,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house11,
        images: [ house11, room1, room2, planRooms ]
    },
    {
        id: 12,
        region: "Małopolskie",
        city: "Kraków",
        adress: 'ul. Mickiewicza',
        priceSell: 775000,
        priceRent: '',
        area: 95,
        layout: {
            bathroom: 1,
            room: 3,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house12,
        images: [ house12, room1, room2, planRooms ]
    },
    {
        id: 13,
        region: "Małopolskie",
        city: "Kraków",
        adress: 'ul. Kopernika',
        priceSell: 775000,
        priceRent: '',
        area: 105,
        layout: {
            bathroom: 1,
            room: 3,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house13,
        images: [ house13, room1, room2, planRooms ]
    },
    {
        id: 14,
        region: "Małopolskie",
        city: "Kraków",
        adress: 'ul. Mickiewicza',
        priceSell: 675000,
        priceRent: '',
        area: 80,
        layout: {
            bathroom: 1,
            room: 3,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house14,
        images: [ house14, room1, room2, planRooms ]
    },
    {
        id: 15,
        region: "Małopolskie",
        city: "Kraków",
        adress: 'ul. Kopernika',
        priceSell: 550000,
        priceRent: '',
        area: 115,
        layout: {
            bathroom: 1,
            room: 3,
            garage: true,
        },
        type: 'Dom',
        typeOffer: 'Sprzedaż',
        pathImg: house15,
        images: [ house15, room1, room2, planRooms ]
    },
]

export const serviceOffer = [
    {
        icon: FaHome,
        title: 'Dom jednorodzinny w zielonej okolicy',
        description: 'Przestronny dom z pięknym ogrodem, idealny dla rodzin.',
    },
    {
        icon: FaCity,
        title: 'Apartament w centrum miasta',
        description: 'Nowoczesny apartament z panoramicznym widokiem.',
        },
    {
        icon: FaBed,
        title: 'Luksusowe mieszkanie z 3 sypialniami',
        description: 'Eleganckie mieszkanie z wieloma udogodnieniami.',
    },
    {
        icon: FaSwimmingPool,
        title: 'Dom na przedmieściach z basenem',
        description: 'Przestronny dom z basenem, idealny na letnie dni.',
    },
    {
        icon: GiGreenhouse,
        title: 'Apartament z tarasem w nowej zabudowie',
        description: 'Nowoczesny apartament z dużym tarasem i widokiem na miasto.',
    },
    {
        icon: FaHome,
        title: 'Mieszkanie z panoramicznym oknem',
        description: 'Komfortowe mieszkanie z dużym panoramicznym oknem.',
    },
    {
        icon: GiHouse,
        title: 'Dom w cichej okolicy z dużym ogrodem',
        description: 'Dom otoczony zielenią, idealny dla miłośników spokoju.',
    },
    {
        icon: FaBuilding,
        title: 'Nowoczesne mieszkanie w apartamentowcu',
        description: 'Mieszkanie z nowoczesnymi udogodnieniami i dużym lobby.',
    },
]

export const customerOpinion = [
    {
        name: 'Anna Kowalska',
        description: 'Bardzo polecam to biuro! Profesjonalna obsługa, szybka i skuteczna pomoc w znalezieniu wymarzonego mieszkania.',
        imagePath: human1
    },
    {
        name: 'Jan Nowak',
        description: 'Z ogromną przyjemnością współpracowałem z tą firmą. Znalezienie idealnego lokalu nie było tak proste jak tutaj!',
        imagePath: human3
    },
    {
        name: 'Katarzyna Wiśniewska',
        description: 'Profesjonalizm, elastyczność i pełen entuzjazm do pracy. Gorąco polecam to biuro nieruchomości.',
        imagePath: human2
    },
    {
        name: 'Krzysztof Zielińska',
        description: 'Bardzo polecam to biuro! Profesjonalna obsługa, szybka i skuteczna pomoc w znalezieniu wymarzonego mieszkania.',
        imagePath: human4
    },
]

export const sectionText = {
    title: "Znajdź dom idealny dla Ciebie",
    description: 'Szukasz wymarzonego domu? Bez względu na to, czy pragniesz cichej willi na obrzeżach miasta, przytulnego apartamentu w centrum czy domu z ogrodem dla swojej rodziny - jesteśmy tu, by pomóc Ci znaleźć właściwą nieruchomość.',
    imagePath: house9,
    subpoints: [
        {
            title: 'Nieruchomości',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio minus',
            icon: FaHome,
        },
        {
            title: 'Nasi agenci',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio minus',
            icon: FaUser,
        },
        {
            title: 'Bezpieczeństwo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio minus',
            icon: MdSecurity,
        },
    ],
    statistics: [
        {
            count: 538,
            label: '# kupionychNieruchomości'
        },
        {
            count: 281,
            label: '#sprzedanychNieruchomości'
        },
        {
            count: 293,
            label: '#wszystkieNieruchomości'
        },
        {
            count: 342,
            label: '#wszyscyAgenci'
        },
    ]
}

export const agents = [
    {
        name: 'Krystian Wiśniewki',
        imagePath: human5,
        amployee: 'Agent Nieruchomości',
        number: '123-123-123',
        mail: 'wisniewksi@gmail.com',
        description: "Doświadczony agent specjalizujący się w domach rodzinnych. Z pasją dba o znalezienie idealnego miejsca dla każdej rodziny, oferując swoje wieloletnie doświadczenie w branży."
    },
    {
        name: "Joanna Zielińska",
        imagePath: human6,
        amployee: 'Agent Nieruchomości',
        number: '123-123-123',
        mail: 'zielinska@gmail.com',
        description: "Agentka zajmująca się nieruchomościami nad morzem. Jej obszar ekspertyzy to luksusowe apartamenty i wille z widokiem na plażę, oferujące wyjątkowe doznania."
    },
    {
        name: "Krystian Nowak",
        imagePath: human3,
        amployee: 'Agent Nieruchomości',
        number: '123-123-123',
        mail: 'nowak@gmail.com',
        description: "Specjalista od ekskluzywnych posiadłości i willi. Z ogromnym zaangażowaniem pomaga klientom w znalezieniu wymarzonej nieruchomości, zapewniając kompleksową obsługę."
    }
]

export const exampleDescriptioHouse = {
    descriprion: 'Do sprzedania wyjątkowy, piękny dom wolnostojący na działce 2000m2. Bardzo atrakcyjna lokalizacja dla osób, które poszukują nieruchomości w cichej i spokojnej okolicy z jednoczesnym szybkim dojazdem do centrum miasta. Do centrum Wrocławia dojazd w 30 min, do Oleśnicy 10 min, do drogi ekspresowej S8 - 7 min. Dom jest wyposażony w pompę ciepła, panele fotowoltaiczne oraz ogrzewanie podłogowe. Dodatkowe ocieplenie (styropian 15 cm) sprawia, że dom jest w pełni energooszczędny.',
    groundFloor: [
        'salon z kominkiem i jadalnią: 34,9m2',
        'kuchnia 10,3m2; otwarta na salon,',
        'spiżarnia 3,4m2 do której wchodzi się przez zabudowę kuchenną a że spiżarni do garażu,',
        'przedsionek 5m2 z szafą w zabudowie,',
        'dwie łazienki z toaletą (6,2m2 i 2,8m2),',
        '4 pokoje w tym jeden z bezpośrednim wejściem do ogrodu oraz garderobą i pralnią (powierzchnie pokoi: 12,6m2 , 13,10m2, 12,3m2, 15,4m2),',
        'garaż 32,3 m2, dwustanowiskowy, ogrzewany, w bryle budynku z automatyczną bramą wjazdową (dwa dodatkowe miejsca postojowe przed wyjazdem do garażu).',
        'pomieszczenie gospodarcze 6m2 (znajdę się tu sprzęt do sterowania ciepłem).',
    ],
    firstFloor: [
        'łazienkę z sauną,',
        'bilard, solarium,',
        'przestrzeń kuchenną,',
        'miejsce na kino domowe,',
        'ukrytą przestrzeń do przechowywania.',
    ],
    garden: [
        'duży taras (21,3m2) z meblami ogrodowymi,',
        'murowany grill z wędzarnią i piecem,',
        'zagospodarowany (trawnik i drzewka),',
        'studnia głębinowa do podlewania ogrodu,',
        'balia do domowego morsowania,',
        'panele fotowoltaiczne',
    ],
}