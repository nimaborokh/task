let tbody = document.getElementById("tbody");
let checkAll = document.getElementById("checkAll");
const arr = [
    { id: 1, name: "nima" },
    { id: 2, name: "mmd" },
    { id: 3, name: "mohsen" },
    { id: 4, name: "daryosh" },
    { id: 5, name: "soheyl" },
];
let name = arr.map((name) => {
    return name.name;
});
let id = arr.map((i) => {
    return i.id;
});

for (let i = 0; i < arr.length; i++) {
    let elm = document.createElement("tr");
    let elm2 = document.createElement("td");
    let elm3 = document.createElement("td");
    let elm4 = document.createElement("input");
    elm4.type = "checkbox";
    elm4.id = id[i];
    elm4.onclick = handle;
    elm4.className = "inputs";
    elm2.innerHTML = name[i];
    elm.appendChild(elm2);
    elm.appendChild(elm3);
    elm3.appendChild(elm4);
    tbody.appendChild(elm);
}
let inputs = document.querySelectorAll(".inputs");
function showId() {
    let active = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            active.push(inputs[i].id);
        }
    }
    console.log(active);
}
function check() {
    if (checkAll.checked) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].checked = true;
        }
    } else {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
    }
}
function handle() {
    let arr3 = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            arr3.push(inputs[i].checked);
        }
    }
    if (arr3.length == inputs.length) {
        checkAll.checked = true;
    } else {
        checkAll.checked = false    ;
    }
}
