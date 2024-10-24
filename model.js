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
        },
        selectDay: {
            movieId: null,
            day: null,
            movieLanguage: '',
            selectTime: null,
            dateSpecialFormat: [
                { weekday: '', mounth: '', day: '' },
            ]
            
        },
        orderpage: {
            movieId: null,
            ticketsAmount: null,
            selectSittingPlace: null,
            email: '',
            paymentMethod: '',
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
                ' english', ' norwegian',
            ],
            genre: "Crime, Drama",
            year: 2010,
            director: "Francis Ford Coppola",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
            hall: 1,
            movieShowTime: null,
        },
        {
            id: 2,
            title: "The Godfather",
            movieLanguage: [   
                 ' german', ' norwegian',
            ],
            year: 1972,
            genre: "Crime, Drama",
            director: "Francis Ford Coppola",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            hall: 1,
            movieShowTime: null,
        },
        {
            id: 3,
            title: "Pulp Fiction",
            movieLanguage: [   
                ' english', ' swedish', 
            ],
            genre: "Crime, Thriller",
            director: "Quentin Tarantino",
            year: 1994,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
            hall: 1,
            movieShowTime: null,
        },
        {
            id: 4,
            title: "The Shawshank Redemption",
            movieLanguage: [   
                ' english', ' swedish', ' french'
            ],
            genre: "Drama",
            director: "Frank Darabont",
            year: 1994,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
            hall: 1,
            movieShowTime: null,
        },
        {
            id: 5,
            title: "Interstellar",
            movieLanguage: [   
                ' english', ' swedish', ' german', 
            ],
            genre: "Sci-Fi, Drama",
            director: "Christopher Nolan",
            year: 2014,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            hall: 1,
            movieShowTime: null,
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
            selectSittingPlace: 'rad 1, plass 9',
            email: '',
            paymentMethod: 'vipps',
        },
    ],
    movieShowTime: [
        '10:00', '12:00', '14:00', '16:00', 
    ],
    hall1: [
        {
          row1: 'seat1',
          row1: 'seat2',
          row1: 'seat3',
          row1: 'seat4',
          row1: 'seat5',
          row1: 'seat6',
          row1: 'seat7',
          row1: 'seat8',
          row2: 'seat1',
          row2: 'seat2',
          row2: 'seat3',
          row2: 'seat4',
          row2: 'seat5',
          row2: 'seat6',
          row2: 'seat7',
          row2: 'seat8',
          row3: 'seat1',
          row3: 'seat2',
          row3: 'seat3',
          row3: 'seat4',
          row3: 'seat5',
          row3: 'seat6',
          row3: 'seat7',
          row3: 'seat8',
          row4: 'seat1',
          row4: 'seat2',
          row4: 'seat3',
          row4: 'seat4',
          row4: 'seat5',
          row4: 'seat6',
          row4: 'seat7',
          row4: 'seat8',
          
       }
   ],
    
};