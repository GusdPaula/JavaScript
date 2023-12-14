const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "sushi";

function openFridge(...foods){
    console.log(foods)
}

openFridge(food1, food2, food3, food4);