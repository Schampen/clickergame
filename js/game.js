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
powerup.addEventListener('click', () => {
    if (bank >= donkeyCost) {
        bank = bank - donkeyCost;
        powerupvalue++;
        donkeyCost = donkeyCost * 3;
        gameButton.textContent = Math.floor(bank);
        donkey.textContent = Math.floor(donkeyCost)
        bankElement.textContent = "Du köpte en Donkey...";
    } else {
        bankElement.textContent = "Du har inte råd med en Donkey";
    }
});

function step() {
    bank += powerupvalue;
    game.textContent = Math.floor(bank);
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);