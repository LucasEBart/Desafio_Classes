class hero {
    constructor (nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
    atacar() {
      let ataque = ""
      if (this.tipo === "mago") {
        ataque = "usou magia"
      } else if (this.tipo === "guerreiro") {
        ataque = "usou espada"}
      else if (this.tipo === "monge") {
        ataque = "usou artes marciais"
      }else if(this.tipo === "ninja") {
        ataque = "usou shuriken"
      }else {
        ataque = "sem ataque"
      }
      console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
  }
  let novoHeroi = new hero ("duds", 23, "guerreiro")
  
  novoHeroi.atacar()