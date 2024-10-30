
//constructor 
function Player(name) {
    this.name = name;
    this.level = 1;   
    this.points = 0;  
}

//method to add xp (gain xp)
Player.prototype.gainXp = function(xp) {
    this.points += xp;  // Add xp to points
    
    // Level up if points reach 10 or more
    while (this.points >= 10) {
        this.level += 1;       // Increase level by 1
        this.points -= 10;     // Deduct 10 points
    }
};


//simple method to describe the attributes
Player.prototype.describe = function() {
    console.log(`Player: ${this.name}, Level: ${this.level}, Points: ${this.points}`);
};

//now I will create the object and use the functions (methods)
const player1 = new Player("Geraldo");
player1.gainXp(2);
player1.gainXp(4);
player1.describe();  
player1.gainXp(10);
player1.describe(); 




