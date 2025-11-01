

// display suits
let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
console.log("Card Suits Example:", cardSuits);


// Card class, represents a single playing card
class Card {
    constructor(suit, value, rank) {
        this.suit = suit;     // e.g., "Hearts ❤️"
        this.value = value;   // e.g., "K"
        this.rank = rank;     // numeric value (2–14)
    }

    describe() {
        return `${this.value} of ${this.suit}`;
    }
}

// Deck class, holds all 52 cards and has methods to shuffle and deal
class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
    }

    // Create 52 unique cards
    createDeck() {
        const values = [
            "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "J", "Q", "K", "A"
        ];
        for (let suit of cardSuits) {
            for (let i = 0; i < values.length; i++) {
                this.cards.push(new Card(suit, values[i], i + 2)); // rank = index + 2
            }
        }
    }

    // Shuffle deck
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    // Deal cards evenly to two players
    deal() {
        const mid = this.cards.length / 2;
        return [this.cards.slice(0, mid), this.cards.slice(mid)];
    }
}

// Player class, each player has a name, hand (array of cards), and score
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    playCard() {
        // Removes top card from player’s hand
        return this.hand.shift();
    }

    incrementScore() {
        this.score++;
    }
}

// Game class, controls the entire game
class Game {
    constructor() {
        this.player1 = new Player("Oliver");
        this.player2 = new Player("Loki");
    }

    start() {
        console.log("\n--- Starting WAR Game ---\n");
        const deck = new Deck();
        deck.shuffle();

        // Deal 26 cards to each player
        const [p1Cards, p2Cards] = deck.deal();
        this.player1.hand = p1Cards;
        this.player2.hand = p2Cards;

        console.log(`${this.player1.name} and ${this.player2.name} have been dealt 26 cards each.`);
        console.log("\n--- Beginning Rounds ---\n");

        // Play 26 rounds
        for (let round = 1; round <= 26; round++) {
            console.log(`Round ${round}:`);

            const card1 = this.player1.playCard();
            const card2 = this.player2.playCard();

            console.log(
                `${this.player1.name} plays ${card1.describe()} | ${this.player2.name} plays ${card2.describe()}`
            );

            if (card1.rank > card2.rank) {
                this.player1.incrementScore();
                console.log(`${this.player1.name} wins the round!`);
            } else if (card2.rank > card1.rank) {
                this.player2.incrementScore();
                console.log(`${this.player2.name} wins the round!`);
            } else {
                console.log("It's a tie! No points awarded.");
            }

            console.log(
                `Current Score => ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}\n`
            );
        }

        // After all rounds, show final results
        console.log("--- Game Over ---");
        console.log(`Final Score => ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}`);

        if (this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} is the WINNER! 🏆`);
        } else if (this.player2.score > this.player1.score) {
            console.log(`${this.player2.name} is the WINNER! 🏆`);
        } else {
            console.log("It's a draw! 🤝");
        }
    }
}

// Start the game
const game = new Game();
game.start();




