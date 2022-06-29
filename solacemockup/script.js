var invGrid = document.querySelector('#invGrid');
var box = document.querySelector(".box");
var boxSwitch = false;
invHeight = 10;
invWidth = 10;


for(var i = 0;i<invHeight*invWidth;i++){
    var box = 
    document.createElement('box');

    box.className = `box box${i}`;
    
    
    
    invGrid.appendChild(box)
    
}





function switchBox(element){
    if (boxSwitch === true)
    {
        var cursor = document.addEventListener('mousemove', e=> {
            console.clear()
            var please = (document.elementFromPoint(e.clientX, e.clientY).className)
        },{passive:true});
        

        document.querySelector().className;
       
         
        
        boxSwitch = false;
        
    }
    else if(boxSwitch===false){
        console.log("You turned the box on!");
        box.className = this.className+=" boxHover";
        boxSwitch=true;

    }


    
    
    
    

}