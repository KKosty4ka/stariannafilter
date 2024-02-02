// Currently a basic project only made by me but you could add more to it by making a pull request.
let stariannaIds = [];
w.on("chatmod", function (e) {
    if (e.message.includes('("Starianna")') || e.message.includes("🛑🛑🛑") || e.username.match(/(RUN|SPAM|THIS)[^]{0,}NOW/g) || stariannaIds.includes(e.id)) {
        e.hide = true;
        if (e.id && !stariannaIds.includes(e.id)) stariannaIds.push(e.id);
    }
});
