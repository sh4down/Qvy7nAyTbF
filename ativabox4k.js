// ==UserScript==
// @name         ATIVABOX 4K v0.1
// @version      0.1
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
var _$_2844=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F","\x73\x70\x6C\x69\x74","\x74\x76","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x73\x4B\x73\x36\x78\x54\x72\x2E\x70\x6E\x67","\x74\x69\x74\x6C\x65","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x6F\x59\x4F\x42\x73\x66\x75\x2E\x70\x6E\x67","\x4E\x4F\x56\x41\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x62\x46\x69\x46\x73\x54\x41\x2E\x70\x6E\x67","\x47\x45\x52\x41\x52\x20\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52","\x74\x61\x67\x20\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6F\x6E\x63\x6C\x69\x63\x6B","\x53\xE9\x72\x69\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x61\x21","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x46\x49\x4C\x4D\x45","\x4E\x4F\x56\x4F\x20\x46\x49\x4C\x4D\x45","\x46\x69\x6C\x6D\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x6F\x21","\x2D","\x6A\x73\x6F\x6E","\x77\x77\x77\x2E\x61\x74\x69\x76\x65\x61\x71\x75\x69\x2E\x63\x6F\x6D","\x77\x77\x77\x2E\x61\x74\x69\x76\x61\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x20","\x74\x2E\x6D\x65\x2F\x6D\x79\x66\x61\x6D\x69\x6C\x79\x63\x69\x6E\x65\x6D\x61\x34\x6B","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x74\x69\x74\x6C\x65","\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x76\x6F\x74\x65\x5F\x61\x76\x65\x72\x61\x67\x65","\x6F\x76\x65\x72\x76\x69\x65\x77","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x61\x6E\x64","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x49\x6E\x73\x69\x72\x61\x20\x6F\x20\x6E\x6F\x76\x6F\x20\x6C\x69\x6E\x6B\x20\x64\x6F\x20\x50\x6F\x73\x74\x65\x72\x21","\x49\x64\x69\x6F\x6D\x61","\x52\x65\x73\x6F\x6C\x75\xE7\xE3\x6F","","\x44\x61\x64\x6F\x73\x20\x6F\x62\x72\x69\x67\x61\x74\xF3\x72\x69\x6F\x73\x20\x65\x6D\x20\x62\x72\x61\x6E\x63\x6F\x21","\x72\x65\x6C\x6F\x61\x64","\x35\x30\x33\x30\x31\x32\x31\x35\x34\x38\x3A\x41\x41\x48\x6A\x6D\x62\x54\x63\x71\x53\x37\x54\x57\x48\x6B\x47\x48\x56\x4F\x38\x55\x63\x6A\x65\x62\x53\x5A\x56\x5A\x54\x5A\x6E\x57\x5F\x73","\x2D\x31\x30\x30\x31\x31\x36\x37\x37\x39\x39\x33\x35\x38","\x2D\x31\x30\x30\x31\x36\x39\x34\x32\x39\x32\x31\x35\x39","\x2D\x31\x30\x30\x31\x31\x35\x33\x31\x35\x34\x38\x33\x38","\x70\x72","\x74\x6C","\x75\x72\x6C","\x6C\x6F\x67","\x74\x68\x65\x6E","\x73\x65\x6E\x64\x50\x68\x6F\x74\x6F","\x6E\x61\x6D\x65","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x6E\x61\x6D\x65","\x66\x69\x72\x73\x74\x5F\x61\x69\x72\x5F\x64\x61\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x61\x67\x65\x2E\x74\x6D\x64\x62\x2E\x6F\x72\x67\x2F\x74\x2F\x70\x2F\x77\x35\x30\x30","\x75\x72\x6C\x70\x6F\x73\x74\x65\x72","\x70\x6F\x73\x74\x65\x72\x5F\x70\x61\x74\x68","\x41\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E","\x43\x6C\x69\x65\x6E\x74\x2D\x49\x44\x20\x34\x31\x64\x63\x37\x31\x34\x64\x38\x66\x39\x62\x66\x66\x31","\x61\x70\x70\x65\x6E\x64","\x69\x6D\x61\x67\x65","\x50\x4F\x53\x54","\x66\x6F\x6C\x6C\x6F\x77","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52\x20\x47\x45\x52\x41\x44\x4F\x21","\x6C\x69\x6E\x6B","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x33\x2F\x69\x6D\x61\x67\x65"];
(function()
{
	_$_2844[0];var _0x23359=window[_$_2844[2]][_$_2844[1]];//3
	var _0x232E4=_0x23359[_$_2844[4]](_$_2844[3])[3];//4
	if(_0x232E4== _$_2844[5])
	{
		var _0x2309B= new Image();//8
		_0x2309B[_$_2844[6]]= _$_2844[7];_0x2309B[_$_2844[8]]= _$_2844[9];var _0x230C2= new Image();//11
		_0x230C2[_$_2844[6]]= _$_2844[10];_0x230C2[_$_2844[8]]= _$_2844[11];var _0x230E9= new Image();//14
		_0x230E9[_$_2844[6]]= _$_2844[12];_0x230E9[_$_2844[8]]= _$_2844[13];var _0x23185=document[_$_2844[15]](_$_2844[14])[0];//18
		_0x23185[_$_2844[16]](_0x230C2);_0x23185[_$_2844[16]](_0x230E9);_0x2309B[_$_2844[17]]= function()
		{
			alert(_$_2844[18])
		}
		;_0x230C2[_$_2844[17]]= function()
		{
			_0x23332()
		}
		;_0x230E9[_$_2844[17]]= function()
		{
			_0x23221()
		}
		
	}
	else 
	{
		var _0x23026= new Image();//35
		_0x23026[_$_2844[6]]= _$_2844[7];_0x23026[_$_2844[8]]= _$_2844[19];var _0x2304D= new Image();//38
		_0x2304D[_$_2844[6]]= _$_2844[10];_0x2304D[_$_2844[8]]= _$_2844[20];var _0x23074= new Image();//41
		_0x23074[_$_2844[6]]= _$_2844[12];_0x23074[_$_2844[8]]= _$_2844[13];var _0x2315E=document[_$_2844[15]](_$_2844[14])[0];//45
		_0x2315E[_$_2844[16]](_0x2304D);_0x2315E[_$_2844[16]](_0x23074);_0x23026[_$_2844[17]]= function()
		{
			alert(_$_2844[21])
		}
		;_0x2304D[_$_2844[17]]= function()
		{
			_0x2330B()
		}
		;_0x23074[_$_2844[17]]= function()
		{
			_0x231FA()
		}
		
	}
	//6
	async function _0x2330B()
	{
		var _0x23971=window[_$_2844[2]][_$_2844[1]];//64
		var _0x232E4=_0x23971[_$_2844[4]](_$_2844[3])[4];//65
		var _0x2394A=_0x232E4[_$_2844[4]](_$_2844[22])[0];//66
		var _0x237C4=`https://api.themoviedb.org/3/movie/${_0x2394A}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//67
		var _0x23923= await fetch(_0x237C4);//69
		var _0x235C9= await _0x23923[_$_2844[23]]();//70
		_0x23248(_0x235C9)
	}
	let _0x23296={url:_$_2844[24],pr:_$_2844[25],tl:_$_2844[26]};//76
	var _0x23248=(_0x235C9)=>
	{
		var _0x23506=_0x235C9[_$_2844[8]];//83
		var _0x234DF=_0x235C9[_$_2844[27]];//84
		var _0x2341C=_0x235C9[_$_2844[28]];//85
		var _0x23380=_0x235C9[_$_2844[29]];//86
		var _0x2357B=_0x235C9[_$_2844[30]];//87
		var _0x2346A=_0x2341C[_$_2844[4]](_$_2844[22])[_$_2844[32]]()[_$_2844[31]](_$_2844[3]);//88
		var _0x23491=_0x23506[_$_2844[35]]()[_$_2844[34]](/&/g,_$_2844[33]);//89
		var _0x234B8=_0x234DF[_$_2844[35]]()[_$_2844[34]](/&/g,_$_2844[33]);//90
		var _0x2352D=prompt(_$_2844[36]);//92
		var _0x23443=prompt(_$_2844[37]);//93
		var _0x23554=prompt(_$_2844[38]);//94
		if(_0x2352D== _$_2844[39]| _0x23443== _$_2844[39]| _0x23554== _$_2844[39])
		{
			alert(_$_2844[40]);location[_$_2844[41]]()
		}
		else 
		{
			
		}
		//95
		const _0x233A7= new Bot(_$_2844[42],_$_2844[43]);//107
		const _0x233CE= new Bot(_$_2844[42],_$_2844[44]);//108
		const _0x233F5= new Bot(_$_2844[42],_$_2844[45]);//109
		var _0x235A2=`😱Filme: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0x23296[_$_2844[46]]} %0A%0A✳️Nossa lista de Conteúdo: %0A🌐 ${_0x23296[_$_2844[47]]} %0A%0A<b>- Nome:</b> ${_0x23491} %0A<b>- Nome Original:</b> ${_0x234B8} %0A<b>- Lançamento:</b> ${_0x2346A} %0A<b>- Avaliação:</b> ${_0x23380} %0A<b>- Resolução:</b> ${_0x23554} %0A<b>- Idioma:</b> ${_0x23443} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0x2357B} %0A%0A✅Acesse nosso Catálogo: %0A🌐 ${_0x23296[_$_2844[48]]}`;//110
		_0x233A7[_$_2844[51]](_0x2352D,_0x235A2)[_$_2844[50]]((_0x235F0)=>
		{
			console[_$_2844[49]](_0x235F0)
		}
		);_0x233CE[_$_2844[51]](_0x2352D,_0x235A2)[_$_2844[50]]((_0x235F0)=>
		{
			console[_$_2844[49]](_0x235F0)
		}
		);_0x233F5[_$_2844[51]](_0x2352D,_0x235A2)[_$_2844[50]]((_0x235F0)=>
		{
			console[_$_2844[49]](_0x235F0)
		}
		)
	}
	;//82
	async function _0x23332()
	{
		var _0x23A0D=window[_$_2844[2]][_$_2844[1]];//131
		var _0x232E4=_0x23A0D[_$_2844[4]](_$_2844[3])[4];//132
		var _0x239E6=_0x232E4[_$_2844[4]](_$_2844[22])[0];//133
		var _0x23998=`https://api.themoviedb.org/3/tv/${_0x239E6}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//134
		var _0x239BF= await fetch(_0x23998);//136
		var _0x23617= await _0x239BF[_$_2844[23]]();//137
		_0x2326F(_0x23617)
	}
	let _0x232BD={url:_$_2844[24],pr:_$_2844[25],tl:_$_2844[26]};//143
	var _0x2326F=(_0x23617)=>
	{
		var _0x23506=_0x23617[_$_2844[52]];//150
		var _0x234DF=_0x23617[_$_2844[53]];//151
		var _0x2341C=_0x23617[_$_2844[54]];//152
		var _0x23380=_0x23617[_$_2844[29]];//153
		var _0x2357B=_0x23617[_$_2844[30]];//154
		var _0x2346A=_0x2341C[_$_2844[4]](_$_2844[22])[_$_2844[32]]()[_$_2844[31]](_$_2844[3]);//155
		var _0x23491=_0x23506[_$_2844[35]]()[_$_2844[34]](/&/g,_$_2844[33]);//156
		var _0x234B8=_0x234DF[_$_2844[35]]()[_$_2844[34]](/&/g,_$_2844[33]);//157
		var _0x2352D=prompt(_$_2844[36]);//159
		var _0x23443=prompt(_$_2844[37]);//160
		var _0x23554=prompt(_$_2844[38]);//161
		if(_0x2352D== _$_2844[39]| _0x23443== _$_2844[39]| _0x23554== _$_2844[39])
		{
			alert(_$_2844[40]);location[_$_2844[41]]()
		}
		else 
		{
			
		}
		//162
		const _0x233A7= new Bot(_$_2844[42],_$_2844[43]);//174
		const _0x233CE= new Bot(_$_2844[42],_$_2844[44]);//175
		const _0x233F5= new Bot(_$_2844[42],_$_2844[45]);//176
		var _0x235A2=`😱Série: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0x232BD[_$_2844[46]]} %0A%0A✳️Nossa lista de Conteúdo <b>4K</b>: %0A🌐 ${_0x232BD[_$_2844[47]]} %0A%0A<b>- Nome:</b> ${_0x23491} %0A<b>- Nome Original:</b> ${_0x234B8} %0A<b>- Lançamento:</b> ${_0x2346A} %0A<b>- Avaliação:</b> ${_0x23380} %0A<b>- Resolução:</b> ${_0x23554} %0A<b>- Idioma:</b> ${_0x23443} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0x2357B} %0A%0A✅<b>Acesse nosso Catálogo:</b> %0A🌐 ${_0x232BD[_$_2844[48]]}`;//177
		_0x233A7[_$_2844[51]](_0x2352D,_0x235A2)[_$_2844[50]]((_0x235F0)=>
		{
			console[_$_2844[49]](_0x235F0)
		}
		);_0x233CE[_$_2844[51]](_0x2352D,_0x235A2)[_$_2844[50]]((_0x235F0)=>
		{
			console[_$_2844[49]](_0x235F0)
		}
		);_0x233F5[_$_2844[51]](_0x2352D,_0x235A2)[_$_2844[50]]((_0x235F0)=>
		{
			console[_$_2844[49]](_0x235F0)
		}
		)
	}
	;//149
	async function _0x231FA()
	{
		var _0x23860=window[_$_2844[2]][_$_2844[1]];//200
		var _0x23839=_0x23860[_$_2844[4]](_$_2844[3])[4];//201
		var _0x23812=_0x23839[_$_2844[4]](_$_2844[22])[0];//202
		var _0x237C4=`https://api.themoviedb.org/3/movie/${_0x23812}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//203
		var _0x237EB= await fetch(_0x237C4);//205
		var _0x236DA= await _0x237EB[_$_2844[23]]();//206
		_0x231AC(_0x236DA)
	}
	let _0x23110={urlposter:_$_2844[55]};//210
	var _0x231AC=(_0x236DA)=>
	{
		var _0x2368C=_0x23110[_$_2844[56]]+ _0x236DA[_$_2844[57]];//216
		var _0x23665= new Headers();//219
		_0x23665[_$_2844[60]](_$_2844[58],_$_2844[59]);var _0x2363E= new FormData();//222
		_0x2363E[_$_2844[60]](_$_2844[61],_0x2368C);var _0x236B3={method:_$_2844[62],headers:_0x23665,body:_0x2363E,redirect:_$_2844[63]};//225
		fetch(_$_2844[69],_0x236B3)[_$_2844[50]]((_0x23701)=>
		{
			return _0x23701[_$_2844[23]]()
		}
		)[_$_2844[50]]((_0x23728)=>
		{
			return prompt(_$_2844[66],_0x23728[_$_2844[68]][_$_2844[67]])
		}
		)[_$_2844[65]]((_0x2374F)=>
		{
			return console[_$_2844[49]](_$_2844[64],_0x2374F)
		}
		)
	}
	;//214
	async function _0x23221()
	{
		var _0x238FC=window[_$_2844[2]][_$_2844[1]];//242
		var _0x238D5=_0x238FC[_$_2844[4]](_$_2844[3])[4];//243
		var _0x238AE=_0x238D5[_$_2844[4]](_$_2844[22])[0];//244
		var _0x237C4=`https://api.themoviedb.org/3/tv/${_0x238AE}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//245
		var _0x23887= await fetch(_0x237C4);//247
		var _0x2379D= await _0x23887[_$_2844[23]]();//248
		_0x231D3(_0x2379D)
	}
	let _0x23137={urlposter:_$_2844[55]};//252
	var _0x231D3=(_0x2379D)=>
	{
		var _0x23776=_0x23137[_$_2844[56]]+ _0x2379D[_$_2844[57]];//258
		var _0x23665= new Headers();//261
		_0x23665[_$_2844[60]](_$_2844[58],_$_2844[59]);var _0x2363E= new FormData();//264
		_0x2363E[_$_2844[60]](_$_2844[61],_0x23776);var _0x236B3={method:_$_2844[62],headers:_0x23665,body:_0x2363E,redirect:_$_2844[63]};//267
		fetch(_$_2844[69],_0x236B3)[_$_2844[50]]((_0x23701)=>
		{
			return _0x23701[_$_2844[23]]()
		}
		)[_$_2844[50]]((_0x23728)=>
		{
			return prompt(_$_2844[66],_0x23728[_$_2844[68]][_$_2844[67]])
		}
		)[_$_2844[65]]((_0x2374F)=>
		{
			return console[_$_2844[49]](_$_2844[64],_0x2374F)
		}
		)
	}
	
}
)()