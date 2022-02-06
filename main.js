var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function (img){
        block_object_image= img;
        block_object_image.scaleToWidth(800);
        block_object_image.scaleToHeight(600);
        block_object_image.set({top: 0, left: 0});
    
    canvas.add(block_object_image);
});
}

function playSound(){
	x.play("bdayaudio.mp3")
}
