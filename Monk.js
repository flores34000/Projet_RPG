// Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.
class Monk extends Character{
    constructor(hp = 8, dmg = 2, mana = 200, name = "Moana", status ){
        super(hp, dmg, mana, name, status);
    }
    heal(){
        if(this.mana > 25){
            this.mana -= 25;
            this.hp += 8;

        }
        else{
            console.log("Il faut que tes Mana sois superieur à 25")
        }
    }
    
}
const moana = new Monk()
console.log(`${moana.name} `)