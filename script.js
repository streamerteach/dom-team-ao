window.onload = function () {
    // Lyssna efter händels
    //document.getElementsByClassName("profile")
    const teamMembers = document.getElementsByClassName("team-member");


    //en for loop för att gå igenom alla bilder.
    for (let i = 0; i < teamMembers.length; i++) {
        const teamMember = teamMembers[i];

        //if (teamMember && teamMember.id) {
            // mouseenter eventlistener
            teamMember.addEventListener("mouseenter", function () {
                effectOn(teamMember);
            });

            // mouseleave eventlistener
            teamMember.addEventListener("mouseleave", function () {
                effectOff(teamMember);
            });
       // }

               // Add event listener for click to change title
               teamMember.addEventListener("click", function () {
                editTitle(teamMember);
            });

    }
}





var editTitle = function (teamMember) {
        // Ändra "team-title"

    // Hitta tittel-elementet
    const titleElement = teamMember.querySelector('.team-title');
    
    // Promt 
    const newTitle = prompt("Ge en ny titel för " + teamMember.querySelector('.team-name').textContent, titleElement.textContent);

    // uppdatera titel
    if (newTitle !== null) {
        titleElement.textContent = newTitle;
    }
};




function effectOn(element) {
    // Rita en ram runt personen, kanske lite drop shadow?
    //document.getElementById(id).style.border = "2px solid #000";
    //document.getElementById(id).style.boxShadow = "7px 7px 5px #ccc";

    //Via css, .hovering:
    //document.getElementById(id).classList.add("hovering");
    element.classList.add("hovering");

}

function effectOff(element) {
    // Stäng av effekten när musen inte längre är ovanför personen
    //document.getElementById(id).style.border = "none";
    //document.getElementById(id).style.boxShadow = "none";

    //via css, .hovering:
    //document.getElementById(id).classList.remove("hovering");
    element.classList.remove("hovering");


}

