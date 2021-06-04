class Player{
    constructor(){}
    getCount(){
        var kush1=database.ref("playerCount")
        kush1.on("value",function(data){
            playerCount=data.val()
        })
    }   
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    } 
}