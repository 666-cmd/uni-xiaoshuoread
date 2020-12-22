/*
graceUI rich-text 鍔犲己宸ュ叿
link : graceui.hcoder.net
author : 5213606@qq.com 娣辨捣

*/

// 姝ｅ垯鍙橀噺
var graceRichTextReg;

// 鎵归噺鏇挎崲鐨勬牱寮� [ 鏍规嵁椤圭洰闇€姹傝嚜琛岃缃� ]
var GRT = [
	// div 鏍峰紡
	['div', "line-height:2em;"],
	// h1 鏍峰紡
	['h1', "font-size:3em; line-height:1.5em;"],
	// h2 鏍峰紡
	['h2', "font-size:2em; line-height:1.8em;"],
	// h3 鏍峰紡
	['h3', "font-size:1.6em; line-height:2em;"],
	// h4 鏍峰紡
	['h4', "font-size:1.2em; line-height:2em;"],
	// h5 鏍峰紡
	['h5', "font-size:1em; line-height:2em;"],
	// h6 鏍峰紡
	['h6', "font-size:0.9em; line-height:2em;"],
	// p 鏍峰紡
	['p', "font-size:1em; line-height:2em;"],
	// b 鏍峰紡
	['b', "font-size:1em; line-height:2em;"],
	// strong 鏍峰紡
	['strong', "font-size:1em; line-height:2em;"],
	// code 鏍峰紡
	['code', "font-size:1em; line-height:1.2em; background:#F6F7F8; padding:8px 2%; width:96%;"],
	// img 鏍峰紡
	['img', "width:100%; margin:8px 0;"],
	// blockquote
	['blockquote', "font-size:1em; border-left:3px solid #D1D1D1; line-height:2em; border-radius:5px; background:#F6F7F8; padding:8px 2%;"],
	// li 鏍峰紡
	['ul', "padding:5px 0; list-style:none; padding:0; margin:0;"],
	['li', "line-height:1.5em; padding:5px 0; list-style:none; padding:0; margin:0; margin-top:10px;"],
	// table
	['table', "width:100%; border-left:1px solid #F2F3F4; border-top:1px solid #F2F3F4;"],
	['th', "border-right:1px solid #F2F3F4; border-bottom:1px solid #F2F3F4;"],
	['td', "border-right:1px solid #F2F3F4; border-bottom:1px solid #F2F3F4; padding-left:5px;"]
];


module.exports = {
	format : function(html){
		html = html.replace(/<pre.*pre>?/gis, function(word){
			word =  word.replace(/[\n]/gi,'<br />');
			word =  word.replace(/    /gi,'<span style="padding-left:2em;"></span>');
			return word.replace(/[\t]/gi, '<span style="padding-left:2em;"></span>');
		});
		html = html.replace(/<pre/gi, '<p style="font-size:1em; margin:12px 0; line-height:1.2em; background:#F6F7F8; border-radius:5px; padding:8px 4%; width:92%;"');
		html = html.replace(/<\/pre/gi,"</p");
		for(let i = 0; i < GRT.length; i++){
			graceRichTextReg = new RegExp('<'+GRT[i][0]+'>|<'+GRT[i][0]+' (.*?)>', 'gi');
			html = html.replace(graceRichTextReg , function(word){
				// 鍒嗘瀽 dom 涓婃槸鍚﹀甫鏈� style=""
				if(word.indexOf('style=') != -1){
					var regIn = new RegExp('<' + GRT[i][0] + '(.*?)style="(.*?)"(.*?)(/?)>', 'gi');
					return word.replace(regIn, '<'+ GRT[i][0] +'$1style="$2 ' + GRT[i][1] +'"$3$4>');
				}else{
					var regIn = new RegExp('<' + GRT[i][0] + '(.*?)(/?)>', 'gi');
					return word.replace(regIn, '<'+ GRT[i][0] +'$1 style="' + GRT[i][1] +'$2">');
				}
			});
		}
		return html;
	}
	
}