var onLoad = function () {
    var periodicTable = document.getElementById("PeriodicTable");

    for (var r = 0; r < 11; ++r) {
        var tr = document.createElement("tr");

        for (var c = 0; c < 19; ++c) {
            var tableIndex = c + 19 * r;
            var atomicElement = atomicElements[tableIndex];
            var cell = document.createElement("td");
            cell.id = "c" + tableIndex.toString();
            cell.className = "empty";

            if (atomicElement) {
                if (atomicElement.atomicNumber && atomicElement.atomicSymbol && atomicElement.atomicName && atomicElement.description) {
                    var container, atomicNumberDiv, atomicSymbolDiv, atomicNameDiv;
                    var atomicNumberTxt, atomicSymbolTxt, atomicNameTxt;

                    atomicNumberTxt = document.createTextNode(atomicElement.atomicNumber.toString());
                    atomicSymbolTxt = document.createTextNode(atomicElement.atomicSymbol);
                    atomicNameTxt = document.createTextNode(atomicElement.atomicName);

                    atomicNumberDiv = document.createElement("div");
                    atomicNumberDiv.className = "atomicNumber";
                    atomicNumberDiv.appendChild(atomicNumberTxt);

                    atomicSymbolDiv = document.createElement("div");
                    atomicSymbolDiv.className = "atomicSymbol";
                    atomicSymbolDiv.appendChild(atomicSymbolTxt);

                    atomicNameDiv = document.createElement("div");
                    atomicNameDiv.className = "atomicName";
                    atomicNameDiv.appendChild(atomicNameTxt);

                    container = document.createElement("div");
                    container.appendChild(atomicNumberDiv);
                    container.appendChild(atomicSymbolDiv);
                    container.appendChild(atomicNameDiv);

                    cell.appendChild(container);
                    cell.className = "atomicElement " + atomicTypes[atomicElement.description];
                    cell.onclick = onClick;
                }
                else {
                    if (atomicElement.labelTxt) {
                        var labelDiv;
                        var labelTxt;

                        labelTxt = document.createTextNode(atomicElement.labelTxt.toString());

                        labelDiv = document.createElement("div");
                        labelDiv.className = "atomicName"; // same style as others for now
                        labelDiv.appendChild(labelTxt);

                        cell.appendChild(labelDiv);
                    }
                }
            }

            tr.appendChild(cell);
        }

        periodicTable.appendChild(tr);

        containers = {
            atomicNumber:document.getElementsByClassName("atomicNumber"),
            atomicSymbol:document.getElementsByClassName("atomicSymbol"),
            atomicName:document.getElementsByClassName("atomicName")
        };

        showElementContainer = {
            showElement:document.getElementById("showElement"),
            atomicNumber:document.getElementById("showElementAtomicNumber"),
            atomicSymbol:document.getElementById("showElementAtomicSymbol"),
            atomicName:document.getElementById("showElementAtomicName")
        };
    }
};

var onChange = function (elem) {
    if (elem.name) {
        var elementInfo = containers[elem.name];
        var len = elementInfo.length;

        for (var n = 0; n < len; ++n) {
            elementInfo[n].style.visibility = elem.checked ? "visible" : "hidden";
        }
    }
};

var onClick = function (evt) {
    var id, domNode = evt.target;

    // loop until id is found
    while (!domNode.id) {
        domNode = domNode.parentNode;
    }

    // removes 'c' prefix
    id = domNode.id.slice(1);

    var atomicElement = atomicElements[id];

    showElementContainer.showElement.className = "atomicElement " + atomicTypes[atomicElement.description];
    showElementContainer.atomicNumber.textContent = atomicElement.atomicNumber;
    showElementContainer.atomicSymbol.textContent = atomicElement.atomicSymbol;
    showElementContainer.atomicName.textContent = atomicElement.atomicName;

};

var clearShowElement = function () {
    showElementContainer.showElement.className = "atomicElement";
    showElementContainer.atomicNumber.textContent = "";
    showElementContainer.atomicSymbol.textContent = "";
    showElementContainer.atomicName.textContent = "";
}

var containers, showElementContainer;

var atomicTypes = [
    "empty", // 0
    "hydrogen", // 1
    "noblegas", // 2
    "alkali", // 3
    "alkaliearth", // 4
    "nonmetal", // 5
    "poormetal", // 6
    "transitionmetal", // 7
    "rareeartmetals"    // 8
];

var atomicElements = [
    // row 0
    {},
    { labelTxt:'1' },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { labelTxt:'18' },

    // row 1
    { labelTxt:'1' },
    { atomicNumber:1, atomicSymbol:'H', atomicName:'Hydrogen', description:1 },
    { labelTxt:'2' },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { labelTxt:'13' },
    { labelTxt:'14' },
    { labelTxt:'15' },
    { labelTxt:'16' },
    { labelTxt:'17' },
    { atomicNumber:2, atomicSymbol:'He', atomicName:'Helium', description:2 },

    // row 2
    { labelTxt:'2' },
    { atomicNumber:3, atomicSymbol:'Li', atomicName:'Lithium', description:3 },
    { atomicNumber:4, atomicSymbol:'Be', atomicName:'Beryllium', description:4 },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { atomicNumber:5, atomicSymbol:'B', atomicName:'Boron', description:5 },
    { atomicNumber:6, atomicSymbol:'C', atomicName:'Carbon', description:5 },
    { atomicNumber:7, atomicSymbol:'N', atomicName:'Nitrogen', description:5 },
    { atomicNumber:8, atomicSymbol:'O', atomicName:'Oxygen', description:5 },
    { atomicNumber:9, atomicSymbol:'F', atomicName:'Fluorine', description:5 },
    { atomicNumber:10, atomicSymbol:'Ne', atomicName:'Neon', description:2 },

    // row 3
    { labelTxt:'3' },
    { atomicNumber:11, atomicSymbol:'Na', atomicName:'Sodium', description:3 },
    { atomicNumber:12, atomicSymbol:'Mg', atomicName:'Magnesium', description:4 },
    { labelTxt:'3' },
    { labelTxt:'4' },
    { labelTxt:'5' },
    { labelTxt:'6' },
    { labelTxt:'7' },
    { labelTxt:'8' },
    { labelTxt:'9' },
    { labelTxt:'10' },
    { labelTxt:'11' },
    { labelTxt:'12' },
    { atomicNumber:13, atomicSymbol:'Al', atomicName:'Aluminum', description:6 },
    { atomicNumber:14, atomicSymbol:'Si', atomicName:'Silicon', description:5 },
    { atomicNumber:15, atomicSymbol:'P', atomicName:'Phosphorus', description:5 },
    { atomicNumber:16, atomicSymbol:'S', atomicName:'Sulfur', description:5 },
    { atomicNumber:17, atomicSymbol:'Cl', atomicName:'Chlorine', description:5 },
    { atomicNumber:18, atomicSymbol:'Ar', atomicName:'Argon', description:2 },

    // row 4
    { labelTxt:'4' },
    { atomicNumber:19, atomicSymbol:'K', atomicName:'Potassium', description:3 },
    { atomicNumber:20, atomicSymbol:'Ca', atomicName:'Calcium', description:4 },
    { atomicNumber:21, atomicSymbol:'Sc', atomicName:'Scandium', description:7 },
    { atomicNumber:22, atomicSymbol:'Ti', atomicName:'Titanium', description:7 },
    { atomicNumber:23, atomicSymbol:'V', atomicName:'Vanadium', description:7 },
    { atomicNumber:24, atomicSymbol:'Cr', atomicName:'Chromium', description:7 },
    { atomicNumber:25, atomicSymbol:'Mn', atomicName:'Manganese', description:7 },
    { atomicNumber:26, atomicSymbol:'Fe', atomicName:'Iron', description:7 },
    { atomicNumber:27, atomicSymbol:'Co', atomicName:'Cobalt', description:7 },
    { atomicNumber:28, atomicSymbol:'Ni', atomicName:'Nickel', description:7 },
    { atomicNumber:29, atomicSymbol:'Cu', atomicName:'Copper', description:7 },
    { atomicNumber:30, atomicSymbol:'Zn', atomicName:'Zinc', description:7 },
    { atomicNumber:31, atomicSymbol:'Ga', atomicName:'Gallium', description:6 },
    { atomicNumber:32, atomicSymbol:'Ge', atomicName:'Germanium', description:6 },
    { atomicNumber:33, atomicSymbol:'As', atomicName:'Arsenic', description:5 },
    { atomicNumber:34, atomicSymbol:'Se', atomicName:'Selenium', description:5 },
    { atomicNumber:35, atomicSymbol:'Br', atomicName:'Bromine', description:5 },
    { atomicNumber:36, atomicSymbol:'Kr', atomicName:'Krypton', description:2 },

    // row 5
    { labelTxt:'5' },
    { atomicNumber:37, atomicSymbol:'Rb', atomicName:'Rubidium', description:3 },
    { atomicNumber:38, atomicSymbol:'Sr', atomicName:'Strontium', description:4 },
    { atomicNumber:39, atomicSymbol:'Y', atomicName:'Yttrium', description:7 },
    { atomicNumber:40, atomicSymbol:'Zr', atomicName:'Zirconium', description:7 },
    { atomicNumber:41, atomicSymbol:'Nb', atomicName:'Niobium', description:7 },
    { atomicNumber:42, atomicSymbol:'Mo', atomicName:'Molybdenum', description:7 },
    { atomicNumber:43, atomicSymbol:'Tc', atomicName:'Technetium', description:7 },
    { atomicNumber:44, atomicSymbol:'Ru', atomicName:'Ruthenium', description:7 },
    { atomicNumber:45, atomicSymbol:'Rh', atomicName:'Rhodium', description:7 },
    { atomicNumber:46, atomicSymbol:'Pd', atomicName:'Palladium', description:7 },
    { atomicNumber:47, atomicSymbol:'Ag', atomicName:'Silver', description:7 },
    { atomicNumber:48, atomicSymbol:'Cd', atomicName:'Cadmium', description:7 },
    { atomicNumber:49, atomicSymbol:'In', atomicName:'Indium', description:6 },
    { atomicNumber:50, atomicSymbol:'Sn', atomicName:'Tin', description:6 },
    { atomicNumber:51, atomicSymbol:'Sb', atomicName:'Antimony', description:6 },
    { atomicNumber:52, atomicSymbol:'Te', atomicName:'Tellurium', description:5 },
    { atomicNumber:53, atomicSymbol:'I', atomicName:'Iodine', description:5 },
    { atomicNumber:54, atomicSymbol:'Xe', atomicName:'Xenon', description:2 },

    // row 6
    { labelTxt:'6' },
    { atomicNumber:55, atomicSymbol:'Cs', atomicName:'Cesium', description:3 },
    { atomicNumber:56, atomicSymbol:'Ba', atomicName:'Barium', description:4 },
    { atomicNumber:57, atomicSymbol:'La', atomicName:'Lanthanum', description:7 },
    { atomicNumber:72, atomicSymbol:'Hf', atomicName:'Hafnium', description:7 },
    { atomicNumber:73, atomicSymbol:'Ta', atomicName:'Tantalum', description:7 },
    { atomicNumber:74, atomicSymbol:'W', atomicName:'Tungsten', description:7 },
    { atomicNumber:75, atomicSymbol:'Re', atomicName:'Rhenium', description:7 },
    { atomicNumber:76, atomicSymbol:'Os', atomicName:'Osmium', description:7 },
    { atomicNumber:77, atomicSymbol:'Ir', atomicName:'Iridium', description:7 },
    { atomicNumber:78, atomicSymbol:'Pt', atomicName:'Platinum', description:7 },
    { atomicNumber:79, atomicSymbol:'Au', atomicName:'Gold', description:7 },
    { atomicNumber:80, atomicSymbol:'Hg', atomicName:'Mercury', description:7 },
    { atomicNumber:81, atomicSymbol:'Tl', atomicName:'Thallium', description:6 },
    { atomicNumber:82, atomicSymbol:'Pb', atomicName:'Lead', description:6 },
    { atomicNumber:83, atomicSymbol:'Bi', atomicName:'Bismuth', description:6 },
    { atomicNumber:84, atomicSymbol:'Po', atomicName:'Polonium', description:6 },
    { atomicNumber:85, atomicSymbol:'At', atomicName:'Astatine', description:5 },
    { atomicNumber:86, atomicSymbol:'Rn', atomicName:'Radon', description:2 },

    // row 7
    { labelTxt:'7'},
    { atomicNumber:87, atomicSymbol:'Fr', atomicName:'Francium', description:3 },
    { atomicNumber:88, atomicSymbol:'Ra', atomicName:'Radium', description:4 },
    { atomicNumber:89, atomicSymbol:'Ac', atomicName:'Actinium', description:7 },
    { atomicNumber:104, atomicSymbol:'Rf', atomicName:'Rutherfordium', description:7 },
    { atomicNumber:105, atomicSymbol:'Db', atomicName:'Dubnium', description:7 },
    { atomicNumber:106, atomicSymbol:'Sg', atomicName:'Seaborgium', description:7 },
    { atomicNumber:107, atomicSymbol:'Bh', atomicName:'Bohrium', description:7 },
    { atomicNumber:108, atomicSymbol:'Hs', atomicName:'Hassium', description:7 },
    { atomicNumber:109, atomicSymbol:'Mt', atomicName:'Meitnerium', description:7 },
    { atomicNumber:110, atomicSymbol:'Ds', atomicName:'Darmstadtium', description:7 },
    {}, // 111
    {}, // 112
    {}, // 113
    {}, // 114
    {}, // 115
    {}, // 116
    {}, // 117
    {}, // 118

    // row 8
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},

    // row 9
    {},
    {},
    {},
    {},
    { atomicNumber:58, atomicSymbol:'Ce', atomicName:'Cerium', description:8 },
    { atomicNumber:59, atomicSymbol:'Pr', atomicName:'Praseodymium', description:8 },
    { atomicNumber:60, atomicSymbol:'Nd', atomicName:'Neodymium', description:8 },
    { atomicNumber:61, atomicSymbol:'Pm', atomicName:'Promethium', description:8 },
    { atomicNumber:62, atomicSymbol:'Sm', atomicName:'Samarium', description:8 },
    { atomicNumber:63, atomicSymbol:'Eu', atomicName:'Europium', description:8 },
    { atomicNumber:64, atomicSymbol:'Gd', atomicName:'Gadolinium', description:8 },
    { atomicNumber:65, atomicSymbol:'Tb', atomicName:'Terbium', description:8 },
    { atomicNumber:66, atomicSymbol:'Dy', atomicName:'Dysprosium', description:8 },
    { atomicNumber:67, atomicSymbol:'Ho', atomicName:'Holmium', description:8 },
    { atomicNumber:68, atomicSymbol:'Er', atomicName:'Erbium', description:8 },
    { atomicNumber:69, atomicSymbol:'Tm', atomicName:'Thulium', description:8 },
    { atomicNumber:70, atomicSymbol:'Yb', atomicName:'Ytterbium', description:8 },
    { atomicNumber:71, atomicSymbol:'Lu', atomicName:'Lutetium', description:8 },
    {},

    // row 10
    {},
    {},
    {},
    {},
    { atomicNumber:90, atomicSymbol:'Th', atomicName:'Thorium', description:8 },
    { atomicNumber:91, atomicSymbol:'Pa', atomicName:'Protactinium', description:8 },
    { atomicNumber:92, atomicSymbol:'U', atomicName:'Uranium', description:8 },
    { atomicNumber:93, atomicSymbol:'Np', atomicName:'Neptunium', description:8 },
    { atomicNumber:94, atomicSymbol:'Pu', atomicName:'Plutonium', description:8 },
    { atomicNumber:95, atomicSymbol:'Am', atomicName:'Americium', description:8 },
    { atomicNumber:96, atomicSymbol:'Cm', atomicName:'Curium', description:8 },
    { atomicNumber:97, atomicSymbol:'Bk', atomicName:'Berkelium', description:8 },
    { atomicNumber:98, atomicSymbol:'Cf', atomicName:'Californium', description:8 },
    { atomicNumber:99, atomicSymbol:'Es', atomicName:'Einsteinium', description:8 },
    { atomicNumber:100, atomicSymbol:'Fm', atomicName:'Fermium', description:8 },
    { atomicNumber:101, atomicSymbol:'Md', atomicName:'Mendelevium', description:8 },
    { atomicNumber:102, atomicSymbol:'No', atomicName:'Nobelium', description:8 },
    { atomicNumber:103, atomicSymbol:'Lr', atomicName:'Lawrencium', description:8 },
    {}
];
