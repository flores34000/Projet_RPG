class Character {
    constructor(hp, dmg, mana, name, status="playing" ){
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.name = name;
        this.status = status;

    }
    // méthode takeDamage, prenant en paramètre le nombre de dégâts à recevoir
    // Si jamais les PV d'un personnage tombent à 0, il est éliminé et ne peut plus jouer ni être attaqué. Son statut passe alors à loser
    // Lorsqu'un personnage en tue un autre, il regagne 20 point de mana.
    takeDamage(number) {
        this.hp -= number
        if (this.hp <= 0) {
            this.status = "loser";
            console.log(`Le joueur ${this.name} a perdu`);
            this.mana += 20;
          }
        }
         
            
        

    // méthode dealDamage, prenant en paramètre la victim à choisir
    
    dealDamage(victim) {
        victim.takeDamage(this.dmg)
    }
}









