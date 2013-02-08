var onLoad = function () {
    var periodicTable = document.getElementById("PeriodicTable");

    for (var r = 0; r < 11; ++r) {
        var row = document.createElement("tr");

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
                    if (atomicElement.label) {
                        var labelDiv;
                        var labelTxt;

                        labelTxt = document.createTextNode(atomicElement.label.txt);

                        labelDiv = document.createElement("div");
                        labelDiv.appendChild(labelTxt);

                        cell.className = atomicElement.label.type;
                        cell.appendChild(labelDiv);
                    }
                }
            }

            row.appendChild(cell);
        }

        periodicTable.appendChild(row);

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
        var atomicElements = containers[elem.name];
        var len = atomicElements.length;

        for (var n = 0; n < len; ++n) {
            atomicElements[n].style.visibility = elem.checked ? "visible" : "hidden";
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
    'empty', // 0
    'alkali', // 1
    'alkaliEarth', // 2
    'lanthanide', // 3
    'actinide', // 4
    'transition', // 5
    'postTransition', // 6
    'metalloid', // 7
    'nonMetal',    // 8
    'halogen', // 9
    'nobleGas', //10
    'unknown' // 11
];

var atomicElements = [
    // row 0
    {},
    { label:{ txt:'1', type:'atomicGroup' } },
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
    { label:{ txt:'18', type:'atomicGroup' } },

    // row 1
    { label:{ txt:'1', type:'atomicPeriod' } },
    { atomicNumber:1, atomicSymbol:'H', atomicName:'Hydrogen', description:8 },
    { label:{ txt:'2', type:'atomicGroup' } },
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
    { label:{ txt:'13', type:'atomicGroup' } },
    { label:{ txt:'14', type:'atomicGroup' } },
    { label:{ txt:'15', type:'atomicGroup' } },
    { label:{ txt:'16', type:'atomicGroup' } },
    { label:{ txt:'17', type:'atomicGroup' } },
    { atomicNumber:2, atomicSymbol:'He', atomicName:'Helium', description:10 },

    // row 2
    { label:{ txt:'2', type:'atomicPeriod' } },
    { atomicNumber:3, atomicSymbol:'Li', atomicName:'Lithium', description:1 },
    { atomicNumber:4, atomicSymbol:'Be', atomicName:'Beryllium', description:2 },
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
    { atomicNumber:5, atomicSymbol:'B', atomicName:'Boron', description:7 },
    { atomicNumber:6, atomicSymbol:'C', atomicName:'Carbon', description:8 },
    { atomicNumber:7, atomicSymbol:'N', atomicName:'Nitrogen', description:8 },
    { atomicNumber:8, atomicSymbol:'O', atomicName:'Oxygen', description:8 },
    { atomicNumber:9, atomicSymbol:'F', atomicName:'Fluorine', description:9 },
    { atomicNumber:10, atomicSymbol:'Ne', atomicName:'Neon', description:10 },

    // row 3
    { label:{ txt:'3', type:'atomicPeriod' } },
    { atomicNumber:11, atomicSymbol:'Na', atomicName:'Sodium', description:1 },
    { atomicNumber:12, atomicSymbol:'Mg', atomicName:'Magnesium', description:2 },
    { label:{ txt:'3', type:'atomicGroup' } },
    { label:{ txt:'4', type:'atomicGroup' } },
    { label:{ txt:'5', type:'atomicGroup' } },
    { label:{ txt:'6', type:'atomicGroup' } },
    { label:{ txt:'7', type:'atomicGroup' } },
    { label:{ txt:'8', type:'atomicGroup' } },
    { label:{ txt:'9', type:'atomicGroup' } },
    { label:{ txt:'10', type:'atomicGroup' } },
    { label:{ txt:'11', type:'atomicGroup' } },
    { label:{ txt:'12', type:'atomicGroup' } },
    { atomicNumber:13, atomicSymbol:'Al', atomicName:'Aluminum', description:6 },
    { atomicNumber:14, atomicSymbol:'Si', atomicName:'Silicon', description:7 },
    { atomicNumber:15, atomicSymbol:'P', atomicName:'Phosphorus', description:8 },
    { atomicNumber:16, atomicSymbol:'S', atomicName:'Sulfur', description:8 },
    { atomicNumber:17, atomicSymbol:'Cl', atomicName:'Chlorine', description:9 },
    { atomicNumber:18, atomicSymbol:'Ar', atomicName:'Argon', description:10 },

    // row 4
    { label:{ txt:'4', type:'atomicPeriod' } },
    { atomicNumber:19, atomicSymbol:'K', atomicName:'Potassium', description:1 },
    { atomicNumber:20, atomicSymbol:'Ca', atomicName:'Calcium', description:2 },
    { atomicNumber:21, atomicSymbol:'Sc', atomicName:'Scandium', description:5 },
    { atomicNumber:22, atomicSymbol:'Ti', atomicName:'Titanium', description:5 },
    { atomicNumber:23, atomicSymbol:'V', atomicName:'Vanadium', description:5 },
    { atomicNumber:24, atomicSymbol:'Cr', atomicName:'Chromium', description:5 },
    { atomicNumber:25, atomicSymbol:'Mn', atomicName:'Manganese', description:5 },
    { atomicNumber:26, atomicSymbol:'Fe', atomicName:'Iron', description:5 },
    { atomicNumber:27, atomicSymbol:'Co', atomicName:'Cobalt', description:5 },
    { atomicNumber:28, atomicSymbol:'Ni', atomicName:'Nickel', description:5 },
    { atomicNumber:29, atomicSymbol:'Cu', atomicName:'Copper', description:5 },
    { atomicNumber:30, atomicSymbol:'Zn', atomicName:'Zinc', description:5 },
    { atomicNumber:31, atomicSymbol:'Ga', atomicName:'Gallium', description:6 },
    { atomicNumber:32, atomicSymbol:'Ge', atomicName:'Germanium', description:7 },
    { atomicNumber:33, atomicSymbol:'As', atomicName:'Arsenic', description:7 },
    { atomicNumber:34, atomicSymbol:'Se', atomicName:'Selenium', description:8 },
    { atomicNumber:35, atomicSymbol:'Br', atomicName:'Bromine', description:9 },
    { atomicNumber:36, atomicSymbol:'Kr', atomicName:'Krypton', description:10 },

    // row 5
    { label:{ txt:'5', type:'atomicPeriod' } },
    { atomicNumber:37, atomicSymbol:'Rb', atomicName:'Rubidium', description:1 },
    { atomicNumber:38, atomicSymbol:'Sr', atomicName:'Strontium', description:2 },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { atomicNumber:46, atomicSymbol:'Pd', atomicName:'Palladium', description:5 },
    { atomicNumber:47, atomicSymbol:'Ag', atomicName:'Silver', description:5 },
    { atomicNumber:48, atomicSymbol:'Cd', atomicName:'Cadmium', description:5 },
    {},
    { atomicNumber:50, atomicSymbol:'Sn', atomicName:'Tin', description:6 },
    { atomicNumber:51, atomicSymbol:'Sb', atomicName:'Antimony', description:7 },
    { atomicNumber:52, atomicSymbol:'Te', atomicName:'Tellurium', description:7 },
    { atomicNumber:53, atomicSymbol:'I', atomicName:'Iodine', description:9 },
    { atomicNumber:54, atomicSymbol:'Xe', atomicName:'Xenon', description:10 },

    // row 6
    { label:{ txt:'6', type:'atomicPeriod' } },
    { atomicNumber:55, atomicSymbol:'Cs', atomicName:'Cesium', description:1 },
    { atomicNumber:56, atomicSymbol:'Ba', atomicName:'Barium', description:2 },
    {},
    {},
    {},
    { atomicNumber:74, atomicSymbol:'W', atomicName:'Tungsten', description:5 },
    {},
    {},
    {},
    { atomicNumber:78, atomicSymbol:'Pt', atomicName:'Platinum', description:5 },
    { atomicNumber:79, atomicSymbol:'Au', atomicName:'Gold', description:5 },
    { atomicNumber:80, atomicSymbol:'Hg', atomicName:'Mercury', description:5 },
    {},
    { atomicNumber:82, atomicSymbol:'Pb', atomicName:'Lead', description:6 },
    { atomicNumber:83, atomicSymbol:'Bi', atomicName:'Bismuth', description:6 },
    {},
    {},
    { atomicNumber:86, atomicSymbol:'Rn', atomicName:'Radon', description:10 },

    // row 7
    { label:{ txt:'7', type:'atomicPeriod' } },
    { atomicNumber:87, atomicSymbol:'Fr', atomicName:'Francium', description:1 },
    { atomicNumber:88, atomicSymbol:'Ra', atomicName:'Radium', description:2 },
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

    // row 10
    {},
    {},
    {},
    {},
    {},
    {},
    { atomicNumber:92, atomicSymbol:'U', atomicName:'Uranium', description:4 },
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
    {}
];
