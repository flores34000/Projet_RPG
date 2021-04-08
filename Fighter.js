// Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana.

class Fighter extends Character{
    constructor(hp = 12, dmg = 4, mana = 40, name = "Grace", status ){
        super(hp, dmg, mana, name, status);
    }
    

    darkVision(victim){
        if (this.mana > 20){
            victim.takeDamage(5);
            this.mana -= 20;

        }
        else{
            console.log("Il faut que tes Mana sois superieur à 20")
        }
    }
}

const grace = new Fighter()
console.log(`${grace.name} `)