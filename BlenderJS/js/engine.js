/* Blender Functions */
var stateBlender = "off";
var soundBlender = document.getElementById("blender-sound");
var buttonBlender = document.getElementById("blender-button-sound");
var blender = document.getElementById("blender");

function blenderController()
{
    if (stateBlender == "off")
    {
        stateBlender = "on";
        makeSound();
        blender.classList.add("active");
        console.log("It´s on")
        /*document.getElementById( "blender-button" ).style.backgroundColor = "green";*/
    } else
    {
        stateBlender = "off";
        makeSound();
        blender.classList.remove("active");
        console.log("It´s off")
        /*document.getElementById( "blender-button" ).style.backgroundColor = "red";*/
    }

}

function makeSound()
{
    if (soundBlender.paused)
    {
        buttonBlender.play();
        soundBlender.play();
    }
    else
    {
        buttonBlender.play();
        soundBlender.pause();
        soundBlender.currentTime = 0;
    }
}

