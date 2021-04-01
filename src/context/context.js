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
        ]
    }

    render() {
        return (
            <DataConText.Provider value={this.state.products}>
                {this.props.children}
            </DataConText.Provider>
        )
    }
}