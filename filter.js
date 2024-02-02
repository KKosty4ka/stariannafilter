// Currently a basic project only made by me and lime but you could add more to it by making a pull request.
w.on("chatmod", function (e) {
    if (e.message.includes('("Starianna")') || e.message.includes("🛑🛑🛑") || e.username.match(/(RUN|SPAM|THIS)[^]{0,}NOW/g)) {
        e.hide = true;
        w.chat.send(`/block ${e.id}`);
    }
});
