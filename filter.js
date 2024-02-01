// Currently a basic project only made by me but you could add more to it by making a pull request.
let stariannaId;
w.on("chatmod", function (e) {
    if (e.username == "Fuck You All Starianna Is Queen" || e.id == stariannaId) {
        e.hide = true;
        if (e.id != stariannaId) stariannaId = e.id;
    }
});
