export const navLinks = [
    {
        id: 1,
        label: 'Home',
        path: '/',
        subMenu: []
    },
    {
        id: 2,
        label: 'Nieruchomości',
        path: '/',
        subMenu: [
            {
                label: 'Kup nieruchomość',
                path: '/nieruchomosci-kup',
                subMenu: []
            },
            {
                label: 'Sprzedaj nieruchomość',
                path: '/nieruchomosci-sprzedaj',
                subMenu: []
            },
        ]
    },
    {
        id: 3,
        label: 'Oferta',
        path: '/oferta',
        subMenu: []
    },
    {
        id: 4,
        label: 'O nas',
        path: '/o-nas',
        subMenu: []
    },
    {
        id: 5,
        label: 'Kontakt',
        path: '/kontakt',
        subMenu: []
    },
]