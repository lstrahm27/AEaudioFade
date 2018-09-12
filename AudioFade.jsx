var theComp = app.project.activeItem;
if (theComp == null || (theComp instanceof CompItem) == false) {
    alert("Nothing selected");
} else {
        var compStart = theComp.workAreaStart; //seconds
        var compEnd = compStart + theComp.workAreaDuration; //seconds
        var audioLayer = theComp.selectedLayers[0];
        if(audioLayer.hasAudio == false) {
            alert("Select the audio layer");
    } else {
        var fadeDur = prompt("Set duration of audio fade in seconds", .5);
        audioFade(fadeDur);
        }
}

function audioFade (fadeDur) {
    var myLevels = audioLayer.audio.audioLevels;
    myLevels.addKey(compStart);
    myLevels.setValueAtTime(compStart,[-15.00,-15.00]);
    myLevels.setValueAtTime(compStart+((fadeDur * 2)-fadeDur),[0.00,0.00]);
     myLevels.setValueAtTime(compEnd,[-15.00,-15.00]);
    myLevels.setValueAtTime(compEnd-fadeDur,[0.00,0.00]);   
}


