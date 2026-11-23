$(document).ready(function() {

    // 1. click me: krijgt een oranje kleur (ipv rood)
    $("#box-click").click(function() {
        $(this).removeClass("w3-red").css("background-color", "orange");
    });

    // 2. doubleclick me: krijgt een roze kleur bij dubbelklik
    $("#box-dblclick").dblclick(function() {
        $(this).removeClass("w3-blue").css("background-color", "pink");
    });

    // 3. hover me: wordt paars bij hover, groen bij verlaten
    $("#box-hover").hover(
        function() {
            // Muis komt binnen
            $(this).removeClass("w3-green").css("background-color", "purple");
        }, 
        function() {
            // Muis verlaat het element
            $(this).css("background-color", "").addClass("w3-green");
        }
    );

    // 4. mouse enter me: wordt zwart en blijft zwart
    $("#box-mouseenter").mouseenter(function() {
        $(this).removeClass("w3-yellow").css("background-color", "black");
        $(this).css("color", "white"); // Optioneel: tekst wit maken voor leesbaarheid
    });

    // 5. fill me: tekst verandert naar 'goede dag!'
    $("#box-fill").click(function() {
        $(this).text("goede dag!");
    });

    // 6. read me: alert-box met de tekst uit de rechthoek
    $("#box-read").click(function() {
        alert($.trim($(this).text()));
    });

    // 7. hide me: de groene rechthoek verdwijnt
    $("#box-hide").click(function() {
        $(this).hide();
    });

    // 8. move me: rechthoek verplaatst zich (hier schuift hij 50px naar rechts)
    $("#box-move").click(function() {
        $(this).animate({ marginLeft: "+=50px" });
    });

    // 9. fill with random color: vult met een willekeurige hex-kleur
    $("#box-random").click(function() {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        $(this).css("background-color", randomColor);
    });

    // 10. fill with AJAX: come and see next week ;-)
    // Hier is nog geen actie voor vereist volgens de opdracht.
});