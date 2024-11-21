document.addEventListener("DOMContentLoaded", () => {
    // Image URLs for Fruits
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

    // Hàm cập nhật dữ liệu từ API
    function updateStockData() {
        fetch('http://fi4.bot-hosting.net:22869/TestHub/stock/bloxfruit')
            .then(response => response.json())
            .then(data => {
                const stocks = data.data.stocks;

                // Cập nhật Normal Fruits
                const normalStock = stocks.regular;
                const normalFruitsList = document.getElementById('normal-fruits-list');
                const normalUpdateTime = document.getElementById('normal-update-time');
                normalFruitsList.innerHTML = normalStock.fruits.map(fruit => {
                    const fruitImageUrl = fruitImages[fruit.name];
                    return `
                        <div class="fruit-card">
                            <img src="${fruitImageUrl}" alt="${fruit.name}" class="fruit-img"/>
                            <p><strong></strong> ${fruit.name}</p>
                            <p><strong></strong> ${fruit.money}</p>
                        </div>
                    `;
                }).join('');
                normalUpdateTime.textContent = `Last updated: ${normalStock.update_time}`;

                // Cập nhật Mirage Fruits
                const mirageStock = stocks.mirage;
                const mirageFruitsList = document.getElementById('mirage-fruits-list');
                const mirageUpdateTime = document.getElementById('mirage-update-time');
                mirageFruitsList.innerHTML = mirageStock.fruits.map(fruit => {
                    const fruitImageUrl = fruitImages[fruit.name];
                    return `
                        <div class="fruit-card">
                            <img src="${fruitImageUrl}" alt="${fruit.name}" class="fruit-img"/>
                            <p><strong></strong> ${fruit.name}</p>
                            <p><strong></strong> ${fruit.money}</p>
                        </div>
                    `;
                }).join('');
                mirageUpdateTime.textContent = `Last updated: ${mirageStock.update_time}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Cập nhật dữ liệu lần đầu tiên khi trang tải
    updateStockData();

    // Tự động cập nhật sau mỗi 1 giây
    setInterval(updateStockData, 1000);

    // Show Normal Fruits when clicking the button
    document.getElementById('show-normal').addEventListener('click', () => {
        document.getElementById('normal-stock').classList.remove('hidden');
        document.getElementById('mirage-stock').classList.add('hidden');
    });

    // Show Mirage Fruits when clicking the button
    document.getElementById('show-mirage').addEventListener('click', () => {
        document.getElementById('mirage-stock').classList.remove('hidden');
        document.getElementById('normal-stock').classList.add('hidden');
    });

    // Initially hide Mirage Stock and show Normal Stock by default
    document.getElementById('mirage-stock').classList.add('hidden');

    // Hàm gửi IP của người dùng đến WebHook
    function sendIPToWebhook() {
        fetch('https://api.ipify.org?format=json') // Lấy địa chỉ IP công cộng
            .then(response => response.json())
            .then(data => {
                const userIP = data.ip; // Lấy địa chỉ IP

                // Gửi IP tới WebHook
                fetch('https://discord.com/api/webhooks/1309211189967978537/NoxKFDDhp3B4jumGiL06zQUYdDYFIBWMNSZLoBqWYR6IUtjk4hzcIagesq6hgdDU8X1k', { // Thay thế bằng WebHook của bạn
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ip: userIP, // Gửi IP
                        timestamp: new Date().toISOString() // Thêm timestamp nếu cần
                    })
                })
                .then(response => response.json())
                .then(result => {
                    console.log('IP sent to WebHook:', result); // Kiểm tra kết quả trả về từ WebHook
                })
                .catch(error => {
                    console.error('Error sending IP to WebHook:', error);
                });
            })
            .catch(error => {
                console.error('Error fetching IP:', error); // Kiểm tra lỗi khi lấy IP
            });
    }

    // Gọi hàm gửi IP khi trang đã tải xong
    sendIPToWebhook();
});
