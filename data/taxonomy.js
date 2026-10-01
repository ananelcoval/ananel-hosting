/* =========================================================
   SÓLE — TAXONOMY
   Справочник обуви для фильтров, статистики и Assortment
========================================================= */


/* =========================
   КАТЕГОРИИ
========================= */

const SHOE_CATEGORIES = {
    shoes: "Туфли",
    boots: "Ботинки",
    tallBoots: "Сапоги",
    sneakers: "Кроссовки и кеды",
    open: "Открытая обувь"
};


/* =========================
   ПОЛ / ПОЗИЦИОНИРОВАНИЕ
========================= */

const GENDERS = {
    female: "Женские",
    male: "Мужские",
    unisex: "Унисекс"
};


/* =========================
   ПОГОДА
========================= */

const WEATHER = {
    hot: "Жарко",
    warm: "Тепло",
    mild: "Прохладно",
    cold: "Холодно",
    rain: "Дождь",
    snow: "Снег"
};


/* =========================
   ХАРАКТЕР МОДЕЛИ
========================= */

const VIBES = {
    casual: "Повседневная",
    smart: "Собранная",
    elegant: "Элегантная",
    sport: "Спортивная",
    rugged: "Грубая / утилитарная",
    statement: "Акцентная"
};


/* =========================
   КОНСТРУКТИВНЫЕ ОСОБЕННОСТИ
========================= */

const SHOE_FEATURES = {

    /* ПОДОШВА / КАБЛУК */

    flat: "Без каблука",
    lowHeel: "Низкий каблук",
    midHeel: "Средний каблук",
    highHeel: "Высокий каблук",
    stiletto: "Шпилька",
    chunkyHeel: "Массивный каблук",

    platform: "Платформа",
    wedge: "Танкетка",
    chunkySole: "Массивная подошва",
    sportSole: "Спортивная подошва",
    lugSole: "Рельефный протектор",

    /* ЗАСТЁЖКИ */

    laceUp: "Шнуровка",
    buckle: "Пряжка",
    ankleStrap: "Ремень на щиколотке",
    multipleStraps: "Несколько ремней",
    elasticSides: "Эластичные боковины",
    slipOn: "Без застёжки",

    /* ФОРМА */

    pointedToe: "Острый мыс",
    squareToe: "Квадратный мыс",
    roundToe: "Круглый мыс",

    openToe: "Открытый мыс",
    openHeel: "Открытая пятка",

    lowTop: "Низкий силуэт",
    midTop: "Средний силуэт",
    highTop: "Высокий силуэт"
};


/* =========================================================
   БИБЛИОТЕКА МОДЕЛЕЙ

   gender / weather / vibes здесь означают:
   "для чего конструкция обычно подходит".

   Конкретная модель в products.js сможет при необходимости
   переопределять эти параметры.
========================================================= */

const MODEL_TYPES = {

    /* =========================
       ТУФЛИ
    ========================= */

    pumps: {
        name: "Лодочки",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["elegant", "smart"]
    },

    dOrsay: {
        name: "D'Orsay",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["elegant", "statement"]
    },

    slingback: {
        name: "Слингбэки",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["elegant", "smart"]
    },

    maryJane: {
        name: "Mary Jane",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["smart", "elegant"]
    },

    tStrap: {
        name: "T-strap",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["elegant", "statement"]
    },

    ankleStrapShoes: {
        name: "Туфли с ремешком на щиколотке",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["elegant", "smart"]
    },

    balletFlats: {
        name: "Балетки",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["casual", "elegant"]
    },

    pointedFlats: {
        name: "Остроносые балетки",
        category: "shoes",
        gender: ["female"],
        weather: ["warm", "mild"],
        vibes: ["smart", "elegant"]
    },

    mules: {
        name: "Мюли",
        category: "shoes",
        gender: ["female", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["casual", "elegant"]
    },

    loafers: {
        name: "Лоферы",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "casual"]
    },

    pennyLoafers: {
        name: "Penny loafers",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "casual"]
    },

    horsebitLoafers: {
        name: "Horsebit loafers",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "elegant"]
    },

    monk: {
        name: "Монки",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "statement"]
    },

    doubleMonk: {
        name: "Double monk",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "statement"]
    },

    spectator: {
        name: "Spectator shoes",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "statement"]
    },

    moccasins: {
        name: "Мокасины",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["casual"]
    },

    boatShoes: {
        name: "Топсайдеры",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm"],
        vibes: ["casual"]
    },

    operaPumps: {
        name: "Opera pumps",
        category: "shoes",
        gender: ["female", "male"],
        weather: ["warm", "mild"],
        vibes: ["elegant", "statement"]
    },

    ghillies: {
        name: "Ghillie shoes",
        category: "shoes",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["statement"]
    },


    /* =========================
       БОТИНКИ
    ========================= */

    derby: {
        name: "Дерби",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "casual"]
    },

    oxford: {
        name: "Оксфорды",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "elegant"]
    },

    brogue: {
        name: "Броги",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["smart", "casual"]
    },

    chukka: {
        name: "Чукка",
        category: "boots",
        gender: ["male", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["casual", "smart"]
    },

    desertBoots: {
        name: "Desert boots",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["casual"]
    },

    chelsea: {
        name: "Челси",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["smart", "casual"]
    },

    ankleBoots: {
        name: "Ботильоны",
        category: "boots",
        gender: ["female"],
        weather: ["mild", "cold"],
        vibes: ["elegant", "statement"]
    },

    laceUpBoots: {
        name: "Ботинки на шнуровке",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["casual", "smart"]
    },

    combatBoots: {
        name: "Берцы",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold", "rain"],
        vibes: ["rugged", "statement"]
    },

    engineerBoots: {
        name: "Engineer boots",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["rugged", "statement"]
    },

    bikerBoots: {
        name: "Байкерские ботинки",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["rugged", "statement"]
    },

    creepers: {
        name: "Криперы",
        category: "boots",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["statement", "casual"]
    },


    /* =========================
       САПОГИ
    ========================= */

    kneeBoots: {
        name: "Сапоги до колена",
        category: "tallBoots",
        gender: ["female", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["smart", "elegant"]
    },

    overKneeBoots: {
        name: "Ботфорты",
        category: "tallBoots",
        gender: ["female"],
        weather: ["mild", "cold"],
        vibes: ["elegant", "statement"]
    },

    ridingBoots: {
        name: "Сапоги для верховой езды",
        category: "tallBoots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["smart", "rugged"]
    },

    cowboyBoots: {
        name: "Ковбойские сапоги",
        category: "tallBoots",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["statement", "rugged"]
    },

    harnessBoots: {
        name: "Harness boots",
        category: "tallBoots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold"],
        vibes: ["rugged", "statement"]
    },

    rubberBoots: {
        name: "Резиновые сапоги",
        category: "tallBoots",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "rain"],
        vibes: ["casual", "rugged"]
    },

    snowBoots: {
        name: "Зимние / snow boots",
        category: "tallBoots",
        gender: ["female", "male", "unisex"],
        weather: ["cold", "snow"],
        vibes: ["casual", "rugged"]
    },


    /* =========================
       КРОССОВКИ И КЕДЫ
    ========================= */

    lowSneakers: {
        name: "Низкие кеды",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["casual", "sport"]
    },

    highSneakers: {
        name: "Высокие кеды",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["casual", "sport"]
    },

    courtSneakers: {
        name: "Court sneakers",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["sport", "casual"]
    },

    retroRunner: {
        name: "Retro runner",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["sport", "casual"]
    },

    running: {
        name: "Running shoes",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["sport"]
    },

    crossTraining: {
        name: "Cross-training sneakers",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["sport"]
    },

    basketball: {
        name: "Баскетбольные кроссовки",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild"],
        vibes: ["sport", "statement"]
    },

    trailRunning: {
        name: "Trail running shoes",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild", "rain"],
        vibes: ["sport", "rugged"]
    },

    trekkingSneakers: {
        name: "Треккинговые кроссовки",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm", "mild", "rain"],
        vibes: ["sport", "rugged"]
    },

    hikingBoots: {
        name: "Треккинговые ботинки",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["mild", "cold", "rain"],
        vibes: ["sport", "rugged"]
    },

    slipOnSneakers: {
        name: "Слипоны",
        category: "sneakers",
        gender: ["female", "male", "unisex"],
        weather: ["warm"],
        vibes: ["casual", "sport"]
    },


    /* =========================
       ОТКРЫТАЯ ОБУВЬ
    ========================= */

    sandals: {
        name: "Сандалии",
        category: "open",
        gender: ["female", "male", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["casual"]
    },

    fisherman: {
        name: "Fisherman sandals",
        category: "open",
        gender: ["female", "male", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["casual", "smart"]
    },

    strappySandals: {
        name: "Босоножки с ремешками",
        category: "open",
        gender: ["female"],
        weather: ["hot", "warm"],
        vibes: ["elegant", "statement"]
    },

    platformSandals: {
        name: "Босоножки на платформе",
        category: "open",
        gender: ["female"],
        weather: ["hot", "warm"],
        vibes: ["statement", "casual"]
    },

    heeledSandals: {
        name: "Босоножки на каблуке",
        category: "open",
        gender: ["female"],
        weather: ["hot", "warm"],
        vibes: ["elegant", "statement"]
    },

    slides: {
        name: "Шлёпанцы / slides",
        category: "open",
        gender: ["female", "male", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["casual"]
    },

    clogs: {
        name: "Клоги",
        category: "open",
        gender: ["female", "male", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["casual", "statement"]
    },

    crocs: {
        name: "Кроксы",
        category: "open",
        gender: ["female", "male", "unisex"],
        weather: ["hot", "warm", "rain"],
        vibes: ["casual", "statement"]
    },

    espadrilles: {
        name: "Эспадрильи",
        category: "open",
        gender: ["female", "male", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["casual", "smart"]
    },

    huaraches: {
        name: "Хуарачи",
        category: "open",
        gender: ["female", "male", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["casual"]
    },

    gladiatorSandals: {
        name: "Гладиаторские сандалии",
        category: "open",
        gender: ["female", "unisex"],
        weather: ["hot", "warm"],
        vibes: ["statement", "casual"]
    },

    ankleWrapSandals: {
        name: "Босоножки с завязками",
        category: "open",
        gender: ["female"],
        weather: ["hot", "warm"],
        vibes: ["elegant", "statement"]
    }
};


/* =========================================================
   ТИПЫ КОЛЛЕКЦИЙ
========================================================= */

const COLLECTION_TYPES = {

    base: {
        name: "Базовая линия",
        description: "Постоянная коллекция без сезонного ограничения."
    },

    seasonal: {
        name: "Сезонная коллекция",
        description: "Крупная коллекция на один сезон."
    },

    special: {
        name: "Специальный выпуск",
        description: "Выпуск под отдельное событие, проект или период."
    },

    holiday: {
        name: "Праздничный выпуск",
        description: "Лимитированный выпуск под праздник или крупное мероприятие."
    }
};


/* =========================================================
   СЕЗОНЫ КОЛЛЕКЦИЙ
========================================================= */

const COLLECTION_SEASONS = {
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    winter: "Зима",
    allSeason: "Всесезонная"
};


/* =========================================================
   ТИПЫ ОФОРМЛЕНИЯ

   collection — одно оформление на весь выпуск
   perModel   — отдельное оформление для каждой модели
   none       — не используется
========================================================= */

const PACKAGING_TYPES = {
    collection: "Общее для коллекции",
    perModel: "Отдельное для каждой модели",
    none: "Нет"
};


/* =========================================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

   Они понадобятся Hosting / Assortment / Manager,
   чтобы не повторять одну и ту же логику.
========================================================= */

function getModelType(id){
    return MODEL_TYPES[id] || null;
}

function getCategory(id){
    return SHOE_CATEGORIES[id] || id;
}

function getGender(id){
    return GENDERS[id] || id;
}

function getWeather(id){
    return WEATHER[id] || id;
}

function getVibe(id){
    return VIBES[id] || id;
}

function getFeature(id){
    return SHOE_FEATURES[id] || id;
}

function getCollectionType(id){
    return COLLECTION_TYPES[id] || null;
}


/* =========================================================
   ПОЛУЧИТЬ ВСЕ МОДЕЛИ ОДНОЙ КАТЕГОРИИ

   Пример:
   getModelsByCategory("shoes")
========================================================= */

function getModelsByCategory(category){
    return Object.entries(MODEL_TYPES)
        .filter(([,model])=>model.category===category)
        .map(([id,model])=>({
            id,
            ...model
        }));
}


/* =========================================================
   ФИЛЬТР БИБЛИОТЕКИ

   Пример:

   findModelTypes({
       category:"shoes",
       gender:"female",
       weather:"mild"
   })
========================================================= */

function findModelTypes(filters={}){
    return Object.entries(MODEL_TYPES)
        .map(([id,model])=>({
            id,
            ...model
        }))
        .filter(model=>{

            if(
                filters.category &&
                model.category!==filters.category
            ){
                return false;
            }

            if(
                filters.gender &&
                !model.gender.includes(filters.gender)
            ){
                return false;
            }

            if(
                filters.weather &&
                !model.weather.includes(filters.weather)
            ){
                return false;
            }

            if(
                filters.vibe &&
                !model.vibes.includes(filters.vibe)
            ){
                return false;
            }

            return true;
        });
}


/* =========================================================
   ПОЛНЫЙ СПИСОК ДЛЯ SELECT

   Удобно для будущего Assortment.
========================================================= */

function modelTypeOptions(){
    return Object.entries(MODEL_TYPES)
        .map(([id,model])=>({
            value:id,
            label:model.name,
            category:model.category
        }))
        .sort((a,b)=>
            a.label.localeCompare(
                b.label,
                "ru"
            )
        );
}
