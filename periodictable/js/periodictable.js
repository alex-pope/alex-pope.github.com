var onLoad = function () {
    var pTable = document.getElementById("PeriodicTable");

    for (var r = 0; r < 10; ++r) {
        var tr = document.createElement("tr");

        for (var c = 0; c < 18; ++c) {
            var tableIndex = c + 18 * r;
            var element = elements[tableIndex];
            var td = document.createElement("td");
            td.id = "c" + tableIndex.toString();

            if (element.atomicNumber && element.atomicSymbol && element.atomicName) {
                var container, div0, div1, div2;
                var atomicNumberTxt, atomicSymbolTxt, atomicNameTxt;

                atomicNumberTxt = document.createTextNode(element.atomicNumber.toString());
                atomicSymbolTxt = document.createTextNode(element.atomicSymbol);
                atomicNameTxt = document.createTextNode(element.atomicName);

                div0 = document.createElement("div");
                div0.className = "atomicNumber";
                div0.appendChild(atomicNumberTxt);

                div1 = document.createElement("div");
                div1.className = "atomicSymbol";
                div1.appendChild(atomicSymbolTxt);

                div2 = document.createElement("div");
                div2.className = "atomicName";
                div2.appendChild(atomicNameTxt);

                container = document.createElement("div");
                container.className = "container";
                container.appendChild(div0);
                container.appendChild(div1);
                container.appendChild(div2);

                td.appendChild(container);
                td.onclick = onClick;
            }
            else {
                td.className = "empty";
            }

            tr.appendChild(td);
        }

        pTable.appendChild(tr);

        containers = {
            atomicNumber:document.getElementsByClassName("atomicNumber"),
            atomicSymbol:document.getElementsByClassName("atomicSymbol"),
            atomicName:document.getElementsByClassName("atomicName")
        };

        showElementContainer = {
            atomicNumber:document.getElementById("showElementAtomicNumber"),
            atomicSymbol:document.getElementById("showElementAtomicSymbol"),
            atomicName:document.getElementById("showElementAtomicName")
        };
    }
};

var onChange = function (e) {
    if (e.name) {
        var elementInfo = containers[e.name];
        var len = elementInfo.length;

        for (var n = 0; n < len; ++n) {
            elementInfo[n].style.visibility = e.checked ? "visible" : "hidden";
        }
    }
};

var onClick = function (evt) {
    var id, domNode = evt.target;

    // loop until id is found
    while (!domNode.id) {
        domNode = domNode.parentNode;
    }

    // remove 'c' prefix
    id = domNode.id.slice(1);

    var element = elements[id];

    showElementContainer.atomicNumber.textContent = element.atomicNumber;
    showElementContainer.atomicSymbol.textContent = element.atomicSymbol;
    showElementContainer.atomicName.textContent = element.atomicName;
};

var clearShowElement = function () {
    showElementContainer.atomicNumber.textContent = "";
    showElementContainer.atomicSymbol.textContent = "";
    showElementContainer.atomicName.textContent = "";
}

var containers, showElementContainer;

var elements = [
    { atomicNumber:1, atomicSymbol:'H', atomicName:'Hydrogen' },
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
    { atomicNumber:2, atomicSymbol:'He', atomicName:'Helium' },
    { atomicNumber:3, atomicSymbol:'Li', atomicName:'Lithium' },
    { atomicNumber:4, atomicSymbol:'Be', atomicName:'Beryllium' },
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
    { atomicNumber:5, atomicSymbol:'B', atomicName:'Boron' },
    { atomicNumber:6, atomicSymbol:'C', atomicName:'Carbon' },
    { atomicNumber:7, atomicSymbol:'N', atomicName:'Nitrogen' },
    { atomicNumber:8, atomicSymbol:'O', atomicName:'Oxygen' },
    { atomicNumber:9, atomicSymbol:'F', atomicName:'Fluorine' },
    { atomicNumber:10, atomicSymbol:'Ne', atomicName:'Neon' },
    { atomicNumber:11, atomicSymbol:'Na', atomicName:'Sodium' },
    { atomicNumber:12, atomicSymbol:'Mg', atomicName:'Magnesium' },
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
    { atomicNumber:13, atomicSymbol:'Al', atomicName:'Aluminum' },
    { atomicNumber:14, atomicSymbol:'Si', atomicName:'Silicon' },
    { atomicNumber:15, atomicSymbol:'P', atomicName:'Phosphorus' },
    { atomicNumber:16, atomicSymbol:'S', atomicName:'Sulfur' },
    { atomicNumber:17, atomicSymbol:'Cl', atomicName:'Chlorine' },
    { atomicNumber:18, atomicSymbol:'Ar', atomicName:'Argon' },
    { atomicNumber:19, atomicSymbol:'K', atomicName:'Potassium' },
    { atomicNumber:20, atomicSymbol:'Ca', atomicName:'Calcium' },
    { atomicNumber:21, atomicSymbol:'Sc', atomicName:'Scandium' },
    { atomicNumber:22, atomicSymbol:'Ti', atomicName:'Titanium' },
    { atomicNumber:23, atomicSymbol:'V', atomicName:'Vanadium' },
    { atomicNumber:24, atomicSymbol:'Cr', atomicName:'Chromium' },
    { atomicNumber:25, atomicSymbol:'Mn', atomicName:'Manganese' },
    { atomicNumber:26, atomicSymbol:'Fe', atomicName:'Iron' },
    { atomicNumber:27, atomicSymbol:'Co', atomicName:'Cobalt' },
    { atomicNumber:28, atomicSymbol:'Ni', atomicName:'Nickel' },
    { atomicNumber:29, atomicSymbol:'Cu', atomicName:'Copper' },
    { atomicNumber:30, atomicSymbol:'Zn', atomicName:'Zinc' },
    { atomicNumber:31, atomicSymbol:'Ga', atomicName:'Gallium' },
    { atomicNumber:32, atomicSymbol:'Ge', atomicName:'Germanium' },
    { atomicNumber:33, atomicSymbol:'As', atomicName:'Arsenic' },
    { atomicNumber:34, atomicSymbol:'Se', atomicName:'Selenium' },
    { atomicNumber:35, atomicSymbol:'Br', atomicName:'Bromine' },
    { atomicNumber:36, atomicSymbol:'Kr', atomicName:'Krypton' },
    { atomicNumber:37, atomicSymbol:'Rb', atomicName:'Rubidium' },
    { atomicNumber:38, atomicSymbol:'Sr', atomicName:'Strontium' },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { atomicNumber:46, atomicSymbol:'Pd', atomicName:'Palladium' },
    { atomicNumber:47, atomicSymbol:'Ag', atomicName:'Silver' },
    { atomicNumber:48, atomicSymbol:'Cd', atomicName:'Cadmium' },
    {},
    { atomicNumber:50, atomicSymbol:'Sn', atomicName:'Tin' },
    { atomicNumber:51, atomicSymbol:'Sb', atomicName:'Antimony' },
    { atomicNumber:52, atomicSymbol:'Te', atomicName:'Tellurium' },
    { atomicNumber:53, atomicSymbol:'I', atomicName:'Iodine' },
    { atomicNumber:54, atomicSymbol:'Xe', atomicName:'Xenon' },
    { atomicNumber:55, atomicSymbol:'Cs', atomicName:'Cesium' },
    { atomicNumber:56, atomicSymbol:'Ba', atomicName:'Barium' },
    {},
    {},
    {},
    { atomicNumber:74, atomicSymbol:'W', atomicName:'Tungsten' },
    {},
    {},
    {},
    { atomicNumber:78, atomicSymbol:'Pt', atomicName:'Platinum' },
    { atomicNumber:79, atomicSymbol:'Au', atomicName:'Gold' },
    { atomicNumber:80, atomicSymbol:'Hg', atomicName:'Mercury' },
    {},
    { atomicNumber:82, atomicSymbol:'Pb', atomicName:'Lead' },
    { atomicNumber:83, atomicSymbol:'Bi', atomicName:'Bismuth' },
    {},
    {},
    { atomicNumber:86, atomicSymbol:'Rn', atomicName:'Radon' },
    { atomicNumber:87, atomicSymbol:'Fr', atomicName:'Francium' },
    { atomicNumber:88, atomicSymbol:'Ra', atomicName:'Radium' },
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
    { atomicNumber:92, atomicSymbol:'U', atomicName:'Uranium' },
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
    {}
];
