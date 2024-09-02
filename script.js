window.onload = function () {
    // Lyssna efter händels
    //document.getElementsByClassName("profile")
    const profiles = document.getElementsByClassName("profile");


    //en for loop för att gå igenom alla bilder.
    for (let i = 0; i < profiles.length; i++) {
        const profile = profiles[i];

        if (profile && profile.id) {
            // mouseenter eventlistener
            profile.addEventListener("mouseenter", function () {
                effectOn(profile.id);
            });

            // mouseleave eventlistener
            profile.addEventListener("mouseleave", function () {
                effectOff(profile.id);
            });
        }

    }
}


var editTitle = function (e) {
    // Ändra "team-title"
};




function effectOn(id) {
    // Rita en ram runt personen, kanske lite drop shadow?
    //document.getElementById(id).style.border = "2px solid #000";
    //document.getElementById(id).style.boxShadow = "7px 7px 5px #ccc";

    //Via css, .hovering:
    document.getElementById(id).classList.add("hovering");

}

function effectOff(id) {
    // Stäng av effekten när musen inte längre är ovanför personen
    //document.getElementById(id).style.border = "none";
    //document.getElementById(id).style.boxShadow = "none";

    //via css, .hovering:
    document.getElementById(id).classList.remove("hovering");


}

