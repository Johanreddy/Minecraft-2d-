var canvas=new fabric.Canvas("myCanvas")
blockimagewidth=30
blockimageheight=30
x=10
y=10
var player_object=""
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:y,
            left:x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(blockimagewidth);
        block_image_object.scaleToHeight(blockimageheight);
        block_image_object.set({
            top:y,
            left:x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if(e.shiftKey==true && keypressed=="80"){
        console.log("m and shift pressed together");
        blockimagewidth = blockimagewidth + 10;
        blockimageheight = blockimageheight + 10;
        document.getElementById("cw").innerHTML=blockimagewidth;
        document.getElementById("ch").innerHTML=blockimageheight;
    

    }

    if(e.shiftKey==true && keypressed=="77"){
        console.log("m and shift pressed together");
        blockimagewidth = blockimagewidth - 10;
        blockimageheight = blockimageheight - 10;
        document.getElementById("cw").innerHTML=blockimagewidth;
        document.getElementById("ch").innerHTML=blockimageheight;
      

    }
    if(keypressed=='87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keypressed=='76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keypressed=='84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89'){
        new_image('yellow_wall.png');
        console.log("y");
    }  
    if(keypressed=='68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypressed=='85'){
        new_image('different.png');
        console.log("u");
    }
    if(keypressed=='67'){
        new_image('cloud.jpg');
        console.log("c");
    }
    if(keypressed =='37'){
     left()
    }
    if(keypressed =='38'){
        up()
       }
       if(keypressed =='39'){
        right()
       }
       if(keypressed =='40'){
        down()
       }

}
function left(){
    if(x>0){
        x=x-blockimagewidth
        canvas.remove(player_object)
        player_update()
    }
}
function right(){
    if(x<850){
        x=x+blockimagewidth
        canvas.remove(player_object)
        player_update()
    }
}
function up(){
    if(y>0){
        y=y-blockimageheight
        canvas.remove(player_object)
        player_update()
    }
}
function down(){
    if(y<650){
        y=y+blockimageheight
        canvas.remove(player_object)
        player_update()
    }
}