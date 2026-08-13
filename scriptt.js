async function getDishes(){
    const res = await fetch("https://api.sampleapis.com/coffee/hot");
    if (!res.ok) {
        throw new Error("HTTP" + res.status);

    }
    const dishes = await res.json();
    return dishes;
}
const list = document.querySelector("#list");
async function load() {
    try {
        const dishes = await getDishes();
        list.innerHTML = "";
        dishes.forEach(dish => {
            const li = document.createElement("li");
            li.textContent =  `${d.id} - ${dish.title}`;
            list.appendChild(li);
        });
    }
     catch (error) {
        console.error(error.message);
    }
}
load();
