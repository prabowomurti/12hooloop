$(document).ready( function () {

	function oobah(sentence) {
		sentence = sentence.replace(/x/gi, "ks");
		sentence = sentence.replace(/q/gi, "kw");
		sentence = sentence.replace(/z/gi, "c");
		sentence = sentence.replace(/y/gi, "i");
		sentence = sentence.replace(/f/gi, "p");
		sentence = sentence.replace(/v/gi, "p");
		sentence = sentence.replace(/w/gi, "u");
		sentence = sentence.replace(/r/gi, "l");
		sentence = sentence.replace(/kh/gi, "h");
		sentence = sentence.replace(/s/gi, "c");
		sentence = sentence.replace(/g/gi, "k");
		sentence = sentence.replace(/j/gi, "c");
		sentence = sentence.replace(/i/gi, "ee");
		sentence = sentence.replace(/u/gi, "oo");
		return sentence;
	}
	
	$('#button').click(function () {
		$('#result').text(oobah($('#text').val()));
	})

	$('#text').click(function () {
		$('#text').select();
	})

})//end of (document).ready
