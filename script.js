// 1. click me: oranje kleur ipv rood
$("#clickMe").click(function () {
    $(this).removeClass("w3-red").addClass("w3-orange");
});

// 2. doubleclick me: roze kleur bij dubbelklik
$("#dblClickMe").dblclick(function () {
    $(this).removeClass("w3-blue").addClass("w3-pink");
});

// 3. hover me: paars bij hover, groen bij verlaten
$("#hoverMe").hover(
    function () {
        $(this).removeClass("w3-green").addClass("w3-purple");
    },
    function () {
        $(this).removeClass("w3-purple").addClass("w3-green");
    }
);

// 4. mouse enter me: wordt zwart en blijft zwart
$("#mouseEnterMe").mouseenter(function () {
    $(this).removeClass("w3-yellow").addClass("w3-black");
});

// 5. fill me: tekst vervangen door 'goede dag!'
$("#fillMe").click(function () {
    $(this).text("goede dag!");
});

// 6. read me: alert-box met de tekst uit de rechthoek
$("#readMe").click(function () {
    alert($(this).text());
});

// 7. hide me: de groene rechthoek verdwijnt
$("#hideMe").click(function () {
    $(this).hide();
});

// 8. move me: de gele rechthoek verplaatst
$("#moveMe").click(function () {
    $(this).css("position", "relative").animate({ left: "+=50px" });
});

// 9. fill with random color: vult met een willekeurige kleur
$("#randomColor").click(function () {
    let willekeurigeKleur = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $(this).css("background-color", willekeurigeKleur);
});

// 10. fill with AJAX: come and see next week ;-)