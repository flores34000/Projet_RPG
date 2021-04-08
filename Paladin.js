// Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
class Paladin extends Character{
    constructor(hp = 16, dmg = 3, mana = 160, name = "Ulder", status){
        super(hp, dmg, mana, name, status);
    }
    
    
    healingLighting (victim) {
        if (this.mana >= 40){
            victim.takeDamage(4);
            this.mana -= 40;
            this.hp += 5;
        }
        else{
            console.log("Il faut que tes Mana sois superieur à 40")
        }
    
    
    }
}
const paladin = new Paladin()
console.log(`${paladin.name} `)