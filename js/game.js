/* välj element */
let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");

/* variabel för att spara bank */
let bank = 0;
let gainedByClick = 1;
/*Kostnader för powerups*/
let biggerHandsCost = 10;
let moreLayersCost = 500;
let betterBabiesCost = 10000;
let donkeyCost = 130;
let powerupvalue = 0;
let powerupval2 = 0;
let powerupval3 = 0;
let pussCost = 1360;
let dragCost = 136000;
/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += gainedByClick;
    gameButton.textContent = Math.floor(bank);
});

/* skapa ett powerup-element */
let biggerHands = document.getElementById("bighands");
biggerHands.textContent = biggerHandsCost;
biggerHands.addEventListener('click', function() {
    if (bank >= biggerHandsCost) {
        bank = bank - biggerHandsCost;
        biggerHandsCost = biggerHandsCost * 1.15;
        gainedByClick = gainedByClick * 1.05;
        gameButton.textContent = Math.floor(bank);
        biggerHands.textContent = Math.floor(biggerHandsCost);
        bankElement.textContent = "Du köpte bigger hands!";
    } else {
        bankElement.textContent = "Du har inte råd med bigger hands!";
    }
});
let moreLayers = document.getElementById("layers");
moreLayers.textContent = moreLayersCost;
moreLayers.addEventListener('click', function() {
    if (bank >= moreLayersCost) {
        bank = bank - moreLayersCost;
        moreLayersCost = moreLayersCost * 1.25;
        gainedByClick = gainedByClick * 1.12;
        gameButton.textContent = Math.floor(bank);
        moreLayers.textContent = Math.floor(moreLayersCost);
        bankElement.textContent = "Du köpte more layers!";
    } else {
        bankElement.textContent = "Du har inte råd med more layers!";
    }
});
let betterBabies = document.getElementById("babies");
betterBabies.textContent = betterBabiesCost;
betterBabies.addEventListener('click', function() {
    if (bank >= betterBabiesCost) {
        bank = bank - betterBabiesCost;
        betterBabiesCost = betterBabiesCost * 1.4;
        gainedByClick = gainedByClick * 1.3;
        gameButton.textContent = Math.floor(bank);
        betterBabies.textContent = Math.floor(betterBabiesCost);
        bankElement.textContent = "Du köpte better babies!";
    } else {
        bankElement.textContent = "Du har inte råd med better babies!";
    }
});

let donkey = document.getElementById("donkey");
donkey.textContent = donkeyCost;
donkey.addEventListener('click', function() {
    if (bank >= donkeyCost) {
        bank = bank - donkeyCost;
        powerupvalue+=0.1;
        donkeyCost = donkeyCost * 1.12;
        gameButton.textContent = Math.floor(bank);
        donkey.textContent = Math.floor(donkeyCost)
        bankElement.textContent = "Du betalade för att sälja en Donkey... men den kom tillbaka";
    } else {
        bankElement.textContent = "Du har inte råd med att sälja en Donkey";
    }
});

let pussinboots = document.getElementById("pussinboots");
pussinboots.textContent = pussCost;
pussinboots.addEventListener('click', function() {
    if (bank >= pussCost) {
        bank = bank - pussCost;
        powerupvalue+=1;
        pussCost = pussCost * 1.43;
        gameButton.textContent = Math.floor(bank);
        pussinboots.textContent = Math.floor(pussCost)
        bankElement.textContent = "Du mutade Puss in Boots";
    } else {
        bankElement.textContent = "Du har inte råd med Puss in Boots";
    }
});

let dragon = document.getElementById("dragon");
dragon.textContent = dragCost;
dragon.addEventListener('click', function() {
    if (bank >= dragCost) {
        bank = bank - dragCost;
        powerupvalue+=5;
        dragCost = dragCost * 1.7;
        gameButton.textContent = Math.floor(bank);
        dragon.textContent = Math.floor(dragCost)
        bankElement.textContent = "Du köpte Dragon";
    } else {
        bankElement.textContent = "Du har inte råd med Dragon";
    }
});

function step() {
    bank += powerupvalue;
    game.textContent = Math.floor(bank);
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);