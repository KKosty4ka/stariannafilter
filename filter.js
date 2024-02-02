w.on("chatmod", function (e) {
    if (e.message.includes('("Starianna")') || e.message.includes("🛑🛑🛑") || e.nickname.match(/(RUN|SPAM|THIS)[^]{0,}NOW/g)) {
        e.hide = true;
        w.chat.send(`/block ${e.id}`);
    }
});
