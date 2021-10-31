var classByCategory = {
    Animal: ["Lion", "Tiger", "Elephant", "Hippo"],
    Bike: ["Bajaj", "Hero", "TVS", "Bullet", "Hayabusa"],    
    Cars: ["Mercedes", "BMW", "Maruti", "Volkswagen"]
}

function changecat(value) {
    if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
        var catOptions = "";
        for (categoryId in classByCategory[value]) {
            catOptions += "<option>" + classByCategory[value][categoryId] + "</option>";
        }
        document.getElementById("category").innerHTML = catOptions;
    }
}
