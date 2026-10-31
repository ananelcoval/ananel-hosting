const ORDERS_DB = {
    "counters": {
        "sole": 4,
        "extra": 0
    },
    "orders": [
        {
            "id": "S0001",
            "store": "sole",
            "date": "2026-06-07",
            "status": "delivered",
            "senderType": "person",
            "sender": "P0001",
            "recipient": "P0002",
            "delivery": "hogwarts",
            "items": [
                {
                    "collection": "architecture",
                    "section": null,
                    "model": "03-astronomy-tower.png",
                    "variant": null,
                    "quantity": 1,
                    "price": 19
                }
            ],
            "total": 19,
            "cardRequired": true,
            "cardText": "Для неожиданных официальных встреч под звёздным небом"
        },
        {
            "id": "S0002",
            "store": "sole",
            "date": "2026-06-08",
            "status": "delivered",
            "senderType": "person",
            "sender": "P0003",
            "recipient": "P0005",
            "delivery": "hogwarts",
            "items": [
                {
                    "collection": "hufflepuff-day",
                    "section": null,
                    "model": "05-cowboy.png",
                    "variant": null,
                    "quantity": 1,
                    "price": 32
                }
            ],
            "total": 32,
            "cardRequired": true,
            "cardText": "Я борюсь с желанием подарить тебе сапожки на каблуке, поэтому хватай эти ковбойские тапки и беги. P.S. Почти казаки. Шпорами можно портить чужие наряды, а в крайнем случае снять и метнуть."
        },
        {
            "id": "S0003",
            "store": "sole",
            "date": "2026-06-08",
            "status": "delivered",
            "senderType": "self",
            "sender": null,
            "recipient": "P0004",
            "delivery": "hogwarts",
            "items": [
                {
                    "collection": "architecture",
                    "section": null,
                    "model": "10-hat.png",
                    "variant": null,
                    "quantity": 1,
                    "price": 24
                }
            ],
            "total": 24,
            "cardRequired": false,
            "cardText": ""
        },
        {
            "id": "S0004",
            "store": "sole",
            "date": "2026-06-08",
            "status": "new",
            "senderType": "person",
            "sender": "P0007",
            "recipient": "P0006",
            "delivery": "hogwarts",
            "items": [
                {
                    "collection": "hufflepuff-day",
                    "section": null,
                    "model": "05-cowboy.png",
                    "variant": null,
                    "quantity": 1,
                    "price": 32
                }
            ],
            "total": 32,
            "cardRequired": true,
            "cardText": "Пусть жизнь и несётся галопом, но ты успевай осматривать прерии"
        }
    ]
};
