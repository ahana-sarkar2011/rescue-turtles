AFRAME.registerComponent("gamerules",{
    init:function(){
       turtlenumber=5
       this.el.addEventListener("collide",function(e){
        turtlenumber=turtlenumber-1
        e.detail.target.el.remove();
        turtlenumbertext=document.getElementById("text1")
        turtlenumbertext.setAttribute("text",{value:String(turtlenumber)})
        if (turtlenumber==0){
            winnersign=document.getElementById("text2")
            winnersign.setAttribute("text", {value:"You Win"})
        }
       }) 
    }
})