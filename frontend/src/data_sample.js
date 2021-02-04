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
export default {
    products: [
        {
            _id: "1",
            title: "And Then There Was None",
            author: "Agatha Christie",
            description: "",
            image: "/images/And-Then-There-Was-None.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.CRIME],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "2",
            title: "Bạch Dạ Hành",
            author: "Higashino Keigo",
            description: "",
            image: "/images/Bach-Da-Hanh.jpg",
            genre: [BOOK_GENRES.CRIME],
            language: "vi",
            rating: 4.14,
            review: 10,
            price: 12,
            countInStock: 300,
        },
        {
            _id: "3",
            title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
            author: "Nguyễn Nhật Ánh",
            description: "",
            image: "/images/Cho-Toi-Xin-Mot-Ve-Di-Toui-Tho.jpg",
            genre: [BOOK_GENRES.CHILDREN],
            language: "vi",
            rating: 4.55,
            review: 10,
            price: 7.5,
            countInStock: 300,
        },
        {
            _id: "4",
            title: "Diary Of A Wimpy Kid: The Deep End",
            author: "Anthony Tejada",
            description: "",
            image: "/images/d1.jpg",
            genre: [BOOK_GENRES.CHILDREN, BOOK_GENRES.HUMOROUS],
            language: "en",
            rating: 5,
            review: 8,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "5",
            title: "Go Set A Watchman",
            author: "Harper Lee",
            description: "",
            image: "/images/Go-Set-A-Watchman.jpg",
            genre: [BOOK_GENRES.POLITIC],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "6",
            title: "Harry Potter And The Philosopher's Stone",
            author: "J.K Rowling",
            description: "",
            image: "/images/Harry-Potter-P1.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "7",
            title: "Harry Potter And The Chamber Of Secret",
            author: "J.K Rowling",
            description: "",
            image: "/images/Harry-Potter-P2.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "8",
            title: "Harry Potter And The Prison Of Azkaban",
            author: "J.K Rowling",
            description: "",
            image: "/images/Harry-Potter-P3.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "9",
            title: "Harry Potter And The Goblet Of Fire",
            author: "J.K Rowling",
            description: "",
            image: "/images/Harry-Potter-P4.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "10",
            title: "Harry Potter And The Order Of The Phoenix",
            author: "J.K Rowling",
            description: "",
            image: "/images/Harry-Potter-P5.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "11",
            title: "Harry Potter And The Half-Blood Prince",
            author: "J.K Rowling",
            description: "",
            image: "/images/Harry-Potter-P6.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "12",
            title: "Harry Potter And The Deathly Hallows",
            author: "J.K Rowling",
            description: "",
            image: "/images/Harry-Potter-P7.jpg",
            genre: [BOOK_GENRES.FANTASY, BOOK_GENRES.TEENAGE],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "13",
            title: "Sự Cứu Rỗi Của Thánh Nữ",
            author: "Higashino Keigo",
            description: "",
            image: "/images/Su-Cucu-Roi-Cua-Thanh-Nu.jpg",
            genre: [BOOK_GENRES.CRIME],
            language: "vi",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "14",
            title: "The Fountainhead",
            author: "Ayn Rand",
            description: "",
            image: "/images/The-Fountainhead.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.FICTION],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "15",
            title: "The Hobbit",
            author: "J.R.R Tolkien",
            description: "",
            image: "/images/The-Hobbit.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.FANTASY],
            language: "english",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
        {
            _id: "16",
            title: "To Kill A Mocking Bird",
            author: "Harper Lee",
            description: "",
            image: "/images/To-Kill-A-Mocking-Bird.jpg",
            genre: [BOOK_GENRES.CLASSIC, BOOK_GENRES.POLITIC],
            language: "en",
            rating: 4.26,
            review: 10,
            price: 18.26,
            countInStock: 300,
        },
    ],
}