AFRAME.registerComponent("place-side-view",{

    init:function(){
        this.createPlaces();
    },

    tick:function(){
        const placesContainer=document.querySelector("#places-container")
        const {state}=placesContainer.getAttribute("tour")
        if(state==="view" || state==="change-view"){
            this.el.setAttribute("visible",true)
        }   
        else{
            this.el.setAttribute("visible",false)
        }
    },

    createPlaces:function(){
        const sideViewContainer=document.querySelector("#side-view-container")
        let prevoiusXPosition=-150
        let prevoiusYPosition=30
        for(var i=1;i<=4;i++){
            const position={
                x:prevoiusXPosition+=50,y:prevoiusYPosition+=2,z:-40
            }
            const entityel=this.createPlaceThumbnail(position,i)
            sideViewContainer.appendChild(entityel)
        }
    },

    createPlaceThumbnail:function(position,id){
        const entityel = document.createElement("a-entity")
        entityel.setAttribute("visible",true)
        entityel.setAttribute("id",`place-${id}`)
        entityel.setAttribute("geometry",{primitive:"circle",radius:2.5})
        entityel.setAttribute("position",position)
        entityel.setAttribute("cursor-listener",{})
        entityel.setAttribute("material",{src:"./assets/360_images/helicopter.png"})
        return entityel
    },
})