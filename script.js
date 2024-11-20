// API URL
const apiURL = 'http://fi4.bot-hosting.net:22869/TestHub/stock/bloxfruit';

// Image URLs for Fruits (Replace with actual URLs from Blox Fruits Wiki)
// Image URLs for Fruits (Replace with actual URLs from Blox Fruits Wiki)
const fruitImages = {
    "Rocket": "https://static.wikia.nocookie.net/roblox-blox-piece/images/d/d4/RocketFruit.png/",
    "Spin": "https://static.wikia.nocookie.net/roblox-blox-piece/images/d/dc/SpinFruit.png/",
    "Chop": "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/51/ChopFruit.png/",
    "Spring": "https://static.wikia.nocookie.net/roblox-blox-piece/images/4/46/SpringFruit.png/",
    "Bomb": "https://static.wikia.nocookie.net/roblox-blox-piece/images/7/7d/BombFruit.png/",
    "Smoke": "https://static.wikia.nocookie.net/roblox-blox-piece/images/6/68/SmokeFruit.png/",
    "Spike": "https://static.wikia.nocookie.net/roblox-blox-piece/images/2/2d/SpikeFruit.png/",
    "Flame": "https://static.wikia.nocookie.net/roblox-blox-piece/images/b/b8/FlameFruit.png/",
    "Falcon": "https://static.wikia.nocookie.net/roblox-blox-piece/images/7/7d/FalconFruit.png/",
    "Ice": "https://static.wikia.nocookie.net/roblox-blox-piece/images/7/74/IceFruit.png/",
    "Sand": "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/55/SandFruit.png/",
    "Dark": "https://static.wikia.nocookie.net/roblox-blox-piece/images/c/c2/DarkFruit.png/",
    "Diamond": "https://static.wikia.nocookie.net/roblox-blox-piece/images/6/6d/DiamondFruit.png/",
    "Light": "https://static.wikia.nocookie.net/roblox-blox-piece/images/f/f8/LightFruit.png/",
    "Rubber": "https://static.wikia.nocookie.net/roblox-blox-piece/images/b/bc/RubberFruit.png/",
    "Barrier": "https://static.wikia.nocookie.net/roblox-blox-piece/images/0/0a/BarrierFruit.png/",
    "Ghost": "https://static.wikia.nocookie.net/roblox-blox-piece/images/4/4e/GhostFruit.png/",
    "Magma": "https://static.wikia.nocookie.net/roblox-blox-piece/images/7/73/MagmaFruit.png/",
    "Quake": "https://static.wikia.nocookie.net/roblox-blox-piece/images/2/23/QuakeFruit.png/",
    "Buddha": "https://static.wikia.nocookie.net/roblox-blox-piece/images/6/6e/BuddhaFruit.png/",
    "Love": "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/5a/LoveFruit.png/",
    "Spider": "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/82/SpiderFruit.png/",
    "Sound": "https://static.wikia.nocookie.net/roblox-blox-piece/images/f/f4/SoundFruit.png/",
    "Phoenix": "https://static.wikia.nocookie.net/roblox-blox-piece/images/1/11/PhoenixFruit.png/",
    "Portal": "https://static.wikia.nocookie.net/roblox-blox-piece/images/e/e4/PortalFruit.png/",
    "Rumble": "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/89/RumbleFruit.png/",
    "Pain": "https://static.wikia.nocookie.net/roblox-blox-piece/images/3/3f/PainFruit.png/",
    "Blizzard": "https://static.wikia.nocookie.net/roblox-blox-piece/images/d/de/BlizzardFruit.png/",
    "Gravity": "https://static.wikia.nocookie.net/roblox-blox-piece/images/2/22/GravityFruit.png/",
    "Mammoth": "https://static.wikia.nocookie.net/roblox-blox-piece/images/d/d3/MammothFruit.png/",
    "T-Rex": "https://static.wikia.nocookie.net/roblox-blox-piece/images/e/ea/T-RexFruit.png/",
    "Dough": "https://static.wikia.nocookie.net/roblox-blox-piece/images/9/9f/DoughFruit.png/",
    "Shadow": "https://static.wikia.nocookie.net/roblox-blox-piece/images/2/2d/ShadowFruit.png/",
    "Venom": "https://static.wikia.nocookie.net/roblox-blox-piece/images/b/b7/VenomFruit.png/",
    "Control": "https://static.wikia.nocookie.net/roblox-blox-piece/images/0/01/ControlFruit.png/",
    "Spirit": "https://static.wikia.nocookie.net/roblox-blox-piece/images/0/02/SpiritFruit.png/",
    "Dragon": "https://static.wikia.nocookie.net/roblox-blox-piece/images/4/43/DragonFruit.png/",
    "Leopard": "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/8c/LeopardFruit.png/",
    "Kitsune": "https://static.wikia.nocookie.net/roblox-blox-piece/images/c/c3/KitsuneFruit.png/"
    // Add more fruits and their images here...
};

// Function to fetch stock data and update the page
function fetchAndUpdateStockData() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            displayStockData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display stock data
function displayStockData(data) {
    // Extract Normal and Mirage stock data
    const normalStock = data.stocks.regular.fruits;
    const normalCountdown = document.getElementById('normalCountdown');
    const normalFruitsContainer = document.getElementById('normalFruits');

    const mirageStock = data.stocks.mirage.fruits;
    const mirageCountdown = document.getElementById('mirageCountdown');
    const mirageFruitsContainer = document.getElementById('mirageFruits');

    // Set countdown text for Normal and Mirage stock
    normalCountdown.textContent = `Next Stock In: \n ${data.stocks.regular.update_time}`;
    mirageCountdown.textContent = `Next Stock In: \n ${data.stocks.mirage.update_time}`;

    // Display Normal fruits
    normalFruitsContainer.innerHTML = normalStock.map(fruit => {
        return `
            <div class="fruit">
                <img src="${fruitImages[fruit.name]}" alt="${fruit.name}">
                <p>${fruit.name}<br>${fruit.money}</p>
            </div>
        `;
    }).join('');

    // Display Mirage fruits
    mirageFruitsContainer.innerHTML = mirageStock.map(fruit => {
        return `
            <div class="fruit">
                <img src="${fruitImages[fruit.name]}" alt="${fruit.name}">
                <p>${fruit.name}<br>${fruit.money}</p>
            </div>
        `;
    }).join('');
}

// Toggle between Normal and Mirage stock
document.getElementById('normalTab').addEventListener('click', function () {
    document.getElementById('normalStock').classList.add('active');
    document.getElementById('mirageStock').classList.remove('active');
});

document.getElementById('mirageTab').addEventListener('click', function () {
    document.getElementById('mirageStock').classList.add('active');
    document.getElementById('normalStock').classList.remove('active');
});

// Update the stock data every 1 second
setInterval(fetchAndUpdateStockData, 1000); // Refresh every 1 second

// Initial data load when the page is loaded
fetchAndUpdateStockData();
