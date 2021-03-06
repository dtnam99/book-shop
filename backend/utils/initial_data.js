const AC_AUTHOR = "Agatha Christie";
const HK_AUTHOR = "Higashino Keigo";
const NNA_AUTHOR = "Nguyễn Nhật Ánh";
const AT_AUTHOR = "Anthony Tejada";
const HL_AUTHOR = "Harper Lee";
const JKR_AUTHOR = "J.K Rowling";
const AR_AUTHOR = "Ayn Rand";
const JRRT_AUTHOR = "J.R.R Tolkien";

const BESTSELLERS = "bestsellers";
const RECOMMENDEDS = "recommendeds";

const UserEnumRole = Object.freeze({
    CLIENT: "client", 
    ADMIN: "admin", 
    SUPER_ADMIN: "super_admin"
})

const OrderEnumStatus = Object.freeze({
    PROCESSING: 'processing', 
    ACCEPTED: 'accepted', 
    SHIPPING: 'shipping', 
    SHIPPED: 'shipped', 
    DELIVERED: 'delivered'
})

const OrderEnumPaymentMethod = Object.freeze({
    CASH: 'cash', 
    CREDIT: 'credit',
    PAYPAL: 'paypal',
})

const ProductEnumOrigin = Object.freeze({
    VIETNAMESE: 'vietnamese', 
    CHINESE: 'chinese', 
    JAPANESE: 'japanese', 
    ASIAN: 'asian',          
    AMERICAN: 'american', 
    ENGLISH: 'english', 
    RUSSIAN: 'russian', 
    WESTERN: 'western', 
    OTHER: 'other',
});
const ProductEnumLanguage = Object.freeze({
    VIETNAMESE: 'vietnamese', 
    CHINESE: 'chinese', 
    JAPANESE: 'japanese',   
    ENGLISH: 'english', 
});
const ProductEnumGenre = Object.freeze({
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
});
const ProductEnumCurrency = Object.freeze({
    USD: "usd",
    VND: "vnd",
});

const initial_data = {
    UserEnumRole:[
        { _id: UserEnumRole.CLIENT },
        { _id: UserEnumRole.ADMIN },
        { _id: UserEnumRole.SUPER_ADMIN },
    ],
    ProductEnumOrigin:[
        { _id: ProductEnumOrigin.VIETNAMESE },
        { _id: ProductEnumOrigin.CHINESE },
        { _id: ProductEnumOrigin.JAPANESE },
        { _id: ProductEnumOrigin.ASIAN },
        { _id: ProductEnumOrigin.AMERICAN },
        { _id: ProductEnumOrigin.ENGLISH },
        { _id: ProductEnumOrigin.RUSSIAN },
        { _id: ProductEnumOrigin.WESTERN },
        { _id: ProductEnumOrigin.OTHER },
    ],
    ProductEnumGenre:[
        { _id: ProductEnumGenre.CRIME },
        { _id: ProductEnumGenre.MYSTERY },
        { _id: ProductEnumGenre.CLASSIC },
        { _id: ProductEnumGenre.SCIENCE },
        { _id: ProductEnumGenre.THRILLER },
        { _id: ProductEnumGenre.FICTION },
        { _id: ProductEnumGenre.HISTORICAL },
        { _id: ProductEnumGenre.COMTEMPORARY },
        { _id: ProductEnumGenre.POETRY },
        { _id: ProductEnumGenre.PLAY },
        { _id: ProductEnumGenre.TEENAGE },
        { _id: ProductEnumGenre.CHILDREN },
        { _id: ProductEnumGenre.COMIC },
        { _id: ProductEnumGenre.FANTASY },
        { _id: ProductEnumGenre.HUMOROUS },
        { _id: ProductEnumGenre.POLITIC },
    ],
    // genres:[
    //     { name: ProductEnumGenre.CRIME },
    //     { name: ProductEnumGenre.MYSTERY },
    //     { name: ProductEnumGenre.CLASSIC },
    //     { name: ProductEnumGenre.SCIENCE },
    //     { name: ProductEnumGenre.THRILLER },
    //     { name: ProductEnumGenre.FICTION },
    //     { name: ProductEnumGenre.HISTORICAL },
    //     { name: ProductEnumGenre.COMTEMPORARY },
    //     { name: ProductEnumGenre.POETRY },
    //     { name: ProductEnumGenre.PLAY },
    //     { name: ProductEnumGenre.TEENAGE },
    //     { name: ProductEnumGenre.CHILDREN },
    //     { name: ProductEnumGenre.COMIC },
    //     { name: ProductEnumGenre.FANTASY },
    //     { name: ProductEnumGenre.HUMOROUS },
    //     { name: ProductEnumGenre.POLITIC },
    // ],
    ProductEnumLanguage: [
        { _id: ProductEnumOrigin.VIETNAMESE },
        { _id: ProductEnumOrigin.CHINESE },
        { _id: ProductEnumOrigin.JAPANESE },
        { _id: ProductEnumOrigin.ENGLISH },
    ],
    ProductEnumCurrency: [
        { _id: ProductEnumCurrency.USD },
        { _id: ProductEnumCurrency.VND },
    ],
    OrderEnumStatus: [
        { _id: OrderEnumStatus.ACCEPTED },
        { _id: OrderEnumStatus.PROCESSING },
        { _id: OrderEnumStatus.SHIPPING },
        { _id: OrderEnumStatus.SHIPPED },
        { _id: OrderEnumStatus.DELIVERED },
    ],
    OrderEnumPaymentMethod: [
        { _id: OrderEnumPaymentMethod.CASH },
        { _id: OrderEnumPaymentMethod.CREDIT },
        { _id: OrderEnumPaymentMethod.PAYPAL },
    ],
    authors: [
        { name: AC_AUTHOR, },
        { name: HK_AUTHOR, },
        { name: NNA_AUTHOR, },
        { name: AT_AUTHOR, },
        { name: HL_AUTHOR, },
        { name: JKR_AUTHOR, },
        { name: AR_AUTHOR, },
        { name: JRRT_AUTHOR, },
    ],
    productsInStore: [
        {
            title: "And Then There Was None",
            author: AC_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/And-Then-There-Was-None_bvd11e.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.CLASSIC, ProductEnumGenre.CRIME],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Bạch Dạ Hành",
            author: HK_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/Bach-Da-Hanh_nmmbwx.jpg",
            origin: ProductEnumOrigin.JAPANESE,
            language: ProductEnumLanguage.VIETNAMESE,
            genres: [ProductEnumGenre.CRIME],
            categories: [BESTSELLERS],
            currency: ProductEnumCurrency.USD,
            price: 12,
            inStock: 300,
        },
        {
            title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
            author: NNA_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553888/atticus-literature/dev/Cho-Toi-Xin-Mot-Ve-Di-Toui-Tho_m4yru5.jpg",     
            origin: ProductEnumOrigin.VIETNAMESE,
            language: ProductEnumLanguage.VIETNAMESE,
            genres: [ProductEnumGenre.CHILDREN],
            categories: [BESTSELLERS],
            currency: ProductEnumCurrency.USD,
            price: 7.5,
            inStock: 300,
        },
        {
            title: "Diary Of A Wimpy Kid: The Deep End",
            author: AT_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/DWK-The-Deep-End_znhfxr.jpg",
            origin: ProductEnumOrigin.AMERICAN,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.CHILDREN, ProductEnumGenre.HUMOROUS],
            categories: [BESTSELLERS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Go Set A Watchman",
            author: HL_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/Go-Set-A-Watchman_idipcx.jpg",
            origin: ProductEnumOrigin.AMERICAN,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.POLITIC],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Harry Potter And The Philosopher's Stone",
            author: JKR_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P1_ujlysr.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.FANTASY, ProductEnumGenre.TEENAGE],
            categories: [RECOMMENDEDS, BESTSELLERS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Harry Potter And The Chamber Of Secret",
            author: JKR_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P2_d1eaea.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.FANTASY, ProductEnumGenre.TEENAGE],
            categories: [RECOMMENDEDS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Harry Potter And The Prison Of Azkaban",
            author: JKR_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P3_iz0jgs.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.FANTASY, ProductEnumGenre.TEENAGE],
            categories: [RECOMMENDEDS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Harry Potter And The Goblet Of Fire",
            author: JKR_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P4_g0taql.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.FANTASY, ProductEnumGenre.TEENAGE],
            categories: [RECOMMENDEDS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Harry Potter And The Order Of The Phoenix",
            author: JKR_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P5_npllbe.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.FANTASY, ProductEnumGenre.TEENAGE],
            categories: [RECOMMENDEDS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Harry Potter And The Half-Blood Prince",
            author: JKR_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P6-2_oxjz4o.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.FANTASY, ProductEnumGenre.TEENAGE],
            categories: [RECOMMENDEDS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Harry Potter And The Deathly Hallows",
            author: JKR_AUTHOR,
            description: `Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.

            The protective charm that has kept him safe until now is broken. But the Dark Lord is breathing fear into everything he loves. And he knows he can’t keep hiding.
            
            To stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them.
            
            He will have to face his enemy in one final battle.`,
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P7_uen2jb.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.FANTASY, ProductEnumGenre.TEENAGE],
            categories: [RECOMMENDEDS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "Sự Cứu Rỗi Của Thánh Nữ",
            author: HK_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Su-Cuu-Roi-Cua-Thanh-Nu_udtdlg.jpg",
            origin: ProductEnumOrigin.JAPANESE,
            language: ProductEnumLanguage.VIETNAMESE,
            genres: [ProductEnumGenre.CRIME],
            categories: [BESTSELLERS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "The Fountainhead",
            author: AR_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/The-Fountainhead_c0euxz.jpg",
            origin: ProductEnumOrigin.AMERICAN,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.CLASSIC, ProductEnumGenre.FICTION],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "The Hobbit",
            author: JRRT_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/The-Hobbit_oed7ax.jpg",
            origin: ProductEnumOrigin.ENGLISH,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.CLASSIC, ProductEnumGenre.FANTASY],
            categories: [RECOMMENDEDS, BESTSELLERS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
        {
            title: "To Kill A Mocking Bird",
            author: HL_AUTHOR,
            description: "",
            image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/To-Kill-A-Mocking-Bird-2_b49cmc.jpg",
            origin: ProductEnumOrigin.AMERICAN,
            language: ProductEnumLanguage.ENGLISH,
            genres: [ProductEnumGenre.CLASSIC, ProductEnumGenre.POLITIC],
            categories: [BESTSELLERS],
            currency: ProductEnumCurrency.USD,
            price: 18.26,
            inStock: 300,
        },
    ],
}

export { initial_data };