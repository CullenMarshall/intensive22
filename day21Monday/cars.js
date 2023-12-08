const allVehicles = [
    {
        manufacturer: "Jeep",
        model: "911",
        fuel: "Hybrid",
        color: "gold",
        productionYear: 1998,
        registrationNumber: "PP16GHL",
    },
    {
        manufacturer: "Bugatti",
        model: "Spyder",
        fuel: "Hybrid",
        color: "purple",
        productionYear: 2009,
        registrationNumber: "UE91KFX",
    },
    {
        manufacturer: "Bugatti",
        model: "Focus",
        fuel: "Electric",
        color: "tan",
        productionYear: 1994,
        registrationNumber: "IN71IIR",
    },
    {
        manufacturer: "Jeep",
        model: "Impala",
        fuel: "Gasoline",
        color: "magenta",
        productionYear: 2015,
        registrationNumber: "BP23PLN",
    },
    {
        manufacturer: "Audi",
        model: "Accord",
        fuel: "Diesel",
        color: "orange",
        productionYear: 2015,
        registrationNumber: "ON63EIQ",
    },
    {
        manufacturer: "Audi",
        model: "Model Y",
        fuel: "Diesel",
        color: "black",
        productionYear: 2014,
        registrationNumber: "ZE75KNY",
    },
    {
        manufacturer: "Lamborghini",
        model: "1",
        fuel: "Electric",
        color: "orange",
        productionYear: 2021,
        registrationNumber: "YT96UVX",
    },
    {
        manufacturer: "Nissan",
        model: "Camry",
        fuel: "Electric",
        color: "lavender",
        productionYear: 2014,
        registrationNumber: "BV70ZMW",
    },
    {
        manufacturer: "Honda",
        model: "Camaro",
        fuel: "Diesel",
        color: "maroon",
        productionYear: 1990,
        registrationNumber: "KU98WDA",
    },
    {
        manufacturer: "Ferrari",
        model: "Mercielago",
        fuel: "Diesel",
        color: "azure",
        productionYear: 1996,
        registrationNumber: "GU93BSH",
    },
    {
        manufacturer: "Hyundai",
        model: "Durango",
        fuel: "Gasoline",
        color: "white",
        productionYear: 2019,
        registrationNumber: "NC87JBC",
    },
    {
        manufacturer: "Aston Martin",
        model: "Sentra",
        fuel: "Hybrid",
        color: "blue",
        productionYear: 1991,
        registrationNumber: "NT71XOU",
    },
    {
        manufacturer: "Jaguar",
        model: "Wrangler",
        fuel: "Gasoline",
        color: "black",
        productionYear: 1995,
        registrationNumber: "KG71FWA",
    },
    {
        manufacturer: "Ford",
        model: "Model T",
        fuel: "Diesel",
        color: "violet",
        productionYear: 1990,
        registrationNumber: "RG34OVE",
    },
    {
        manufacturer: "Nissan",
        model: "Expedition",
        fuel: "Hybrid",
        color: "blue",
        productionYear: 1998,
        registrationNumber: "QR05SXP",
    },
    {
        manufacturer: "Polestar",
        model: "Aventador",
        fuel: "Diesel",
        color: "blue",
        productionYear: 2000,
        registrationNumber: "FE65QMR",
    },
    {
        manufacturer: "Jaguar",
        model: "CTS",
        fuel: "Diesel",
        color: "pink",
        productionYear: 2013,
        registrationNumber: "WV82DMI",
    },
    {
        manufacturer: "Rolls Royce",
        model: "Model X",
        fuel: "Gasoline",
        color: "gold",
        productionYear: 2021,
        registrationNumber: "DF08UID",
    },
    {
        manufacturer: "Toyota",
        model: "Model Y",
        fuel: "Diesel",
        color: "blue",
        productionYear: 2001,
        registrationNumber: "HA37NPS",
    },
    {
        manufacturer: "Audi",
        model: "Model X",
        fuel: "Hybrid",
        color: "turquoise",
        productionYear: 1997,
        registrationNumber: "WZ33QTE",
    },
    {
        manufacturer: "Audi",
        model: "Ranchero",
        fuel: "Hybrid",
        color: "mint green",
        productionYear: 1998,
        registrationNumber: "GQ02JYS",
    },
    {
        manufacturer: "Kia",
        model: "2",
        fuel: "Electric",
        color: "violet",
        productionYear: 2021,
        registrationNumber: "SO42SZZ",
    },
    {
        manufacturer: "Fiat",
        model: "Fortwo",
        fuel: "Electric",
        color: "lavender",
        productionYear: 2011,
        registrationNumber: "IM00TXG",
    },
    {
        manufacturer: "Aston Martin",
        model: "Fiesta",
        fuel: "Hybrid",
        color: "violet",
        productionYear: 2000,
        registrationNumber: "YN10ZEL",
    },
    {
        manufacturer: "Aston Martin",
        model: "Focus",
        fuel: "Gasoline",
        color: "grey",
        productionYear: 2013,
        registrationNumber: "EX77EAI",
    },
    {
        manufacturer: "Tesla",
        model: "Civic",
        fuel: "Gasoline",
        color: "purple",
        productionYear: 1996,
        registrationNumber: "LQ71PJR",
    },
    {
        manufacturer: "BMW",
        model: "Grand Cherokee",
        fuel: "Gasoline",
        color: "yellow",
        productionYear: 2008,
        registrationNumber: "JF33PLF",
    },
    {
        manufacturer: "Dodge",
        model: "911",
        fuel: "Electric",
        color: "gold",
        productionYear: 2013,
        registrationNumber: "MU83BTM",
    },
    {
        manufacturer: "Mazda",
        model: "Countach",
        fuel: "Gasoline",
        color: "yellow",
        productionYear: 2023,
        registrationNumber: "KE56LQF",
    },
    {
        manufacturer: "Bugatti",
        model: "911",
        fuel: "Hybrid",
        color: "blue",
        productionYear: 1994,
        registrationNumber: "AR40SXL",
    },
    {
        manufacturer: "Land Rover",
        model: "Escalade",
        fuel: "Electric",
        color: "green",
        productionYear: 2012,
        registrationNumber: "KF28YYJ",
    },
    {
        manufacturer: "Cadillac",
        model: "Mercielago",
        fuel: "Gasoline",
        color: "orange",
        productionYear: 2023,
        registrationNumber: "QD21TDD",
    },
    {
        manufacturer: "BMW",
        model: "Golf",
        fuel: "Electric",
        color: "black",
        productionYear: 2019,
        registrationNumber: "KG57FHR",
    },
    {
        manufacturer: "Volvo",
        model: "Malibu",
        fuel: "Hybrid",
        color: "lime",
        productionYear: 2015,
        registrationNumber: "HR46XIU",
    },
    {
        manufacturer: "Fiat",
        model: "Camry",
        fuel: "Electric",
        color: "lavender",
        productionYear: 2019,
        registrationNumber: "PZ46ESA",
    },
    {
        manufacturer: "Ferrari",
        model: "Beetle",
        fuel: "Diesel",
        color: "purple",
        productionYear: 2023,
        registrationNumber: "KO94HOU",
    },
    {
        manufacturer: "Lamborghini",
        model: "Model 3",
        fuel: "Electric",
        color: "grey",
        productionYear: 2012,
        registrationNumber: "IS85YWU",
    },
    {
        manufacturer: "Mini",
        model: "XC90",
        fuel: "Gasoline",
        color: "gold",
        productionYear: 2019,
        registrationNumber: "XH26XOC",
    },
    {
        manufacturer: "Bentley",
        model: "Sentra",
        fuel: "Hybrid",
        color: "silver",
        productionYear: 1994,
        registrationNumber: "EJ45FTF",
    },
    {
        manufacturer: "Lamborghini",
        model: "Cruze",
        fuel: "Gasoline",
        color: "azure",
        productionYear: 2020,
        registrationNumber: "GA73RQP",
    },
    {
        manufacturer: "Ford",
        model: "Escalade",
        fuel: "Electric",
        color: "orange",
        productionYear: 1999,
        registrationNumber: "GZ59BQU",
    },
    {
        manufacturer: "Polestar",
        model: "PT Cruiser",
        fuel: "Gasoline",
        color: "maroon",
        productionYear: 1996,
        registrationNumber: "HZ06WHB",
    },
    {
        manufacturer: "Nissan",
        model: "XTS",
        fuel: "Hybrid",
        color: "teal",
        productionYear: 2022,
        registrationNumber: "YS73HPC",
    },
    {
        manufacturer: "Bentley",
        model: "El Camino",
        fuel: "Diesel",
        color: "green",
        productionYear: 2007,
        registrationNumber: "BO16DWO",
    },
    {
        manufacturer: "Fiat",
        model: "Grand Cherokee",
        fuel: "Hybrid",
        color: "lime",
        productionYear: 2014,
        registrationNumber: "HN93QMW",
    },
    {
        manufacturer: "Mercedes Benz",
        model: "Focus",
        fuel: "Gasoline",
        color: "silver",
        productionYear: 1998,
        registrationNumber: "ED46VTW",
    },
    {
        manufacturer: "BMW",
        model: "2",
        fuel: "Diesel",
        color: "silver",
        productionYear: 2015,
        registrationNumber: "HO33XYM",
    },
    {
        manufacturer: "Cadillac",
        model: "CX-9",
        fuel: "Gasoline",
        color: "olive",
        productionYear: 2010,
        registrationNumber: "RL84BUZ",
    },
    {
        manufacturer: "Chrysler",
        model: "Jetta",
        fuel: "Diesel",
        color: "salmon",
        productionYear: 2023,
        registrationNumber: "GC85OGG",
    },
    {
        manufacturer: "Lamborghini",
        model: "XTS",
        fuel: "Electric",
        color: "teal",
        productionYear: 2006,
        registrationNumber: "VO47OCA",
    },
];