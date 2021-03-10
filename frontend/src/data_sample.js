const BOOK_GENRES = {
    CRIME: "crime", 
    MYSTERY: "mystery",
    CLASSIC: "classic",
    SCIENCE: "science",
    THRILLER: "thriller",
    FICTION: "fiction",
    HISTORICAL: "historical",
    COMTEMPORARY: "contemporary",
    POETRY: "poetry",
    PLAY: "play",
    TEENAGE: "teenage",
    CHILDREN: "children",
    COMIC: "comic",
    FANTASY: "fantasy",
    HUMOROUS: "humorous",
    POLITIC: "politic",
}
const data_sample = {
    products: [
        {
            _id: "1",
            title: "And Then There Was None",
            author: "Agatha Christie",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/And-Then-There-Was-None_bvd11e.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.CRIME],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "2",
            title: "Bạch Dạ Hành",
            author: "Higashino Keigo",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/Bach-Da-Hanh_nmmbwx.jpg",
            genre: [BOOK_GENRES.CRIME],
            language: "vi",
            rating: 4.14,
            review: 10,
            price: 12,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "3",
            title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
            author: "Nguyễn Nhật Ánh",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553888/atticus-literature/dev/Cho-Toi-Xin-Mot-Ve-Di-Toui-Tho_m4yru5.jpg",
            genre: [BOOK_GENRES.CHILDREN],
            language: "vi",
            rating: 4.55,
            review: 10,
            price: 7.5,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "4",
            title: "Diary Of A Wimpy Kid: The Deep End",
            author: "Anthony Tejada",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/DWK-The-Deep-End_znhfxr.jpg",
            genre: [BOOK_GENRES.CHILDREN, BOOK_GENRES.HUMOROUS],
            language: "en",
            rating: 5,
            review: 8,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "5",
            title: "Go Set A Watchman",
            author: "Harper Lee",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/Go-Set-A-Watchman_idipcx.jpg",
            genre: [BOOK_GENRES.POLITIC],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "6",
            title: "Harry Potter And The Philosopher's Stone",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P1_ujlysr.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "7",
            title: "Harry Potter And The Chamber Of Secret",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P2_d1eaea.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "8",
            title: "Harry Potter And The Prison Of Azkaban",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P3_iz0jgs.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "9",
            title: "Harry Potter And The Goblet Of Fire",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P4_g0taql.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "10",
            title: "Harry Potter And The Order Of The Phoenix",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P5_npllbe.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "11",
            title: "Harry Potter And The Half-Blood Prince",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P6-2_oxjz4o.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "12",
            title: "Harry Potter And The Deathly Hallows",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P7_uen2jb.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "13",
            title: "Sự Cứu Rỗi Của Thánh Nữ",
            author: "Higashino Keigo",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Su-Cuu-Roi-Cua-Thanh-Nu_udtdlg.jpg",
            genre: [BOOK_GENRES.CRIME],
            language: "vi",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "14",
            title: "The Fountainhead",
            author: "Ayn Rand",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/The-Fountainhead_c0euxz.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.FICTION],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "15",
            title: "The Hobbit",
            author: "J.R.R Tolkien",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/The-Hobbit_oed7ax.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.FANTASY],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "16",
            title: "To Kill A Mocking Bird",
            author: "Harper Lee",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/To-Kill-A-Mocking-Bird-2_b49cmc.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.POLITIC],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
    ],
    bestsellers: [
        {
            _id: "1",
            title: "And Then There Was None",
            author: "Agatha Christie",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/And-Then-There-Was-None_bvd11e.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.CRIME],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "2",
            title: "Bạch Dạ Hành",
            author: "Higashino Keigo",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/Bach-Da-Hanh_nmmbwx.jpg",
            genre: [BOOK_GENRES.CRIME],
            language: "vi",
            rating: 4.14,
            review: 10,
            price: 12,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "3",
            title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
            author: "Nguyễn Nhật Ánh",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553888/atticus-literature/dev/Cho-Toi-Xin-Mot-Ve-Di-Toui-Tho_m4yru5.jpg",
            genre: [BOOK_GENRES.CHILDREN],
            language: "vi",
            rating: 4.55,
            review: 10,
            price: 7.5,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "4",
            title: "Diary Of A Wimpy Kid: The Deep End",
            author: "Anthony Tejada",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/DWK-The-Deep-End_znhfxr.jpg",
            genre: [BOOK_GENRES.CHILDREN, BOOK_GENRES.HUMOROUS],
            language: "en",
            rating: 5,
            review: 8,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "5",
            title: "Go Set A Watchman",
            author: "Harper Lee",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/Go-Set-A-Watchman_idipcx.jpg",
            genre: [BOOK_GENRES.POLITIC],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
    ],
    recommendeds: [
        {
            _id: "6",
            title: "Harry Potter And The Philosopher's Stone",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P1_ujlysr.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "7",
            title: "Harry Potter And The Chamber Of Secret",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P2_d1eaea.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "8",
            title: "Harry Potter And The Prison Of Azkaban",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P3_iz0jgs.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "9",
            title: "Harry Potter And The Goblet Of Fire",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P4_g0taql.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "10",
            title: "Harry Potter And The Order Of The Phoenix",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P5_npllbe.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "11",
            title: "Harry Potter And The Half-Blood Prince",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P6-2_oxjz4o.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
        {
            _id: "12",
            title: "Harry Potter And The Deathly Hallows",
            author: "J.K Rowling",
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P7_uen2jb.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
        },
    ],
    viewingProduct: {
        _id: "12",
            title: "Harry Potter And The Deathly Hallows",
            author: "J.K Rowling",
            description: `Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.

            The protective charm that has kept him safe until now is broken. But the Dark Lord is breathing fear into everything he loves. And he knows he can’t keep hiding.
            
            To stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them.
            
            He will have to face his enemy in one final battle.`,
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P7_uen2jb.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            currency: 'usd',
            countInStock: 300,
    }
}

export { data_sample, BOOK_GENRES };