// L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.

class Assassin extends Character{
    constructor(hp = 6, dmg = 6, mana = 20, name = "Carl", status ){
        super(hp, dmg, mana, name, status);
    }

    shadowHit (victim) {
        if(this.mana >=20){
            this.mana -= 20;
            victim.takeDamage(7);
            if(victim.hp > 0){
                this.hp -= 7
            }
        }
        else{
            console.log("Il faut que tes Mana sois superieur à 20")
        }
    }
   
}
            
const carl = new Assassin()
console.log(`${carl.name} `)




