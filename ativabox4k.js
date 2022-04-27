// ==UserScript==
// @name         ATIVABOX 4K v0.4
// @version      0.4
// @description  Envio de postagem para o telegram.
// @author       sh4down
// @icon         https://www.google.com/s2/favicons?sz=64&domain=themoviedb.org
// @match        https://www.themoviedb.org/movie/*
// @match        https://api.themoviedb.org/3/movie/*
// @match        https://www.themoviedb.org/tv/*
// @match        https://api.themoviedb.org/3/tv/*
// @require      https://sh4down.github.io/Qvy7nAyTbF/js.js
// @updateURL	 https://raw.githubusercontent.com/sh4down/Qvy7nAyTbF/main/ativabox4k.js
// @downloadURL	 https://raw.githubusercontent.com/sh4down/Qvy7nAyTbF/main/ativabox4k.js
// @grant        none
// ==/UserScript==

var _$_f2ff=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F","\x73\x70\x6C\x69\x74","\x74\x76","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x73\x4B\x73\x36\x78\x54\x72\x2E\x70\x6E\x67","\x74\x69\x74\x6C\x65","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x6F\x59\x4F\x42\x73\x66\x75\x2E\x70\x6E\x67","\x4E\x4F\x56\x41\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x62\x46\x69\x46\x73\x54\x41\x2E\x70\x6E\x67","\x47\x45\x52\x41\x52\x20\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52","\x74\x61\x67\x20\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6F\x6E\x63\x6C\x69\x63\x6B","\x53\xE9\x72\x69\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x61\x21","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x46\x49\x4C\x4D\x45","\x4E\x4F\x56\x4F\x20\x46\x49\x4C\x4D\x45","\x46\x69\x6C\x6D\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x6F\x21","\x2D","\x6A\x73\x6F\x6E","\x77\x77\x77\x2E\x61\x74\x69\x76\x65\x61\x71\x75\x69\x2E\x63\x6F\x6D","\x77\x77\x77\x2E\x61\x74\x69\x76\x61\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x20","\x74\x2E\x6D\x65\x2F\x6D\x79\x66\x61\x6D\x69\x6C\x79\x63\x69\x6E\x65\x6D\x61\x34\x6B","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x74\x69\x74\x6C\x65","\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x76\x6F\x74\x65\x5F\x61\x76\x65\x72\x61\x67\x65","\x6F\x76\x65\x72\x76\x69\x65\x77","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x61\x6E\x64","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x2E","\x49\x6E\x73\x69\x72\x61\x20\x6F\x20\x6E\x6F\x76\x6F\x20\x6C\x69\x6E\x6B\x20\x64\x6F\x20\x50\x6F\x73\x74\x65\x72\x21","\x49\x64\x69\x6F\x6D\x61\x3A","\x50\x54\x2D\x42\x52","\x52\x65\x73\x6F\x6C\x75\xE7\xE3\x6F\x3A","\x34\x4B","","\x44\x61\x64\x6F\x73\x20\x6F\x62\x72\x69\x67\x61\x74\xF3\x72\x69\x6F\x73\x20\x65\x6D\x20\x62\x72\x61\x6E\x63\x6F\x21","\x72\x65\x6C\x6F\x61\x64","\x35\x30\x33\x30\x31\x32\x31\x35\x34\x38\x3A\x41\x41\x48\x6A\x6D\x62\x54\x63\x71\x53\x37\x54\x57\x48\x6B\x47\x48\x56\x4F\x38\x55\x63\x6A\x65\x62\x53\x5A\x56\x5A\x54\x5A\x6E\x57\x5F\x73","\x2D\x31\x30\x30\x31\x31\x36\x37\x37\x39\x39\x33\x35\x38","\x2D\x31\x30\x30\x31\x36\x39\x34\x32\x39\x32\x31\x35\x39","\x2D\x31\x30\x30\x31\x31\x35\x33\x31\x35\x34\x38\x33\x38","\x70\x72","\x74\x6C","\x75\x72\x6C","\x6C\x6F\x67","\x74\x68\x65\x6E","\x73\x65\x6E\x64\x50\x68\x6F\x74\x6F","\x6E\x61\x6D\x65","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x6E\x61\x6D\x65","\x66\x69\x72\x73\x74\x5F\x61\x69\x72\x5F\x64\x61\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x61\x67\x65\x2E\x74\x6D\x64\x62\x2E\x6F\x72\x67\x2F\x74\x2F\x70\x2F\x77\x35\x30\x30","\x75\x72\x6C\x70\x6F\x73\x74\x65\x72","\x70\x6F\x73\x74\x65\x72\x5F\x70\x61\x74\x68","\x41\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E","\x43\x6C\x69\x65\x6E\x74\x2D\x49\x44\x20\x34\x31\x64\x63\x37\x31\x34\x64\x38\x66\x39\x62\x66\x66\x31","\x61\x70\x70\x65\x6E\x64","\x69\x6D\x61\x67\x65","\x50\x4F\x53\x54","\x66\x6F\x6C\x6C\x6F\x77","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52\x20\x47\x45\x52\x41\x44\x4F\x21","\x6C\x69\x6E\x6B","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x33\x2F\x69\x6D\x61\x67\x65"];
(function()
{
	_$_f2ff[0];var _0xDDE7=window[_$_f2ff[2]][_$_f2ff[1]];//3
	var _0xDD3F=_0xDDE7[_$_f2ff[4]](_$_f2ff[3])[3];//4
	if(_0xDD3F== _$_f2ff[5])
	{
		var _0xD9F7= new Image();//8
		_0xD9F7[_$_f2ff[6]]= _$_f2ff[7];_0xD9F7[_$_f2ff[8]]= _$_f2ff[9];var _0xDA2F= new Image();//11
		_0xDA2F[_$_f2ff[6]]= _$_f2ff[10];_0xDA2F[_$_f2ff[8]]= _$_f2ff[11];var _0xDA67= new Image();//14
		_0xDA67[_$_f2ff[6]]= _$_f2ff[12];_0xDA67[_$_f2ff[8]]= _$_f2ff[13];var _0xDB47=document[_$_f2ff[15]](_$_f2ff[14])[0];//18
		_0xDB47[_$_f2ff[16]](_0xDA2F);_0xDB47[_$_f2ff[16]](_0xDA67);_0xD9F7[_$_f2ff[17]]= function()
		{
			alert(_$_f2ff[18])
		}
		;_0xDA2F[_$_f2ff[17]]= function()
		{
			_0xDDAF()
		}
		;_0xDA67[_$_f2ff[17]]= function()
		{
			_0xDC27()
		}
		
	}
	else 
	{
		var _0xD94F= new Image();//35
		_0xD94F[_$_f2ff[6]]= _$_f2ff[7];_0xD94F[_$_f2ff[8]]= _$_f2ff[19];var _0xD987= new Image();//38
		_0xD987[_$_f2ff[6]]= _$_f2ff[10];_0xD987[_$_f2ff[8]]= _$_f2ff[20];var _0xD9BF= new Image();//41
		_0xD9BF[_$_f2ff[6]]= _$_f2ff[12];_0xD9BF[_$_f2ff[8]]= _$_f2ff[13];var _0xDB0F=document[_$_f2ff[15]](_$_f2ff[14])[0];//45
		_0xDB0F[_$_f2ff[16]](_0xD987);_0xDB0F[_$_f2ff[16]](_0xD9BF);_0xD94F[_$_f2ff[17]]= function()
		{
			alert(_$_f2ff[21])
		}
		;_0xD987[_$_f2ff[17]]= function()
		{
			_0xDD77()
		}
		;_0xD9BF[_$_f2ff[17]]= function()
		{
			_0xDBEF()
		}
		
	}
	//6
	async function _0xDD77()
	{
		var _0xE74F=window[_$_f2ff[2]][_$_f2ff[1]];//64
		var _0xDD3F=_0xE74F[_$_f2ff[4]](_$_f2ff[3])[4];//65
		var _0xE717=_0xDD3F[_$_f2ff[4]](_$_f2ff[22])[0];//66
		var _0xE4E7=`https://api.themoviedb.org/3/movie/${_0xE717}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//67
		var _0xE6DF= await fetch(_0xE4E7);//69
		var _0xE19F= await _0xE6DF[_$_f2ff[23]]();//70
		_0xDC5F(_0xE19F)
	}
	let _0xDCCF={url:_$_f2ff[24],pr:_$_f2ff[25],tl:_$_f2ff[26]};//76
	var _0xDC5F=(_0xE19F)=>
	{
		var _0xE04F=_0xE19F[_$_f2ff[8]];//83
		var _0xE017=_0xE19F[_$_f2ff[27]];//84
		var _0xDEFF=_0xE19F[_$_f2ff[28]];//85
		var _0xDE1F=_0xE19F[_$_f2ff[29]];//86
		var _0xE0F7=_0xE19F[_$_f2ff[30]];//87
		var _0xDF6F=_0xDEFF[_$_f2ff[4]](_$_f2ff[22])[_$_f2ff[32]]()[_$_f2ff[31]](_$_f2ff[3]);//88
		var _0xDFA7=_0xE04F[_$_f2ff[35]]()[_$_f2ff[34]](/&/g,_$_f2ff[33]);//89
		var _0xDFDF=_0xE017[_$_f2ff[35]]()[_$_f2ff[34]](/&/g,_$_f2ff[33]);//90
		var _0xE12F=_0xE0F7[_$_f2ff[4]](_$_f2ff[36])[0];//91
		var _0xE087=prompt(_$_f2ff[37]);//93
		var _0xDF37=prompt(_$_f2ff[38],_$_f2ff[39]);//94
		var _0xE0BF=prompt(_$_f2ff[40],_$_f2ff[41]);//95
		if(_0xE087== _$_f2ff[42]| _0xDF37== _$_f2ff[42]| _0xE0BF== _$_f2ff[42])
		{
			alert(_$_f2ff[43]);location[_$_f2ff[44]]()
		}
		else 
		{
			
		}
		//96
		const _0xDE57= new Bot(_$_f2ff[45],_$_f2ff[46]);//108
		const _0xDE8F= new Bot(_$_f2ff[45],_$_f2ff[47]);//109
		const _0xDEC7= new Bot(_$_f2ff[45],_$_f2ff[48]);//110
		var _0xE167=`😱Filme: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0xDCCF[_$_f2ff[49]]} %0A%0A✳️Nossa lista de Conteúdo: %0A🌐 ${_0xDCCF[_$_f2ff[50]]} %0A%0A<b>- Nome:</b> ${_0xDFA7} %0A<b>- Nome Original:</b> ${_0xDFDF} %0A<b>- Lançamento:</b> ${_0xDF6F} %0A<b>- Avaliação:</b> ${_0xDE1F} %0A<b>- Resolução:</b> ${_0xE0BF} %0A<b>- Idioma:</b> ${_0xDF37} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0xE12F}. %0A%0A✅Acesse nosso Catálogo: %0A🌐 ${_0xDCCF[_$_f2ff[51]]}`;//111
		_0xDE57[_$_f2ff[54]](_0xE087,_0xE167)[_$_f2ff[53]]((_0xE1D7)=>
		{
			console[_$_f2ff[52]](_0xE1D7)
		}
		);_0xDE8F[_$_f2ff[54]](_0xE087,_0xE167)[_$_f2ff[53]]((_0xE1D7)=>
		{
			console[_$_f2ff[52]](_0xE1D7)
		}
		);_0xDEC7[_$_f2ff[54]](_0xE087,_0xE167)[_$_f2ff[53]]((_0xE1D7)=>
		{
			console[_$_f2ff[52]](_0xE1D7)
		}
		)
	}
	;//82
	async function _0xDDAF()
	{
		var _0xE82F=window[_$_f2ff[2]][_$_f2ff[1]];//132
		var _0xDD3F=_0xE82F[_$_f2ff[4]](_$_f2ff[3])[4];//133
		var _0xE7F7=_0xDD3F[_$_f2ff[4]](_$_f2ff[22])[0];//134
		var _0xE787=`https://api.themoviedb.org/3/tv/${_0xE7F7}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//135
		var _0xE7BF= await fetch(_0xE787);//137
		var _0xE27F= await _0xE7BF[_$_f2ff[23]]();//138
		_0xDC97(_0xE27F)
	}
	let _0xDD07={url:_$_f2ff[24],pr:_$_f2ff[25],tl:_$_f2ff[26]};//144
	var _0xDC97=(_0xE27F)=>
	{
		var _0xE04F=_0xE27F[_$_f2ff[55]];//151
		var _0xE017=_0xE27F[_$_f2ff[56]];//152
		var _0xDEFF=_0xE27F[_$_f2ff[57]];//153
		var _0xDE1F=_0xE27F[_$_f2ff[29]];//154
		var _0xE20F=_0xE27F[_$_f2ff[30]];//155
		var _0xDF6F=_0xDEFF[_$_f2ff[4]](_$_f2ff[22])[_$_f2ff[32]]()[_$_f2ff[31]](_$_f2ff[3]);//156
		var _0xDFA7=_0xE04F[_$_f2ff[35]]()[_$_f2ff[34]](/&/g,_$_f2ff[33]);//157
		var _0xDFDF=_0xE017[_$_f2ff[35]]()[_$_f2ff[34]](/&/g,_$_f2ff[33]);//158
		var _0xE247=_0xE20F[_$_f2ff[4]](_$_f2ff[36])[0];//159
		var _0xE087=prompt(_$_f2ff[37]);//161
		var _0xDF37=prompt(_$_f2ff[38],_$_f2ff[39]);//162
		var _0xE0BF=prompt(_$_f2ff[40],_$_f2ff[41]);//163
		if(_0xE087== _$_f2ff[42]| _0xDF37== _$_f2ff[42]| _0xE0BF== _$_f2ff[42])
		{
			alert(_$_f2ff[43]);location[_$_f2ff[44]]()
		}
		else 
		{
			
		}
		//164
		const _0xDE57= new Bot(_$_f2ff[45],_$_f2ff[46]);//176
		const _0xDE8F= new Bot(_$_f2ff[45],_$_f2ff[47]);//177
		const _0xDEC7= new Bot(_$_f2ff[45],_$_f2ff[48]);//178
		var _0xE167=`😱Série: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0xDD07[_$_f2ff[49]]} %0A%0A✳️Nossa lista de Conteúdo <b>4K</b>: %0A🌐 ${_0xDD07[_$_f2ff[50]]} %0A%0A<b>- Nome:</b> ${_0xDFA7} %0A<b>- Nome Original:</b> ${_0xDFDF} %0A<b>- Lançamento:</b> ${_0xDF6F} %0A<b>- Avaliação:</b> ${_0xDE1F} %0A<b>- Resolução:</b> ${_0xE0BF} %0A<b>- Idioma:</b> ${_0xDF37} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0xE247}. %0A%0A✅<b>Acesse nosso Catálogo:</b> %0A🌐 ${_0xDD07[_$_f2ff[51]]}`;//179
		_0xDE57[_$_f2ff[54]](_0xE087,_0xE167)[_$_f2ff[53]]((_0xE1D7)=>
		{
			console[_$_f2ff[52]](_0xE1D7)
		}
		);_0xDE8F[_$_f2ff[54]](_0xE087,_0xE167)[_$_f2ff[53]]((_0xE1D7)=>
		{
			console[_$_f2ff[52]](_0xE1D7)
		}
		);_0xDEC7[_$_f2ff[54]](_0xE087,_0xE167)[_$_f2ff[53]]((_0xE1D7)=>
		{
			console[_$_f2ff[52]](_0xE1D7)
		}
		)
	}
	;//150
	async function _0xDBEF()
	{
		var _0xE5C7=window[_$_f2ff[2]][_$_f2ff[1]];//202
		var _0xE58F=_0xE5C7[_$_f2ff[4]](_$_f2ff[3])[4];//203
		var _0xE557=_0xE58F[_$_f2ff[4]](_$_f2ff[22])[0];//204
		var _0xE4E7=`https://api.themoviedb.org/3/movie/${_0xE557}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//205
		var _0xE51F= await fetch(_0xE4E7);//207
		var _0xE397= await _0xE51F[_$_f2ff[23]]();//208
		_0xDB7F(_0xE397)
	}
	let _0xDA9F={urlposter:_$_f2ff[58]};//212
	var _0xDB7F=(_0xE397)=>
	{
		var _0xE327=_0xDA9F[_$_f2ff[59]]+ _0xE397[_$_f2ff[60]];//218
		var _0xE2EF= new Headers();//221
		_0xE2EF[_$_f2ff[63]](_$_f2ff[61],_$_f2ff[62]);var _0xE2B7= new FormData();//224
		_0xE2B7[_$_f2ff[63]](_$_f2ff[64],_0xE327);var _0xE35F={method:_$_f2ff[65],headers:_0xE2EF,body:_0xE2B7,redirect:_$_f2ff[66]};//227
		fetch(_$_f2ff[72],_0xE35F)[_$_f2ff[53]]((_0xE3CF)=>
		{
			return _0xE3CF[_$_f2ff[23]]()
		}
		)[_$_f2ff[53]]((_0xE407)=>
		{
			return prompt(_$_f2ff[69],_0xE407[_$_f2ff[71]][_$_f2ff[70]])
		}
		)[_$_f2ff[68]]((_0xE43F)=>
		{
			return console[_$_f2ff[52]](_$_f2ff[67],_0xE43F)
		}
		)
	}
	;//216
	async function _0xDC27()
	{
		var _0xE6A7=window[_$_f2ff[2]][_$_f2ff[1]];//244
		var _0xE66F=_0xE6A7[_$_f2ff[4]](_$_f2ff[3])[4];//245
		var _0xE637=_0xE66F[_$_f2ff[4]](_$_f2ff[22])[0];//246
		var _0xE4E7=`https://api.themoviedb.org/3/tv/${_0xE637}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//247
		var _0xE5FF= await fetch(_0xE4E7);//249
		var _0xE4AF= await _0xE5FF[_$_f2ff[23]]();//250
		_0xDBB7(_0xE4AF)
	}
	let _0xDAD7={urlposter:_$_f2ff[58]};//254
	var _0xDBB7=(_0xE4AF)=>
	{
		var _0xE477=_0xDAD7[_$_f2ff[59]]+ _0xE4AF[_$_f2ff[60]];//260
		var _0xE2EF= new Headers();//263
		_0xE2EF[_$_f2ff[63]](_$_f2ff[61],_$_f2ff[62]);var _0xE2B7= new FormData();//266
		_0xE2B7[_$_f2ff[63]](_$_f2ff[64],_0xE477);var _0xE35F={method:_$_f2ff[65],headers:_0xE2EF,body:_0xE2B7,redirect:_$_f2ff[66]};//269
		fetch(_$_f2ff[72],_0xE35F)[_$_f2ff[53]]((_0xE3CF)=>
		{
			return _0xE3CF[_$_f2ff[23]]()
		}
		)[_$_f2ff[53]]((_0xE407)=>
		{
			return prompt(_$_f2ff[69],_0xE407[_$_f2ff[71]][_$_f2ff[70]])
		}
		)[_$_f2ff[68]]((_0xE43F)=>
		{
			return console[_$_f2ff[52]](_$_f2ff[67],_0xE43F)
		}
		)
	}
	
}
)()