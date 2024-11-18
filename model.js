const model = {
    // 1: tilstanden selve applikasjonen er i
    app: {
        currentPage: 'search', // selectDate, orderPage, paymentPage
    },

    // 2: inputfelter til hver side
    inputs: {
        search: {
            text: '',
            movieId: null,
            searchMode: false,
        },
        selectDay: {
            movieId: null,
            day: null,
            movieLanguage: '',
            selectTime: null,
            dateSpecialFormat: [
                { weekday: '', mounth: '', day: '' },
            ],
            selectedHall: null,

        },
        orderpage: {
            movieId: null,
            ticketsAmount: 2,
            totalPrice: null,
            selectSeats: [],
        },
        paymentPage: {
            secretCode: null,
            bankCardDetails: null,
            cardHolderName: '',
            expirationDate: null,
            cardHolderEmail: '',
        }
    },

    // 3: felles data
    movies: [
        {
            id: 1,
            title: "Inception",
            movieLanguage: [
                'english', 'norwegian',
            ],
            genre: "Crime, Drama",
            year: 2010,
            director: "Francis Ford Coppola",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
            halls: [
                {
                    hall: 1,
                    showtimes: [
                        {
                            movieShowTime: '8:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'english',
                            seats: [
                                { row: 1, seat: 1, occupied: true, selected: false },
                                { row: 1, seat: 2, occupied: true, selected: false },
                                { row: 1, seat: 3, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '18:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'norwegian',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]
                },
                {
                    hall: 2,
                    showtimes: [
                        {
                            movieShowTime: '16:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'english',
                            seats: [
                                { row: 1, seat: 3, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '20:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'norwegian',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]

                },
            ],
        },
        {
            id: 2,
            title: "The Godfather",
            movieLanguage: [
                'german', 'norwegian',
            ],
            year: 1972,
            genre: "Crime, Drama",
            director: "Francis Ford Coppola",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            hall: 1,
            movieShowTime: ['10:00', '12:00'],
            halls: [
                {
                    hall: 1,
                    showtimes: [
                        {
                            movieShowTime: '10:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'german',
                            seats: [
                                { row: 1, seat: 1, occupied: true, selected: false },
                                { row: 1, seat: 2, occupied: true, selected: false },
                                { row: 1, seat: 5, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '12:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'norwegian',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]
                },
                {
                    hall: 2,
                    showtimes: [
                        {
                            movieShowTime: '18:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'german',
                            seats: [
                                { row: 1, seat: 3, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '23:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'german',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]

                },
            ],
        },
        {
            id: 3,
            title: "Pulp Fiction",
            movieLanguage: [
                'english', 'swedish',
            ],
            genre: "Crime, Thriller",
            director: "Quentin Tarantino",
            year: 1994,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
            hall: 1,
            movieShowTime: ['14:00', '16:00'],
            halls: [
                {
                    hall: 1,
                    showtimes: [
                        {
                            movieShowTime: '14:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'english',
                            seats: [
                                { row: 4, seat: 1, occupied: true, selected: false },
                                { row: 1, seat: 6, occupied: true, selected: false },
                                { row: 1, seat: 7, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '16:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'swedish',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]
                },
                {
                    hall: 2,
                    showtimes: [
                        {
                            movieShowTime: '12:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'english',
                            seats: [
                                { row: 1, seat: 3, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '21:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'swedish',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]

                },
            ],
        },
        {
            id: 4,
            title: "The Shawshank Redemption",
            movieLanguage: [
                'english', 'swedish', 'french'
            ],
            genre: "Drama",
            director: "Frank Darabont",
            year: 1994,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
            hall: 1,
            movieShowTime: ['20:00'],
            halls: [
                {
                    hall: 1,
                    showtimes: [
                        {
                            movieShowTime: '20:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'norwegian',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]
                },
                {
                    hall: 2,
                    showtimes: [
                        {
                            movieShowTime: '10:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'english',
                            seats: [
                                { row: 1, seat: 3, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '12:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'french',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]

                },
            ],
        },
        {
            id: 5,
            title: "Interstellar",
            movieLanguage: [
                'english', 'swedish',
            ],
            genre: "Sci-Fi, Drama",
            director: "Christopher Nolan",
            year: 2014,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            hall: 1,
            movieShowTime: ['22:00'],
            halls: [
                {
                    hall: 1,
                    showtimes: [
                        {
                            movieShowTime: '22:00',
                            rows: 4,
                            seatsPerRow: 8,
                            language: 'english',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]
                },
                {
                    hall: 2,
                    showtimes: [
                        {
                            movieShowTime: '08:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'english',
                            seats: [
                                { row: 1, seat: 3, occupied: true, selected: false },
                            ]
                        },
                        {
                            movieShowTime: '20:00',
                            rows: 7,
                            seatsPerRow: 12,
                            language: 'norwegian',
                            seats: [
                                { row: 2, seat: 3, occupied: true, selected: false },
                                { row: 2, seat: 8, occupied: true, selected: false },
                                { row: 3, seat: 5, occupied: true, selected: false },
                            ]
                        }
                    ]

                },
            ],
        }
    ],
    orderInfo: [
        {
            movieId: null,
            title: "",
            imageUrl: '',
            day: '',
            movieLanguage: '',
            selectTime: '',
            ticketsAmount: 1,
            selectSittingPlace: '',
            email: '',
            paymentMethod: 'vipps',
        },
    ],

}