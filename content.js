var settings = {
	theme: "cm-s-ambiance"
};

if(window.$ !== undefined){
	setTheme(settings.theme);
}

function setTheme(theme){
	if ($("body").find(".CodeMirror-wrap.cm-s-default").length > 0){
		$("body").find(".CodeMirror-wrap").removeClass("cm-s-default").addClass("cm-s-ambiance");
	}
	setTimeout(setTheme, 2000);
}