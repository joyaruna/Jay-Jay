import { icons, images } from "../constants";

export const banners = [
    {
        id: 1,
        discount: '40%',
        discountName: "Today's Special",
        bottomTitle: 'Get a discount for every orde!',
        bottomSubtitle: 'Only valid for today!'
    },
    {
        id: 2,
        discount: '50%',
        discountName: "Weekend Sale",
        bottomTitle: 'Special discount for weekend orderings!',
        bottomSubtitle: 'This weekend only!'
    },
    {
        id: 3,
        discount: '30%',
        discountName: "Limited Time Offer",
        bottomTitle: 'Hurry up! Limited time offer!',
        bottomSubtitle: 'Valid until supplies last!'
    }
];

export const categories = [
    {
        id: "0",
        name: "All",
        icon: icons.welcomeLogo,
        onPress: null
    },
    {
        id: "1",
        name: "Boys",
        icon: icons.boy,
        onPress: "categorysofa"
    },
    {
        id: "2",
        name: "Girls",
        icon: icons.girl,
        iconColor: "rgba(255, 152, 31, 1)",
        backgroundColor: "rgba(255, 152, 31, .12)",
        onPress: "categorychair"
    },
    {
        id: "3",
        name: "Shoes",
        icon: icons.shoes,
        iconColor: "rgba(26, 150, 240, 1)",
        backgroundColor: "rgba(26, 150, 240,.12)",
        onPress: "categorytable"
    },
    {
        id: "4",
        name: "Clothes",
        icon: icons.clothes,
        iconColor: "rgba(255, 192, 45, 1)",
        backgroundColor: "rgba(255, 192, 45,.12)",
        onPress: "categorykitchen"
    },
    {
        id: "5",
        name: "Accessories",
        icon: icons.accesories,
        iconColor: "rgba(245, 67, 54, 1)",
        backgroundColor: "rgba(245, 67, 54,.12)",
        onPress: "categorylamp"
    },
];

export const popularProducts = [
    {
        id: "1",
        name: "Designer Baby Girl Dress",
        image: images.cloth1,
        price: "25.00",
        numReviews: 240,
        rating: 4.5,
        quantity: 15000,
        numSolds: 6321,
        categoryId: "2",
        navigate: "vasedetails"
    },
    {
        id: "2",
        name: "Pretty Fur Dress",
        image: images.cloth2,
        price: "485.00",
        numReviews: 143,
        rating: 4.5,
        quantity: 1300,
        numSolds: 9373,
        categoryId: "2",
        navigate: "lampdetails"
    },
    {
        id: "3",
        name: "Floral White Dress",
        image: images.cloth3,
        price: "90.00",
        numReviews: 430,
        rating: 4.3,
        quantity: 1300,
        numSolds: 426,
        categoryId: "2",
        navigate: "cupboarddetails"
    },
    {
        id: "4",
        name: "Denim Romper",
        image: images.cloth4,
        price: "120.00",
        numReviews: 156,
        rating: 4.4,
        quantity: 8500,
        numSolds: 5621,
        categoryId: "1",
        navigate: "kitchendetails"
    },
    {
        id: "5",
        name: "Baby Boy Casual Set",
        image: images.cloth5,
        price: "45.00",
        numReviews: 180,
        rating: 4.3,
        quantity: 10000,
        numSolds: 4236,
        categoryId: "1",
        navigate: "lampdetails"
    },
    {
        id: "6",
        name: "Baby Girl Pink Dress",
        image: images.cloth6,
        price: "150.00",
        numReviews: 205,
        rating: 4.8,
        quantity: 300,
        numSolds: 1689,
        categoryId: "2",
        navigate: "chairdetails"
    },
    {
        id: "7",
        name: "Baby Girl Red Romper",
        image: images.cloth7,
        price: "132.00",
        numReviews: 300,
        rating: 4.9,
        quantity: 8500,
        numSolds: 459,
        categoryId: "2",
        navigate: "tabledetails"
    },
    {
        id: "8",
        name: "Baby Girl Denim Set",
        image: images.cloth8,
        price: "155.00",
        numReviews: 210,
        rating: 4.9,
        quantity: 60000,
        numSolds: 1200,
        categoryId: "2",
        navigate: "sofadetails"
    },
    {
        id: "9",
        name: "Baby Boy Casual Piece Set",
        image: images.cloth9,
        price: "165.00",
        numReviews: 120,
        rating: 4.9,
        quantity: 50003,
        numSolds: 1230,
        categoryId: "1",
        navigate: "chairdetails"
    },
    {
        id: "10",
        name: "Baby Boy Blue Romper",
        image: images.cloth10,
        price: "450.00",
        numReviews: 180,
        rating: 4.8,
        quantity: 35000,
        numSolds: 987,
        categoryId: "1",
        navigate: "tabledetails"
    },
    {
        id: "11",
        name: "Brown Dress",
        image: images.cloth11,
        price: "25.00",
        numReviews: 98,
        rating: 4.2,
        quantity: 500,
        numSolds: 562,
        categoryId: "2",
        navigate: "kitchendetails"
    },
    {
        id: "12",
        name: "Girl Brown Romper",
        image: images.cloth12,
        price: "75.00",
        numReviews: 150,
        rating: 4.5,
        quantity: 28000,
        numSolds: 632,
        categoryId: "2",
        navigate: "lampdetails"
    },
    {
        id: "13",
        name: "Denim Dress",
        image: images.cloth13,
        price: "250.00",
        numReviews: 160,
        rating: 4.5,
        quantity: 4200,
        numSolds: 752,
        categoryId: "2",
        navigate: "tabledetails"
    },
    {
        id: "14",
        name: "Boy Sweat Set",
        image: images.cloth14,
        price: "320.00",
        numReviews: 112,
        rating: 4.8,
        quantity: 4200,
        numSolds: 3240,
        categoryId: "1",
        navigate: "sofadetails"
    },
    {
        id: "15",
        name: "Boy Casual Wear",
        image: images.cloth15,
        price: "430.00",
        numReviews: 210,
        rating: 4.7,
        quantity: 4200,
        numSolds: 1092,
        categoryId: "1",
        navigate: "chairdetails"
    },
    {
        id: "16",
        name: "Boy Solid Wear",
        image: images.cloth16,
        price: "430.00",
        numReviews: 210,
        rating: 4.7,
        quantity: 4200,
        numSolds: 1092,
        categoryId: "1",
        navigate: "chairdetails"
    },
    {
        id: "17",
        name: "Boy Brown Romper",
        image: images.cloth17,
        price: "430.00",
        numReviews: 210,
        rating: 4.7,
        quantity: 4200,
        numSolds: 1092,
        categoryId: "1",
        navigate: "chairdetails"
    },
    {
        id: "18",
        name: "Boy Play Wear",
        image: images.cloth18,
        price: "430.00",
        numReviews: 210,
        rating: 4.7,
        quantity: 4200,
        numSolds: 1092,
        categoryId: "1",
        navigate: "chairdetails"
    },
]