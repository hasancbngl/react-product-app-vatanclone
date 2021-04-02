import React, { Component } from 'react'

export const DataConText = React.createContext();

export default class DataProvider extends Component {
    state = {
        products: [
            {
                "id":"0",
                "title": "XIAOMI REDMI NOTE 9 PRO",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/TeoriV2-107895_medium.jpg",
                "brand": "Xioami",
                "colors": ["red", "black", "white", "gray"],
                "price": 3199,
                "dprice": 2499,
                "cur": "TL",
                "count":1
            },
            {
                "id":"1",
                "title": "HUAWEI MATE 20 LITE 64 GB SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/HUAWEI/thumb/v2-91961_medium.jpg",
                "brand": "Huawei",
                "colors": ["red", "black", "white", "gray"],
                "price": 3199,
                "dprice": 2499,
                "cur": "TL",
                "count":1
            },
            {
                "id":"2",
                "title": "SAMSUNG GALAXY A51 128 GB PEMBE",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/TeoriV2-105718_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 3333,
                "dprice": 2444,
                "cur": "TL",
                "count":1
            },
            {
                "id":"3",
                "title": "iPhone 11 64 GB SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_medium.jpg",
                "brand": "Iphone",
                "colors": ["red", "black", "white", "gray"],
                "price": 7777,
                "dprice": 6999,
                "cur": "TL",
                "count":1
            },
            {
                "id":"4",
                "title": "ASUS X515JF CORE İ5 1035G1",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/118511-anaa_medium.jpg",
                "brand": "Asus",
                "colors": ["red", "black", "white", "gray"],
                "price": 5555,
                "dprice": 4444,
                "cur": "TL",
                "count":1
            },
            {
                "id":"5",
                "title": "SAMSUNG GALAXY NOTE 10 LITE",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/galaxy-note-10-lite-gorseli-106277_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 4876,
                "dprice": 4121,
                "cur": "TL",
                "count":1
            },
            {
                "id":"6",
                "title": "XIAOMI REDMI NOTE 9 PRO",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/TeoriV2-107895_medium.jpg",
                "brand": "Xioami",
                "colors": ["red", "black", "white", "gray"],
                "price": 3199,
                "dprice": 2499,
                "cur": "TL",
                "count":1
            },
            {
                "id":"7",
                "title": "SAMSUNG GALAXY NOTE 10 LITE",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/galaxy-note-10-lite-gorseli-106277_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 4876,
                "dprice": 4121,
                "cur": "TL",
                "count":1
            },
            {
                "id":"8",
                "title": "XIAOMI REDMI NOTE 9 PRO",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/TeoriV2-107895_medium.jpg",
                "brand": "Xioami",
                "colors": ["red", "black", "white", "gray"],
                "price": 3199,
                "dprice": 2499,
                "cur": "TL",
                "count":1
            },
            {
                "id":"9",
                "title": "SAMSUNG GALAXY NOTE 10 LITE",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/galaxy-note-10-lite-gorseli-106277_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 4876,
                "dprice": 4121,
                "cur": "TL",
                "count":1
            },
        ],
        bestSellerProducts: [
            {
                "id":"10",
                "title": "HUAWEI Y6 2019 32 GB AKILLI TELEFON SAFİR MAVİSİ",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/huawei-y6-2019-gorseli-93998_medium.jpg",
                "brand": "Huawei",
                "colors": ["red", "black", "white", "gray"],
                "price": 1888,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"11",
                "title": "SAMSUNG GALAXY A21S 128 GB AKILLI TELEFON SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/118425_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"12",
                "title": "GENERAL MOBİLE GM20 TEK SİM AKILLI TELEFON PARLAK SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/general-mobile/thumb/general-mobile-gm20-gorseli-108983_medium.jpg",
                "brand": "GM",
                "colors": ["red", "black", "white", "gray"],
                "price": 1666,
                "dprice": 1333,
                "cur": "TL",
                "count":1
            },
            {
                "id":"13",
                "title": "ASUS X543UA CORE İ3 6100U",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/114657_medium.jpg",
                "brand": "ASSus",
                "colors": ["red", "black", "white", "gray"],
                "price": 4222,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"14",
                "title": "SAMSUNG GALAXY TAB A7 SM-T500NZAATUR",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/110034_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"15",
                "title": "SAMSUNG GALAXY A21S 128 GB AKILLI TELEFON SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/118425_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"16",
                "title": "Apple Watch Series 6 GPS",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/109346-gorsel-1_medium.jpg",
                "brand": "Apple",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"17",
                "title": "PHILIPS 55PUS7805 55139 CM 4K UHD SMART TV",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/philips-55pus7805-gorseli-108366_medium.jpg",
                "brand": "PHILIPS",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"18",
                "title": "VESTEL 58U9500 58'' 146 CM 4K",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vestel/thumb/TeoriV2-105825-3_medium.jpg",
                "brand": "Vestel",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"19",
                "title": "ASUS 23,8VG249Q TUF GAMING ",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/118425_medium.jpg",
                "brand": "Asus",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"20",
                "title": "HUAWEI Y6 2019 32 GB AKILLI TELEFON SAFİR MAVİSİ",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/huawei-y6-2019-gorseli-93998_medium.jpg",
                "brand": "Huawei",
                "colors": ["red", "black", "white", "gray"],
                "price": 1888,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"21",
                "title": "SAMSUNG GALAXY A21S 128 GB AKILLI TELEFON SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/118425_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"22",
                "title": "GENERAL MOBİLE GM20 TEK SİM AKILLI TELEFON PARLAK SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/general-mobile/thumb/general-mobile-gm20-gorseli-108983_medium.jpg",
                "brand": "GM",
                "colors": ["red", "black", "white", "gray"],
                "price": 1666,
                "dprice": 1333,
                "cur": "TL",
                "count":1
            },
            {
                "id":"23",
                "title": "ASUS X543UA CORE İ3 6100U",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/114657_medium.jpg",
                "brand": "ASSus",
                "colors": ["red", "black", "white", "gray"],
                "price": 4222,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"24",
                "title": "SAMSUNG GALAXY TAB A7 SM-T500NZAATUR",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/110034_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"25",
                "title": "SAMSUNG GALAXY A21S 128 GB AKILLI TELEFON SİYAH",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/118425_medium.jpg",
                "brand": "Samsung",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
            {
                "id":"26",
                "title": "Apple Watch Series 6 GPS",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/109346-gorsel-1_medium.jpg",
                "brand": "Apple",
                "colors": ["red", "black", "white", "gray"],
                "price": 2777,
                "dprice": 1300,
                "cur": "TL",
                "count":1
            },
        ],
        cart: [],
    };

    addToCart = (id, prod) => {
        const {products, cart, bestSellerProducts} = this.state;
        const el = prod ? products : bestSellerProducts;
        const data = el.filter(product => {
            return product.id === id;
        });
        console.log(data);
    };

    render() {
        return (
            <DataConText.Provider value={this.state}>
                {this.props.children}
            </DataConText.Provider>
        )
    }
}