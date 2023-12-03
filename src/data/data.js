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
                path: '/nieruchomosci-kup',
                subMenu: []
            },
            {
                label: 'Sprzedaje',
                path: '/nieruchomosci-sprzedaj',
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