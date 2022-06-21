let pizzas =[]

let pizza = class{
    constructor(id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingrediente = ingredientes;
        this.precio = precio;
    }

};

let createAndPush = (id, nombre, ingredientes, precio) => {
    let nombreNormalice = nombre.trim().toLowerCase();
    let ingredientesNormalice = ingredientes.map((ingrediente) => ingrediente.trim().toLowerCase()
    );

    return pizzas.push(
        new pizza(id, nombreNormalice, ingredientesNormalice, precio)
    );

};

createAndPush(
    1,
    " Pizza cheddar y bacon",
    [ "queso cheddar",
        "bacon",
        "salsa"  ],
    200


);

createAndPush(
    2,
    "pizza napolitana",
    ["queso",
        "tomate",
        "albahca",
        "ajo"],
        400
);

createAndPush(
    3,
    "pizza de pepperoni",
    ["pepperoni", "hoja de albahaca", "oregano"],
    550,
)

createAndPush(
    4,
    "pizza con champiñones",
    ["chapiñones", "mozzarella", "salsa"],
    600
);

createAndPush(
    5,
    "pizza hawaii",
    ["anana", "jamon", "queso", "tomate"], 
    650);

createAndPush(
    6,
    "pizza cuatro quesos",
    [ "queso azul", "queso mozzarella", "queso parmesano", "queso fontina"

    ],
    700
);

//--------------------------------



// A) pizzas con id impar:

let pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log(`Las pizzas impar son:${pizzasIdImpar.map((p) => p.nombre).join(", ")}.
`

);
console.log("Muestra de objetos con id impar", pizzasIdImpar);
console.log("-------------------");


//B)Pizzas que valgan menos de 600:

let pizzasPriceMenor600 = pizzas.filter((pizza) => pizza.precio < 600);
for (let x of pizzasPriceMenor600) {
    console.log(`${x.nombre}: $${x.precio}.`);

}

console.log(
    "muestra de objetos de pizzas con menor precio a 600:", pizzasPriceMenor600
);

console.log("------------------");


// C) nombre de todas las pizzas
console.log("El nombre de las pizzas es:");
pizzas.forEach((pizza) => console.log(`${pizza.nombre}.`));
console.log("---------------------------------");
// D)  nombre de las pizzas con su respectivo precio:
for (let pizza of pizzas) {
    console.log(`El precio de la ${pizza["nombre"]} es de $${pizza["precio"]}.`);
//E) precios de todas las pizzas:
console.log("El precio de cada pizza es:");
pizzas.forEach((pizza) => console.log(`$${pizza.precio}.`));
console.log("---------------------------------");
}
