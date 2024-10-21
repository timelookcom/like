
const categories = ['LUNCH', 'DINNER', 'SUSHI', 'APPETIZERS', 'DESSERTS'];


const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
};


const initEventListeners = () => {
    const specialsTile = document.getElementById('specials-tile');
    specialsTile.addEventListener('click', () => {
        const randomCategory = getRandomCategory();
        console.log(`Loading menu for: ${randomCategory}`); 
        $dc.loadMenuItems(randomCategory);
    });
};


document.addEventListener('DOMContentLoaded', initEventListeners);
