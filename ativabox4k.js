// ==UserScript==
// @name         ATIVABOX 4K v0.2
// @version      0.2
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
var _$_beff=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F","\x73\x70\x6C\x69\x74","\x74\x76","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x73\x4B\x73\x36\x78\x54\x72\x2E\x70\x6E\x67","\x74\x69\x74\x6C\x65","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x6F\x59\x4F\x42\x73\x66\x75\x2E\x70\x6E\x67","\x4E\x4F\x56\x41\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x62\x46\x69\x46\x73\x54\x41\x2E\x70\x6E\x67","\x47\x45\x52\x41\x52\x20\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52","\x74\x61\x67\x20\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6F\x6E\x63\x6C\x69\x63\x6B","\x53\xE9\x72\x69\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x61\x21","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x46\x49\x4C\x4D\x45","\x4E\x4F\x56\x4F\x20\x46\x49\x4C\x4D\x45","\x46\x69\x6C\x6D\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x6F\x21","\x2D","\x6A\x73\x6F\x6E","\x77\x77\x77\x2E\x61\x74\x69\x76\x65\x61\x71\x75\x69\x2E\x63\x6F\x6D","\x77\x77\x77\x2E\x61\x74\x69\x76\x61\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x20","\x74\x2E\x6D\x65\x2F\x6D\x79\x66\x61\x6D\x69\x6C\x79\x63\x69\x6E\x65\x6D\x61\x34\x6B","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x74\x69\x74\x6C\x65","\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x76\x6F\x74\x65\x5F\x61\x76\x65\x72\x61\x67\x65","\x6F\x76\x65\x72\x76\x69\x65\x77","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x61\x6E\x64","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x49\x6E\x73\x69\x72\x61\x20\x6F\x20\x6E\x6F\x76\x6F\x20\x6C\x69\x6E\x6B\x20\x64\x6F\x20\x50\x6F\x73\x74\x65\x72\x21","\x49\x64\x69\x6F\x6D\x61\x3A","\x50\x54\x2D\x42\x52","\x52\x65\x73\x6F\x6C\x75\xE7\xE3\x6F\x3A","\x34\x4B","","\x44\x61\x64\x6F\x73\x20\x6F\x62\x72\x69\x67\x61\x74\xF3\x72\x69\x6F\x73\x20\x65\x6D\x20\x62\x72\x61\x6E\x63\x6F\x21","\x72\x65\x6C\x6F\x61\x64","\x35\x30\x33\x30\x31\x32\x31\x35\x34\x38\x3A\x41\x41\x48\x6A\x6D\x62\x54\x63\x71\x53\x37\x54\x57\x48\x6B\x47\x48\x56\x4F\x38\x55\x63\x6A\x65\x62\x53\x5A\x56\x5A\x54\x5A\x6E\x57\x5F\x73","\x2D\x31\x30\x30\x31\x31\x36\x37\x37\x39\x39\x33\x35\x38","\x2D\x31\x30\x30\x31\x36\x39\x34\x32\x39\x32\x31\x35\x39","\x2D\x31\x30\x30\x31\x31\x35\x33\x31\x35\x34\x38\x33\x38","\x70\x72","\x74\x6C","\x75\x72\x6C","\x6C\x6F\x67","\x74\x68\x65\x6E","\x73\x65\x6E\x64\x50\x68\x6F\x74\x6F","\x6E\x61\x6D\x65","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x6E\x61\x6D\x65","\x66\x69\x72\x73\x74\x5F\x61\x69\x72\x5F\x64\x61\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x61\x67\x65\x2E\x74\x6D\x64\x62\x2E\x6F\x72\x67\x2F\x74\x2F\x70\x2F\x77\x35\x30\x30","\x75\x72\x6C\x70\x6F\x73\x74\x65\x72","\x70\x6F\x73\x74\x65\x72\x5F\x70\x61\x74\x68","\x41\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E","\x43\x6C\x69\x65\x6E\x74\x2D\x49\x44\x20\x34\x31\x64\x63\x37\x31\x34\x64\x38\x66\x39\x62\x66\x66\x31","\x61\x70\x70\x65\x6E\x64","\x69\x6D\x61\x67\x65","\x50\x4F\x53\x54","\x66\x6F\x6C\x6C\x6F\x77","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52\x20\x47\x45\x52\x41\x44\x4F\x21","\x6C\x69\x6E\x6B","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x33\x2F\x69\x6D\x61\x67\x65"];
(function()
{
	_$_beff[0];var _0x1E397=window[_$_beff[2]][_$_beff[1]];//3
	var _0x1E298=_0x1E397[_$_beff[4]](_$_beff[3])[3];//4
	if(_0x1E298== _$_beff[5])
	{
		var _0x1DD9D= new Image();//8
		_0x1DD9D[_$_beff[6]]= _$_beff[7];_0x1DD9D[_$_beff[8]]= _$_beff[9];var _0x1DDF2= new Image();//11
		_0x1DDF2[_$_beff[6]]= _$_beff[10];_0x1DDF2[_$_beff[8]]= _$_beff[11];var _0x1DE47= new Image();//14
		_0x1DE47[_$_beff[6]]= _$_beff[12];_0x1DE47[_$_beff[8]]= _$_beff[13];var _0x1DF9B=document[_$_beff[15]](_$_beff[14])[0];//18
		_0x1DF9B[_$_beff[16]](_0x1DDF2);_0x1DF9B[_$_beff[16]](_0x1DE47);_0x1DD9D[_$_beff[17]]= function()
		{
			alert(_$_beff[18])
		}
		;_0x1DDF2[_$_beff[17]]= function()
		{
			_0x1E342()
		}
		;_0x1DE47[_$_beff[17]]= function()
		{
			_0x1E0EF()
		}
		
	}
	else 
	{
		var _0x1DC9E= new Image();//35
		_0x1DC9E[_$_beff[6]]= _$_beff[7];_0x1DC9E[_$_beff[8]]= _$_beff[19];var _0x1DCF3= new Image();//38
		_0x1DCF3[_$_beff[6]]= _$_beff[10];_0x1DCF3[_$_beff[8]]= _$_beff[20];var _0x1DD48= new Image();//41
		_0x1DD48[_$_beff[6]]= _$_beff[12];_0x1DD48[_$_beff[8]]= _$_beff[13];var _0x1DF46=document[_$_beff[15]](_$_beff[14])[0];//45
		_0x1DF46[_$_beff[16]](_0x1DCF3);_0x1DF46[_$_beff[16]](_0x1DD48);_0x1DC9E[_$_beff[17]]= function()
		{
			alert(_$_beff[21])
		}
		;_0x1DCF3[_$_beff[17]]= function()
		{
			_0x1E2ED()
		}
		;_0x1DD48[_$_beff[17]]= function()
		{
			_0x1E09A()
		}
		
	}
	//6
	async function _0x1E2ED()
	{
		var _0x1F0DF=window[_$_beff[2]][_$_beff[1]];//64
		var _0x1E298=_0x1F0DF[_$_beff[4]](_$_beff[3])[4];//65
		var _0x1F08A=_0x1E298[_$_beff[4]](_$_beff[22])[0];//66
		var _0x1ED38=`https://api.themoviedb.org/3/movie/${_0x1F08A}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//67
		var _0x1F035= await fetch(_0x1ED38);//69
		var _0x1E8E7= await _0x1F035[_$_beff[23]]();//70
		_0x1E144(_0x1E8E7)
	}
	let _0x1E1EE={url:_$_beff[24],pr:_$_beff[25],tl:_$_beff[26]};//76
	var _0x1E144=(_0x1E8E7)=>
	{
		var _0x1E73E=_0x1E8E7[_$_beff[8]];//83
		var _0x1E6E9=_0x1E8E7[_$_beff[27]];//84
		var _0x1E540=_0x1E8E7[_$_beff[28]];//85
		var _0x1E3EC=_0x1E8E7[_$_beff[29]];//86
		var _0x1E83D=_0x1E8E7[_$_beff[30]];//87
		var _0x1E5EA=_0x1E540[_$_beff[4]](_$_beff[22])[_$_beff[32]]()[_$_beff[31]](_$_beff[3]);//88
		var _0x1E63F=_0x1E73E[_$_beff[35]]()[_$_beff[34]](/&/g,_$_beff[33]);//89
		var _0x1E694=_0x1E6E9[_$_beff[35]]()[_$_beff[34]](/&/g,_$_beff[33]);//90
		var _0x1E793=prompt(_$_beff[36]);//92
		var _0x1E595=prompt(_$_beff[37],_$_beff[38]);//93
		var _0x1E7E8=prompt(_$_beff[39],_$_beff[40]);//94
		if(_0x1E793== _$_beff[41]| _0x1E595== _$_beff[41]| _0x1E7E8== _$_beff[41])
		{
			alert(_$_beff[42]);location[_$_beff[43]]()
		}
		else 
		{
			
		}
		//95
		const _0x1E441= new Bot(_$_beff[44],_$_beff[45]);//107
		const _0x1E496= new Bot(_$_beff[44],_$_beff[46]);//108
		const _0x1E4EB= new Bot(_$_beff[44],_$_beff[47]);//109
		var _0x1E892=`😱Filme: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0x1E1EE[_$_beff[48]]} %0A%0A✳️Nossa lista de Conteúdo: %0A🌐 ${_0x1E1EE[_$_beff[49]]} %0A%0A<b>- Nome:</b> ${_0x1E63F} %0A<b>- Nome Original:</b> ${_0x1E694} %0A<b>- Lançamento:</b> ${_0x1E5EA} %0A<b>- Avaliação:</b> ${_0x1E3EC} %0A<b>- Resolução:</b> ${_0x1E7E8} %0A<b>- Idioma:</b> ${_0x1E595} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0x1E83D} %0A%0A✅Acesse nosso Catálogo: %0A🌐 ${_0x1E1EE[_$_beff[50]]}`;//110
		_0x1E441[_$_beff[53]](_0x1E793,_0x1E892)[_$_beff[52]]((_0x1E93C)=>
		{
			console[_$_beff[51]](_0x1E93C)
		}
		);_0x1E496[_$_beff[53]](_0x1E793,_0x1E892)[_$_beff[52]]((_0x1E93C)=>
		{
			console[_$_beff[51]](_0x1E93C)
		}
		);_0x1E4EB[_$_beff[53]](_0x1E793,_0x1E892)[_$_beff[52]]((_0x1E93C)=>
		{
			console[_$_beff[51]](_0x1E93C)
		}
		)
	}
	;//82
	async function _0x1E342()
	{
		var _0x1F233=window[_$_beff[2]][_$_beff[1]];//131
		var _0x1E298=_0x1F233[_$_beff[4]](_$_beff[3])[4];//132
		var _0x1F1DE=_0x1E298[_$_beff[4]](_$_beff[22])[0];//133
		var _0x1F134=`https://api.themoviedb.org/3/tv/${_0x1F1DE}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//134
		var _0x1F189= await fetch(_0x1F134);//136
		var _0x1E991= await _0x1F189[_$_beff[23]]();//137
		_0x1E199(_0x1E991)
	}
	let _0x1E243={url:_$_beff[24],pr:_$_beff[25],tl:_$_beff[26]};//143
	var _0x1E199=(_0x1E991)=>
	{
		var _0x1E73E=_0x1E991[_$_beff[54]];//150
		var _0x1E6E9=_0x1E991[_$_beff[55]];//151
		var _0x1E540=_0x1E991[_$_beff[56]];//152
		var _0x1E3EC=_0x1E991[_$_beff[29]];//153
		var _0x1E83D=_0x1E991[_$_beff[30]];//154
		var _0x1E5EA=_0x1E540[_$_beff[4]](_$_beff[22])[_$_beff[32]]()[_$_beff[31]](_$_beff[3]);//155
		var _0x1E63F=_0x1E73E[_$_beff[35]]()[_$_beff[34]](/&/g,_$_beff[33]);//156
		var _0x1E694=_0x1E6E9[_$_beff[35]]()[_$_beff[34]](/&/g,_$_beff[33]);//157
		var _0x1E793=prompt(_$_beff[36]);//159
		var _0x1E595=prompt(_$_beff[37],_$_beff[38]);//160
		var _0x1E7E8=prompt(_$_beff[39],_$_beff[40]);//161
		if(_0x1E793== _$_beff[41]| _0x1E595== _$_beff[41]| _0x1E7E8== _$_beff[41])
		{
			alert(_$_beff[42]);location[_$_beff[43]]()
		}
		else 
		{
			
		}
		//162
		const _0x1E441= new Bot(_$_beff[44],_$_beff[45]);//174
		const _0x1E496= new Bot(_$_beff[44],_$_beff[46]);//175
		const _0x1E4EB= new Bot(_$_beff[44],_$_beff[47]);//176
		var _0x1E892=`😱Série: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0x1E243[_$_beff[48]]} %0A%0A✳️Nossa lista de Conteúdo <b>4K</b>: %0A🌐 ${_0x1E243[_$_beff[49]]} %0A%0A<b>- Nome:</b> ${_0x1E63F} %0A<b>- Nome Original:</b> ${_0x1E694} %0A<b>- Lançamento:</b> ${_0x1E5EA} %0A<b>- Avaliação:</b> ${_0x1E3EC} %0A<b>- Resolução:</b> ${_0x1E7E8} %0A<b>- Idioma:</b> ${_0x1E595} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0x1E83D} %0A%0A✅<b>Acesse nosso Catálogo:</b> %0A🌐 ${_0x1E243[_$_beff[50]]}`;//177
		_0x1E441[_$_beff[53]](_0x1E793,_0x1E892)[_$_beff[52]]((_0x1E93C)=>
		{
			console[_$_beff[51]](_0x1E93C)
		}
		);_0x1E496[_$_beff[53]](_0x1E793,_0x1E892)[_$_beff[52]]((_0x1E93C)=>
		{
			console[_$_beff[51]](_0x1E93C)
		}
		);_0x1E4EB[_$_beff[53]](_0x1E793,_0x1E892)[_$_beff[52]]((_0x1E93C)=>
		{
			console[_$_beff[51]](_0x1E93C)
		}
		)
	}
	;//149
	async function _0x1E09A()
	{
		var _0x1EE8C=window[_$_beff[2]][_$_beff[1]];//200
		var _0x1EE37=_0x1EE8C[_$_beff[4]](_$_beff[3])[4];//201
		var _0x1EDE2=_0x1EE37[_$_beff[4]](_$_beff[22])[0];//202
		var _0x1ED38=`https://api.themoviedb.org/3/movie/${_0x1EDE2}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//203
		var _0x1ED8D= await fetch(_0x1ED38);//205
		var _0x1EB3A= await _0x1ED8D[_$_beff[23]]();//206
		_0x1DFF0(_0x1EB3A)
	}
	let _0x1DE9C={urlposter:_$_beff[57]};//210
	var _0x1DFF0=(_0x1EB3A)=>
	{
		var _0x1EA90=_0x1DE9C[_$_beff[58]]+ _0x1EB3A[_$_beff[59]];//216
		var _0x1EA3B= new Headers();//219
		_0x1EA3B[_$_beff[62]](_$_beff[60],_$_beff[61]);var _0x1E9E6= new FormData();//222
		_0x1E9E6[_$_beff[62]](_$_beff[63],_0x1EA90);var _0x1EAE5={method:_$_beff[64],headers:_0x1EA3B,body:_0x1E9E6,redirect:_$_beff[65]};//225
		fetch(_$_beff[71],_0x1EAE5)[_$_beff[52]]((_0x1EB8F)=>
		{
			return _0x1EB8F[_$_beff[23]]()
		}
		)[_$_beff[52]]((_0x1EBE4)=>
		{
			return prompt(_$_beff[68],_0x1EBE4[_$_beff[70]][_$_beff[69]])
		}
		)[_$_beff[67]]((_0x1EC39)=>
		{
			return console[_$_beff[51]](_$_beff[66],_0x1EC39)
		}
		)
	}
	;//214
	async function _0x1E0EF()
	{
		var _0x1EFE0=window[_$_beff[2]][_$_beff[1]];//242
		var _0x1EF8B=_0x1EFE0[_$_beff[4]](_$_beff[3])[4];//243
		var _0x1EF36=_0x1EF8B[_$_beff[4]](_$_beff[22])[0];//244
		var _0x1ED38=`https://api.themoviedb.org/3/tv/${_0x1EF36}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//245
		var _0x1EEE1= await fetch(_0x1ED38);//247
		var _0x1ECE3= await _0x1EEE1[_$_beff[23]]();//248
		_0x1E045(_0x1ECE3)
	}
	let _0x1DEF1={urlposter:_$_beff[57]};//252
	var _0x1E045=(_0x1ECE3)=>
	{
		var _0x1EC8E=_0x1DEF1[_$_beff[58]]+ _0x1ECE3[_$_beff[59]];//258
		var _0x1EA3B= new Headers();//261
		_0x1EA3B[_$_beff[62]](_$_beff[60],_$_beff[61]);var _0x1E9E6= new FormData();//264
		_0x1E9E6[_$_beff[62]](_$_beff[63],_0x1EC8E);var _0x1EAE5={method:_$_beff[64],headers:_0x1EA3B,body:_0x1E9E6,redirect:_$_beff[65]};//267
		fetch(_$_beff[71],_0x1EAE5)[_$_beff[52]]((_0x1EB8F)=>
		{
			return _0x1EB8F[_$_beff[23]]()
		}
		)[_$_beff[52]]((_0x1EBE4)=>
		{
			return prompt(_$_beff[68],_0x1EBE4[_$_beff[70]][_$_beff[69]])
		}
		)[_$_beff[67]]((_0x1EC39)=>
		{
			return console[_$_beff[51]](_$_beff[66],_0x1EC39)
		}
		)
	}
	
}
)()