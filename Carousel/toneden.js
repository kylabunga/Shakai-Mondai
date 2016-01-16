(function() {
        var script = document.createElement("script");

        script.type = "text/javascript";
        script.async = true;
        script.src = "//sd.toneden.io/production/toneden.loader.js"

        var entry = document.getElementsByTagName("script")[0];
        entry.parentNode.insertBefore(script, entry);
    }());

    ToneDenReady = window.ToneDenReady || [];
    ToneDenReady.push(function() {
        // Modify the dom and urls parameters to position
        // your player and select tracks/sets/artists to play.
        ToneDen.player.create({
            dom: "#player",
            eq: "waves",
            skin: "light",
            mini: false,
            urls: [
                "https://soundcloud.com/oddcastles/sets/once-friends-now-fam"
            ]
        });
    });