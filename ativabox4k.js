// ==UserScript==
// @name         ATIVABOX 4K v0.3
// @version      0.3
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
var _$_389a=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F","\x73\x70\x6C\x69\x74","\x74\x76","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x73\x4B\x73\x36\x78\x54\x72\x2E\x70\x6E\x67","\x74\x69\x74\x6C\x65","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x6F\x59\x4F\x42\x73\x66\x75\x2E\x70\x6E\x67","\x4E\x4F\x56\x41\x20\x53\xC9\x52\x49\x45","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x62\x46\x69\x46\x73\x54\x41\x2E\x70\x6E\x67","\x47\x45\x52\x41\x52\x20\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52","\x74\x61\x67\x20\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6F\x6E\x63\x6C\x69\x63\x6B","\x53\xE9\x72\x69\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x61\x21","\x41\x54\x55\x41\x4C\x49\x5A\x41\x52\x20\x46\x49\x4C\x4D\x45","\x4E\x4F\x56\x4F\x20\x46\x49\x4C\x4D\x45","\x46\x69\x6C\x6D\x65\x20\x41\x74\x75\x61\x6C\x69\x7A\x61\x64\x6F\x21","\x2D","\x6A\x73\x6F\x6E","\x77\x77\x77\x2E\x61\x74\x69\x76\x65\x61\x71\x75\x69\x2E\x63\x6F\x6D","\x77\x77\x77\x2E\x61\x74\x69\x76\x61\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x20","\x74\x2E\x6D\x65\x2F\x6D\x79\x66\x61\x6D\x69\x6C\x79\x63\x69\x6E\x65\x6D\x61\x34\x6B","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x74\x69\x74\x6C\x65","\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x76\x6F\x74\x65\x5F\x61\x76\x65\x72\x61\x67\x65","\x6F\x76\x65\x72\x76\x69\x65\x77","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x61\x6E\x64","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x2E","\x49\x6E\x73\x69\x72\x61\x20\x6F\x20\x6E\x6F\x76\x6F\x20\x6C\x69\x6E\x6B\x20\x64\x6F\x20\x50\x6F\x73\x74\x65\x72\x21","\x49\x64\x69\x6F\x6D\x61\x3A","\x50\x54\x2D\x42\x52","\x52\x65\x73\x6F\x6C\x75\xE7\xE3\x6F\x3A","\x34\x4B","","\x44\x61\x64\x6F\x73\x20\x6F\x62\x72\x69\x67\x61\x74\xF3\x72\x69\x6F\x73\x20\x65\x6D\x20\x62\x72\x61\x6E\x63\x6F\x21","\x72\x65\x6C\x6F\x61\x64","\x35\x30\x33\x30\x31\x32\x31\x35\x34\x38\x3A\x41\x41\x48\x6A\x6D\x62\x54\x63\x71\x53\x37\x54\x57\x48\x6B\x47\x48\x56\x4F\x38\x55\x63\x6A\x65\x62\x53\x5A\x56\x5A\x54\x5A\x6E\x57\x5F\x73","\x2D\x31\x30\x30\x31\x31\x36\x37\x37\x39\x39\x33\x35\x38","\x2D\x31\x30\x30\x31\x36\x39\x34\x32\x39\x32\x31\x35\x39","\x2D\x31\x30\x30\x31\x31\x35\x33\x31\x35\x34\x38\x33\x38","\x70\x72","\x74\x6C","\x75\x72\x6C","\x6C\x6F\x67","\x74\x68\x65\x6E","\x73\x65\x6E\x64\x50\x68\x6F\x74\x6F","\x6E\x61\x6D\x65","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x6E\x61\x6D\x65","\x66\x69\x72\x73\x74\x5F\x61\x69\x72\x5F\x64\x61\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x61\x67\x65\x2E\x74\x6D\x64\x62\x2E\x6F\x72\x67\x2F\x74\x2F\x70\x2F\x77\x35\x30\x30","\x75\x72\x6C\x70\x6F\x73\x74\x65\x72","\x70\x6F\x73\x74\x65\x72\x5F\x70\x61\x74\x68","\x41\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E","\x43\x6C\x69\x65\x6E\x74\x2D\x49\x44\x20\x34\x31\x64\x63\x37\x31\x34\x64\x38\x66\x39\x62\x66\x66\x31","\x61\x70\x70\x65\x6E\x64","\x69\x6D\x61\x67\x65","\x50\x4F\x53\x54","\x66\x6F\x6C\x6C\x6F\x77","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x4E\x4F\x56\x4F\x20\x50\x4F\x53\x54\x45\x52\x20\x47\x45\x52\x41\x44\x4F\x21","\x6C\x69\x6E\x6B","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x33\x2F\x69\x6D\x61\x67\x65"];
(function()
{
	_$_389a[0];var _0x17A6E=window[_$_389a[2]][_$_389a[1]];//3
	var _0x17A2C=_0x17A6E[_$_389a[4]](_$_389a[3])[3];//4
	if(_0x17A2C== _$_389a[5])
	{
		var _0x178E2= new Image();//8
		_0x178E2[_$_389a[6]]= _$_389a[7];_0x178E2[_$_389a[8]]= _$_389a[9];var _0x178F8= new Image();//11
		_0x178F8[_$_389a[6]]= _$_389a[10];_0x178F8[_$_389a[8]]= _$_389a[11];var _0x1790E= new Image();//14
		_0x1790E[_$_389a[6]]= _$_389a[12];_0x1790E[_$_389a[8]]= _$_389a[13];var _0x17966=document[_$_389a[15]](_$_389a[14])[0];//18
		_0x17966[_$_389a[16]](_0x178F8);_0x17966[_$_389a[16]](_0x1790E);_0x178E2[_$_389a[17]]= function()
		{
			alert(_$_389a[18])
		}
		;_0x178F8[_$_389a[17]]= function()
		{
			_0x17A58()
		}
		;_0x1790E[_$_389a[17]]= function()
		{
			_0x179BE()
		}
		
	}
	else 
	{
		var _0x178A0= new Image();//35
		_0x178A0[_$_389a[6]]= _$_389a[7];_0x178A0[_$_389a[8]]= _$_389a[19];var _0x178B6= new Image();//38
		_0x178B6[_$_389a[6]]= _$_389a[10];_0x178B6[_$_389a[8]]= _$_389a[20];var _0x178CC= new Image();//41
		_0x178CC[_$_389a[6]]= _$_389a[12];_0x178CC[_$_389a[8]]= _$_389a[13];var _0x17950=document[_$_389a[15]](_$_389a[14])[0];//45
		_0x17950[_$_389a[16]](_0x178B6);_0x17950[_$_389a[16]](_0x178CC);_0x178A0[_$_389a[17]]= function()
		{
			alert(_$_389a[21])
		}
		;_0x178B6[_$_389a[17]]= function()
		{
			_0x17A42()
		}
		;_0x178CC[_$_389a[17]]= function()
		{
			_0x179A8()
		}
		
	}
	//6
	async function _0x17A42()
	{
		var _0x17E20=window[_$_389a[2]][_$_389a[1]];//64
		var _0x17A2C=_0x17E20[_$_389a[4]](_$_389a[3])[4];//65
		var _0x17E0A=_0x17A2C[_$_389a[4]](_$_389a[22])[0];//66
		var _0x17D2E=`https://api.themoviedb.org/3/movie/${_0x17E0A}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//67
		var _0x17DF4= await fetch(_0x17D2E);//69
		var _0x17BE4= await _0x17DF4[_$_389a[23]]();//70
		_0x179D4(_0x17BE4)
	}
	let _0x17A00={url:_$_389a[24],pr:_$_389a[25],tl:_$_389a[26]};//76
	var _0x179D4=(_0x17BE4)=>
	{
		var _0x17B60=_0x17BE4[_$_389a[8]];//83
		var _0x17B4A=_0x17BE4[_$_389a[27]];//84
		var _0x17ADC=_0x17BE4[_$_389a[28]];//85
		var _0x17A84=_0x17BE4[_$_389a[29]];//86
		var _0x17BA2=_0x17BE4[_$_389a[30]];//87
		var _0x17B08=_0x17ADC[_$_389a[4]](_$_389a[22])[_$_389a[32]]()[_$_389a[31]](_$_389a[3]);//88
		var _0x17B1E=_0x17B60[_$_389a[35]]()[_$_389a[34]](/&/g,_$_389a[33]);//89
		var _0x17B34=_0x17B4A[_$_389a[35]]()[_$_389a[34]](/&/g,_$_389a[33]);//90
		var _0x17BB8=_0x17BA2[_$_389a[4]](_$_389a[36])[0];//91
		var _0x17B76=prompt(_$_389a[37]);//93
		var _0x17AF2=prompt(_$_389a[38],_$_389a[39]);//94
		var _0x17B8C=prompt(_$_389a[40],_$_389a[41]);//95
		if(_0x17B76== _$_389a[42]| _0x17AF2== _$_389a[42]| _0x17B8C== _$_389a[42])
		{
			alert(_$_389a[43]);location[_$_389a[44]]()
		}
		else 
		{
			
		}
		//96
		const _0x17A9A= new Bot(_$_389a[45],_$_389a[46]);//108
		const _0x17AB0= new Bot(_$_389a[45],_$_389a[47]);//109
		const _0x17AC6= new Bot(_$_389a[45],_$_389a[48]);//110
		var _0x17BCE=`😱Filme: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0x17A00[_$_389a[49]]} %0A%0A✳️Nossa lista de Conteúdo: %0A🌐 ${_0x17A00[_$_389a[50]]} %0A%0A<b>- Nome:</b> ${_0x17B1E} %0A<b>- Nome Original:</b> ${_0x17B34} %0A<b>- Lançamento:</b> ${_0x17B08} %0A<b>- Avaliação:</b> ${_0x17A84} %0A<b>- Resolução:</b> ${_0x17B8C} %0A<b>- Idioma:</b> ${_0x17AF2} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0x17BB8} %0A%0A✅Acesse nosso Catálogo: %0A🌐 ${_0x17A00[_$_389a[51]]}`;//111
		_0x17A9A[_$_389a[54]](_0x17B76,_0x17BCE)[_$_389a[53]]((_0x17BFA)=>
		{
			console[_$_389a[52]](_0x17BFA)
		}
		);_0x17AB0[_$_389a[54]](_0x17B76,_0x17BCE)[_$_389a[53]]((_0x17BFA)=>
		{
			console[_$_389a[52]](_0x17BFA)
		}
		);_0x17AC6[_$_389a[54]](_0x17B76,_0x17BCE)[_$_389a[53]]((_0x17BFA)=>
		{
			console[_$_389a[52]](_0x17BFA)
		}
		)
	}
	;//82
	async function _0x17A58()
	{
		var _0x17E78=window[_$_389a[2]][_$_389a[1]];//132
		var _0x17A2C=_0x17E78[_$_389a[4]](_$_389a[3])[4];//133
		var _0x17E62=_0x17A2C[_$_389a[4]](_$_389a[22])[0];//134
		var _0x17E36=`https://api.themoviedb.org/3/tv/${_0x17E62}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//135
		var _0x17E4C= await fetch(_0x17E36);//137
		var _0x17C3C= await _0x17E4C[_$_389a[23]]();//138
		_0x179EA(_0x17C3C)
	}
	let _0x17A16={url:_$_389a[24],pr:_$_389a[25],tl:_$_389a[26]};//144
	var _0x179EA=(_0x17C3C)=>
	{
		var _0x17B60=_0x17C3C[_$_389a[55]];//151
		var _0x17B4A=_0x17C3C[_$_389a[56]];//152
		var _0x17ADC=_0x17C3C[_$_389a[57]];//153
		var _0x17A84=_0x17C3C[_$_389a[29]];//154
		var _0x17C10=_0x17C3C[_$_389a[30]];//155
		var _0x17B08=_0x17ADC[_$_389a[4]](_$_389a[22])[_$_389a[32]]()[_$_389a[31]](_$_389a[3]);//156
		var _0x17B1E=_0x17B60[_$_389a[35]]()[_$_389a[34]](/&/g,_$_389a[33]);//157
		var _0x17B34=_0x17B4A[_$_389a[35]]()[_$_389a[34]](/&/g,_$_389a[33]);//158
		var _0x17C26=_0x17C10[_$_389a[4]](_$_389a[36])[0];//159
		var _0x17B76=prompt(_$_389a[37]);//161
		var _0x17AF2=prompt(_$_389a[38],_$_389a[39]);//162
		var _0x17B8C=prompt(_$_389a[40],_$_389a[41]);//163
		if(_0x17B76== _$_389a[42]| _0x17AF2== _$_389a[42]| _0x17B8C== _$_389a[42])
		{
			alert(_$_389a[43]);location[_$_389a[44]]()
		}
		else 
		{
			
		}
		//164
		const _0x17A9A= new Bot(_$_389a[45],_$_389a[46]);//176
		const _0x17AB0= new Bot(_$_389a[45],_$_389a[47]);//177
		const _0x17AC6= new Bot(_$_389a[45],_$_389a[48]);//178
		var _0x17BCE=`😱Série: Adicionado nas <b>NUVENS MFC</b> %0A%0A✅Nuvem <b>PREMIUM</b> Acesse: %0A🌐 ${_0x17A16[_$_389a[49]]} %0A%0A✳️Nossa lista de Conteúdo <b>4K</b>: %0A🌐 ${_0x17A16[_$_389a[50]]} %0A%0A<b>- Nome:</b> ${_0x17B1E} %0A<b>- Nome Original:</b> ${_0x17B34} %0A<b>- Lançamento:</b> ${_0x17B08} %0A<b>- Avaliação:</b> ${_0x17A84} %0A<b>- Resolução:</b> ${_0x17B8C} %0A<b>- Idioma:</b> ${_0x17AF2} %0A%0A- <b><i>Sinopse:</i></b>%0A%0A ${_0x17C26} %0A%0A✅<b>Acesse nosso Catálogo:</b> %0A🌐 ${_0x17A16[_$_389a[51]]}`;//179
		_0x17A9A[_$_389a[54]](_0x17B76,_0x17BCE)[_$_389a[53]]((_0x17BFA)=>
		{
			console[_$_389a[52]](_0x17BFA)
		}
		);_0x17AB0[_$_389a[54]](_0x17B76,_0x17BCE)[_$_389a[53]]((_0x17BFA)=>
		{
			console[_$_389a[52]](_0x17BFA)
		}
		);_0x17AC6[_$_389a[54]](_0x17B76,_0x17BCE)[_$_389a[53]]((_0x17BFA)=>
		{
			console[_$_389a[52]](_0x17BFA)
		}
		)
	}
	;//150
	async function _0x179A8()
	{
		var _0x17D86=window[_$_389a[2]][_$_389a[1]];//202
		var _0x17D70=_0x17D86[_$_389a[4]](_$_389a[3])[4];//203
		var _0x17D5A=_0x17D70[_$_389a[4]](_$_389a[22])[0];//204
		var _0x17D2E=`https://api.themoviedb.org/3/movie/${_0x17D5A}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//205
		var _0x17D44= await fetch(_0x17D2E);//207
		var _0x17CAA= await _0x17D44[_$_389a[23]]();//208
		_0x1797C(_0x17CAA)
	}
	let _0x17924={urlposter:_$_389a[58]};//212
	var _0x1797C=(_0x17CAA)=>
	{
		var _0x17C7E=_0x17924[_$_389a[59]]+ _0x17CAA[_$_389a[60]];//218
		var _0x17C68= new Headers();//221
		_0x17C68[_$_389a[63]](_$_389a[61],_$_389a[62]);var _0x17C52= new FormData();//224
		_0x17C52[_$_389a[63]](_$_389a[64],_0x17C7E);var _0x17C94={method:_$_389a[65],headers:_0x17C68,body:_0x17C52,redirect:_$_389a[66]};//227
		fetch(_$_389a[72],_0x17C94)[_$_389a[53]]((_0x17CC0)=>
		{
			return _0x17CC0[_$_389a[23]]()
		}
		)[_$_389a[53]]((_0x17CD6)=>
		{
			return prompt(_$_389a[69],_0x17CD6[_$_389a[71]][_$_389a[70]])
		}
		)[_$_389a[68]]((_0x17CEC)=>
		{
			return console[_$_389a[52]](_$_389a[67],_0x17CEC)
		}
		)
	}
	;//216
	async function _0x179BE()
	{
		var _0x17DDE=window[_$_389a[2]][_$_389a[1]];//244
		var _0x17DC8=_0x17DDE[_$_389a[4]](_$_389a[3])[4];//245
		var _0x17DB2=_0x17DC8[_$_389a[4]](_$_389a[22])[0];//246
		var _0x17D2E=`https://api.themoviedb.org/3/tv/${_0x17DB2}?api_key=1b23c869e18c0eb04a0af6628dc078ad&language=pt-BR`;//247
		var _0x17D9C= await fetch(_0x17D2E);//249
		var _0x17D18= await _0x17D9C[_$_389a[23]]();//250
		_0x17992(_0x17D18)
	}
	let _0x1793A={urlposter:_$_389a[58]};//254
	var _0x17992=(_0x17D18)=>
	{
		var _0x17D02=_0x1793A[_$_389a[59]]+ _0x17D18[_$_389a[60]];//260
		var _0x17C68= new Headers();//263
		_0x17C68[_$_389a[63]](_$_389a[61],_$_389a[62]);var _0x17C52= new FormData();//266
		_0x17C52[_$_389a[63]](_$_389a[64],_0x17D02);var _0x17C94={method:_$_389a[65],headers:_0x17C68,body:_0x17C52,redirect:_$_389a[66]};//269
		fetch(_$_389a[72],_0x17C94)[_$_389a[53]]((_0x17CC0)=>
		{
			return _0x17CC0[_$_389a[23]]()
		}
		)[_$_389a[53]]((_0x17CD6)=>
		{
			return prompt(_$_389a[69],_0x17CD6[_$_389a[71]][_$_389a[70]])
		}
		)[_$_389a[68]]((_0x17CEC)=>
		{
			return console[_$_389a[52]](_$_389a[67],_0x17CEC)
		}
		)
	}
	
}
)()