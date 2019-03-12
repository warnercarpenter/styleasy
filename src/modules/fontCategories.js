const fontCategories = {
    handwriting: [
        "Calligraffitti",
        "Coming Soon",
        "Crafty Girls",
        "Homemade Apple",
        "Just Another Hand",
        "Montez",
        "Permanent Marker",
        "Rancho",
        "Redressed",
        "Rochester",
        "Rock Salt",
        "Satisfy",
        "Schoolbell",
        "Sunshiney",
        "Walter Turncoat",
        "Yellowtail",
        "Aguafina Script",
        "Aladin",
        "Alex Brush",
        "Allura",
        "Amatic SC",
        "Annie Use Your Telescope",
        "Architects Daughter",
        "Arizonia",
        "Bad Script",
        "Berkshire Swash",
        "Bilbo",
        "Bilbo Swash Caps",
        "Bonbon",
        "Butterfly Kids",
        "Cedarville Cursive",
        "Clicker Script",
        "Condiment",
        "Cookie",
        "Courgette",
        "Covered By Your Grace",
        "Damion",
        "Dancing Script",
        "Dawning of a New Day",
        "Delius",
        "Delius Swash Caps",
        "Delius Unicase",
        "Devonshire",
        "Dr Sugiyama",
        "Eagle Lake",
        "Engagement",
        "Euphoria Script",
        "Felipa",
        "Fondamento",
        "Give You Glory",
        "Gloria Hallelujah",
        "Gochi Hand",
        "Great Vibes",
        "Handlee",
        "Herr Von Muellerhoff",
        "Indie Flower",
        "Italianno",
        "Jim Nightshade",
        "Julee",
        "Just Me Again Down Here",
        "Kaushan Script",
        "Kristi",
        "La Belle Aurore",
        "League Script",
        "Leckerli One",
        "Loved by the King",
        "Lovers Quarrel",
        "Marck Script",
        "Meddon",
        "Meie Script",
        "Merienda",
        "Merienda One",
        "Mervale Script",
        "Miama",
        "Miss Fajardose",
        "Miss Saint Delafield",
        "Molle",
        "Monsieur La Doulaise",
        "Mr Bedford",
        "Mr Bedfort",
        "Mr Dafoe",
        "Mr De Haviland",
        "Mrs Saint Delafield",
        "Mrs Sheppards",
        "Neucha",
        "Niconne",
        "Norican",
        "Nothing You Could Do",
        "Over the Rainbow",
        "Pacifico",
        "Parisienne",
        "Patrick Hand",
        "Pecita",
        "Petit Formal Script",
        "Pinyon Script",
        "Princess Sofia",
        "Quintessential",
        "Qwigley",
        "Reenie Beanie",
        "Romanesco",
        "Rouge Script",
        "Ruge Boogie",
        "Ruthie",
        "Sacramento",
        "Shadows Into Light",
        "Shadows Into Light Two",
        "Short Stack",
        "Sofia",
        "Stalemate",
        "Sue Ellen Francisco",
        "Swanky and Moo Moo",
        "Tangerine",
        "The Girl Next Door",
        "Vibur",
        "Waiting for the Sunrise",
        "Yesteryear",
        "Zeyada"
    ],
    sansSerif: [
        "Aclonica",
        "Droid Sans",
        "Droid Sans Mono",
        "Open Sans",
        "Open Sans Condensed",
        "Roboto",
        "Roboto Condensed",
        "Syncopate",
        "ABeeZee",
        "Abel",
        "Acme",
        "Actor",
        "Advent Pro",
        "Aldrich",
        "Allerta",
        "Allerta Stencil",
        "Amaranth",
        "Anaheim",
        "Andika",
        "Anonymous Pro",
        "Antic",
        "Anton",
        "Archivo Black",
        "Archivo Narrow",
        "Arimo",
        "Armata",
        "Asap",
        "Asul",
        "Average Sans",
        "Basic",
        "Belleza",
        "BenchNine",
        "Bubbler One",
        "Cabin",
        "Cabin Condensed",
        "Cagliostro",
        "Candal",
        "Cantarell",
        "Cantora One",
        "Capriola",
        "Carme",
        "Carrois Gothic",
        "Carrois Gothic SC",
        "Changa",
        "Chau Philomene One",
        "Chivo",
        "Coda Caption",
        "Convergence",
        "Cousine",
        "Cuprum",
        "Days One",
        "Didact Gothic",
        "Doppio One",
        "Dorsa",
        "Dosis",
        "Duru Sans",
        "Economica",
        "Electrolize",
        "Englebert",
        "Exo",
        "Federo",
        "Fjalla One",
        "Francois One",
        "Fresca",
        "Gafata",
        "Galdeano",
        "Geo",
        "Gudea",
        "Hammersmith One",
        "Hermeneus One",
        "Homenaje",
        "Imprima",
        "Inconsolata",
        "Inder",
        "Istok Web",
        "Jockey One",
        "Josefin Sans",
        "Josefin Sans Std Light",
        "Julius Sans One",
        "Jura",
        "Karla",
        "Kite One",
        "Krona One",
        "Lato",
        "Lekton",
        "Magra",
        "Mako",
        "Marmelad",
        "Marvel",
        "Maven Pro",
        "Merge One",
        "Metrophobic",
        "Michroma",
        "Molengo",
        "Montserrat",
        "Montserrat Alternates",
        "Montserrat Subrayada",
        "Mouse Memoirs",
        "Muli",
        "News Cycle",
        "Nobile",
        "Numans",
        "Nunito",
        "Orbitron",
        "Orienta",
        "Oswald",
        "Oxygen",
        "Oxygen Mono",
        "Paytone One",
        "Philosopher",
        "Play",
        "Pontano Sans",
        "Port Lligat Sans",
        "PT Mono",
        "PT Sans",
        "PT Sans Caption",
        "PT Sans Narrow",
        "Puritan",
        "Quantico",
        "Quattrocento Sans",
        "Questrial",
        "Quicksand",
        "Raleway",
        "Rambla",
        "Rationale",
        "Ropa Sans",
        "Rosario",
        "Ruda",
        "Ruluko",
        "Rum Raisin",
        "Russo One",
        "Sansation",
        "Scada",
        "Seymour One",
        "Shanti",
        "Share Tech",
        "Share Tech Mono",
        "Signika",
        "Signika Negative",
        "Six Caps",
        "Snippet",
        "Source Code Pro",
        "Source Sans Pro",
        "Spinnaker",
        "Strait",
        "Strong",
        "Telex",
        "Tenor Sans",
        "Terminal Dosis",
        "Terminal Dosis Light",
        "Text Me One",
        "Titillium Web",
        "Tuffy",
        "Varela",
        "Varela Round",
        "Viga",
        "Voltaire",
        "Wire One",
        "Yanone Kaffeesatz",
        "Ubuntu",
        "Ubuntu Condensed",
        "Ubuntu Mono"
    ],
    display: [
        "Cherry Cream Soda",
        "Chewy",
        "Creepster Caps",
        "Crushed",
        "Fontdiner Swanky",
        "Irish Grover",
        "Irish Growler",
        "Kranky",
        "Luckiest Guy",
        "Maiden Orange",
        "Mountains of Christmas",
        "Slackey",
        "Smokum",
        "Special Elite",
        "Unkempt",
        "Abril Fatface",
        "Akronim",
        "Alfa Slab One",
        "Allan",
        "Almendra Display",
        "Amarante",
        "Arbutus",
        "Asset",
        "Astloch",
        "Atomic Age",
        "Aubrey",
        "Audiowide",
        "Autour One",
        "Averia Gruesa Libre",
        "Averia Libre",
        "Averia Sans Libre",
        "Averia Serif Libre",
        "Bangers",
        "Baumans",
        "Bevan",
        "Bigelow Rules",
        "Bigshot One",
        "Black Ops One",
        "Boogaloo",
        "Bowlby One",
        "Bowlby One SC",
        "Bubblegum Sans",
        "Buda",
        "Butcherman",
        "Butcherman Caps",
        "Cabin Sketch",
        "Caesar Dressing",
        "Carter One",
        "Ceviche One",
        "Changa One",
        "Chango",
        "Chela One",
        "Chelsea Market",
        "Cherry Swash",
        "Chicle",
        "Cinzel Decorative",
        "Clara",
        "Coda",
        "Codystar",
        "Combo",
        "Comfortaa",
        "Concert One",
        "Contrail One",
        "Corben",
        "Creepster",
        "Croissant One",
        "Diplomata",
        "Diplomata SC",
        "Dynalight",
        "Eater",
        "Eater Caps",
        "Emblema One",
        "Emilys Candy",
        "Erica One",
        "Ewert",
        "Expletus Sans",
        "Fascinate",
        "Fascinate Inline",
        "Faster One",
        "Federant",
        "Finger Paint",
        "Flamenco",
        "Flavors",
        "Forum",
        "Fredericka the Great",
        "Fredoka One",
        "Frijole",
        "Fugaz One",
        "Galindo",
        "Geostar",
        "Geostar Fill",
        "Germania One",
        "Glass Antiqua",
        "Goblin One",
        "Gorditas",
        "Graduate",
        "Gravitas One",
        "Griffy",
        "Gruppo",
        "Happy Monkey",
        "Henny Penny",
        "Iceberg",
        "Iceland",
        "Jacques Francois Shadow",
        "Jolly Lodger",
        "Joti One",
        "Keania One",
        "Kelly Slab",
        "Kenia",
        "Knewave",
        "Lancelot",
        "Lemon",
        "Lemon One",
        "Life Savers",
        "Lilita One",
        "Limelight",
        "Lobster",
        "Lobster Two",
        "Londrina Outline",
        "Londrina Shadow",
        "Londrina Sketch",
        "Londrina Solid",
        "Love Ya Like A Sister",
        "Macondo",
        "Macondo Swash Caps",
        "McLaren",
        "MedievalSharp",
        "Medula One",
        "Megrim",
        "Metal Mania",
        "Metamorphous",
        "Miltonian",
        "Miltonian Tattoo",
        "Miniver",
        "Modern Antiqua",
        "Monofett",
        "Monoton",
        "Mystery Quest",
        "Nixie One",
        "Nosifer",
        "Nosifer Caps",
        "Nova Cut",
        "Nova Flat",
        "Nova Mono",
        "Nova Oval",
        "Nova Round",
        "Nova Script",
        "Nova Slim",
        "Nova Square",
        "Offside",
        "Oldenburg",
        "Oleo Script",
        "Oleo Script Swash Caps",
        "Oregano",
        "Original Surfer",
        "Overlock",
        "Overlock SC",
        "Paprika",
        "Passero One",
        "Passion One",
        "Patua One",
        "Peralta",
        "Piedra",
        "Pirata One",
        "Plaster",
        "Playball",
        "Poetsen One",
        "Poiret One",
        "Poller One",
        "Pompiere",
        "Press Start 2P",
        "Prosto One",
        "Racing Sans One",
        "Raleway Dots",
        "Rammetto One",
        "Ranchers",
        "Revalia",
        "Ribeye",
        "Ribeye Marrow",
        "Righteous",
        "Risque",
        "Ruslan Display",
        "Rye",
        "Sail",
        "Salsa",
        "Sancreek",
        "Sansita One",
        "Sarina",
        "Seaweed Script",
        "Sevillana",
        "Share",
        "Shojumaru",
        "Sigmar One",
        "Simonetta",
        "Sirin Stencil",
        "Skranji",
        "Smythe",
        "Sniglet",
        "Sofadi One",
        "Sonsie One",
        "Spicy Rice",
        "Spirax",
        "Squada One",
        "Stalinist One",
        "Stalin One",
        "Stardos Stencil",
        "Stint Ultra Condensed",
        "Stint Ultra Expanded",
        "Supermercado One",
        "Titan One",
        "Trade Winds",
        "Trochut",
        "Tulpen One",
        "Uncial Antiqua",
        "Underdog",
        "Unica One",
        "UnifrakturCook",
        "UnifrakturMaguntia",
        "Unlock",
        "Vast Shadow",
        "Voces",
        "VT323",
        "Wallpoet",
        "Warnes",
        "Wellfleet",
        "Yeseva One"
    ],
    serif: [
        "Droid Serif",
        "jsMath cmbx10",
        "jsMath cmex10",
        "jsMath cmmi10",
        "jsMath cmr10",
        "jsMath cmsy10",
        "jsMath cmti10",
        "Ultra",
        "Adamina",
        "Alegreya",
        "Alegreya SC",
        "Alice",
        "Alike",
        "Alike Angular",
        "Almendra",
        "Almendra SC",
        "Amethysta",
        "Amiri",
        "Andada",
        "Andada SC",
        "Antic Didone",
        "Antic Slab",
        "Arapey",
        "Arbutus Slab",
        "Artifika",
        "Arvo",
        "Average",
        "Balthazar",
        "Belgrano",
        "Bentham",
        "Bitter",
        "Brawler",
        "Bree Serif",
        "Buenard",
        "Cambo",
        "Cantata One",
        "Cardo",
        "Caudex",
        "Cinzel",
        "Copse",
        "Coustard",
        "Crete Round",
        "Crimson Text",
        "Cutive",
        "Cutive Mono",
        "Della Respira",
        "EB Garamond",
        "Enriqueta",
        "Esteban",
        "Fanwood Text",
        "Fenix",
        "Fjord One",
        "Gentium Basic",
        "Gentium Book Basic",
        "Gilda Display",
        "Glegoo",
        "Goudy Bookletter 1911",
        "Habibi",
        "Headland One",
        "Holtwood One SC",
        "IM Fell Double Pica",
        "IM Fell Double Pica SC",
        "IM Fell DW Pica",
        "IM Fell DW Pica SC",
        "IM Fell English",
        "IM Fell English SC",
        "IM Fell French Canon",
        "IM Fell French Canon SC",
        "IM Fell Great Primer",
        "IM Fell Great Primer SC",
        "Inika",
        "Italiana",
        "Jacques Francois",
        "Josefin Slab",
        "Judson",
        "Junge",
        "Kameron",
        "Kotta One",
        "Kreon",
        "Ledger",
        "Linden Hill",
        "Lora",
        "Lusitana",
        "Lustria",
        "Marcellus",
        "Marcellus SC",
        "Marko One",
        "Mate",
        "Mate SC",
        "Merriweather",
        "Montaga",
        "Neuton",
        "Noticia Text",
        "OFL Sorts Mill Goudy TT",
        "Old Standard TT",
        "Oranienbaum",
        "Ovo",
        "Petrona",
        "Playfair Display",
        "Playfair Display SC",
        "Podkova",
        "Poly",
        "Port Lligat Slab",
        "Prata",
        "Prociono",
        "PT Serif",
        "PT Serif Caption",
        "Quando",
        "Quattrocento",
        "Radley",
        "Rokkitt",
        "Rosarivo",
        "Rufina",
        "Sanchez",
        "Sedan",
        "Sedan SC",
        "Sorts Mill Goudy",
        "Stoke",
        "Tienne",
        "Tinos",
        "Trocchi",
        "Trykker",
        "Unna",
        "Vidaloka",
        "Volkhov",
        "Vollkorn"
    ],
    monospace: [
        "Roboto Mono",
        "Inconsolata",
        "Source Code Pro",
        "VT323",
        "Ubuntu Mono",
        "PT Mono",
        "Cousine",
        "Major Mono Display",
        "B612 Mono",
        "Nanum Gothic Coding",
        "IBM Plex Mono",
        "Space Mono",
        "Anonymous Pro",
        "Share Tech Mono",
        "Fira Mono",
        "Cutive Mono",
        "Oxygen Mono",
        "Overpass Mono",
        "Nova Mono"
    ]
}

export default fontCategories