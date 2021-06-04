class Game{
    constructor(){}
 getState(){
     var kush=database.ref("gameState")
     kush.on("value",function(data){
         gameState=data.val()
     })
 }   
 update(state){
     database.ref("/").update({
         gameState:state
     })
 }
 async start(){
     if(gameState===0){
         player=new Player()
         var name1=await database.ref("playerCount").once("value")
         if(name1.exists()){
             playerCount=name1.val()
             player.getCount()
         }
         form=new Form()
         form.display()
     }
 }
 play(){
     form.hide()
     textSize(30)
     fill("RED")
     text("GAME START",120,100)
 }
}