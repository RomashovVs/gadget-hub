db = db.getSiblingDB('gadget_hub');

db.users.insert({login: 'test', password: "123456789"})

db.goods.insertMany([
    {
        "id": "1",
        "name": "Внешний аккумулятор 10000mAh, белый",
        "img_src": "/images/white_power_bank.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "2",
        "name": "Внешний аккумулятор 10000mAh, черный",
        "img_src": "/images/black_power_bank.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "3",
        "name": "Bluetooth гарнитура, черный",
        "img_src": "/images/black_headphones.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "4",
        "name": "Bluetooth гарнитура, серый",
        "img_src": "/images/grey_headphones.svg",
        "price": "1",
        "rating": "5.0"
    },
    {
        "id": "5",
        "name": "Беспроводная акустика",
        "img_src": "/images/wireless_acoustics.svg",
        "price": "10",
        "rating": "5.0"
    },
    {
        "id": "6",
        "name": "Смартфон 256 ГБ фиолетовый",
        "img_src": "/images/smartphone_purple.svg",
        "new_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "7",
        "name": "Смартфон 256 ГБ черный",
        "img_src": "/images/smartphone_black.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "8",
        "name": "Смартфон 256 ГБ белый",
        "img_src": "/images/smartphone_white.svg",
        "new_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "9",
        "name": "Часы с GPS трекером черные",
        "img_src": "/images/gps_watch_black.svg",
        "new_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "10",
        "name": "Часы с GPS трекером синие",
        "img_src": "/images/gps_watch_blue.svg",
        "new_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "11",
        "name": "Фитнес-браслет ASK-B19 зеленый",
        "img_src": "/images/fitness_bracelet_green.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "12",
        "name": "Фитнес-браслет ASK-B19 черный",
        "img_src": "/images/fitness_bracelet_black.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "13",
        "name": "Наушники белые",
        "img_src": "/images/huawei_white.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "14",
        "name": "Наушники синие",
        "img_src": "/images/huawei_blue.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "15",
        "name": "Наушники черные",
        "img_src": "/images/huawei_black.svg",
        "price": "50",
        "rating": "5.0"
    },
    {
        "id": "16",
        "name": "Видеокамера для блогера",
        "img_src": "/images/videocamera.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "17",
        "name": "Микрофон с разъемом Type-C",
        "img_src": "/images/microphone.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "18",
        "name": "Чехол-подвеска силиконовый с карабином, красный",
        "img_src": "/images/silicone_red_case.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "19",
        "name": "Чехол-подвеска силиконовый с карабином, белый",
        "img_src": "/images/silicone_white_case.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "20",
        "name": "Чехол-подвеска силиконовый с карабином, серый",
        "img_src": "/images/silicone_grey_case.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "21",
        "name": "Чехол-подвеска силиконовый с карабином, желтый",
        "img_src": "/images/silicone_yellow_case.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "22",
        "name": "Беспроводная акустика, серый",
        "img_src": "/images/wireless_acoustics_grey.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "23",
        "name": "Беспроводная акустика, голубой",
        "img_src": "/images/wireless_acoustics_blue.svg",
        "hit_label": true,
        "new_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "24",
        "name": "Беспроводная акустика, бежевый",
        "img_src": "/images/wireless_acoustics_beige.svg",
        "hit_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "25",
        "name": "Умная лампа",
        "img_src": "/images/smart_lamp.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "26",
        "name": "Аппаратный ключ аутентификации NFC",
        "img_src": "/images/NFC_hardware_authentication_key.svg",
        "hit_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "27",
        "name": "Аппаратный криптокошелек",
        "img_src": "/images/hardware_crypto_wallet.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "28",
        "name": "Очки виртуальной реальности, смартфоны до 6,5",
        "img_src": "/images/virtual_reality_glasses.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "29",
        "name": "Шлем виртуальной реальности 128GB",
        "img_src": "/images/virtual_reality_helmet.svg",
        "hit_label": true,
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "30",
        "name": "Умный чемодан-скутер серый",
        "img_src": "/images/smart_suitcase_scooter_grey.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "31",
        "name": "Умный чемодан-скутер черный",
        "img_src": "/images/smart_suitcase_scooter_black.svg",
        "price": "1000",
        "rating": "5.0"
    },
    {
        "id": "32",
        "name": "Дыхательный тренажер",
        "img_src": "/images/breathing_simulator.svg",
        "price": "1000",
        "rating": "5.0"
    }
]);

db.orders.insertMany([
    {number: '567800', at: new Date(), countDevices: 1, totalCost: 6990},
    {number: '436789', at: new Date(), countDevices: 4, totalCost: 54378},
    {number: '405674', at: new Date(), countDevices: 2, totalCost: 1300},
]);