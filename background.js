chrome.commands.onCommand.addListener(function(command) {
	if (command == "un_mute") {
		chrome.tabs.query({
			currentWindow: true,
			active: true
		}, function(tab) {
			var muted_state = tab[0].mutedInfo.muted;
			muted_state = !muted_state;
			chrome.tabs.update({
				"muted": muted_state
			});
		});
	}
});