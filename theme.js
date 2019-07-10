const vm = new Vue({
	el:'#app',
	data:{
		result:"ここにテーマが出力されます",
		theme:[
			"ゲーム",
			"学校",
			"旅行",
			"野球",
			"ファッション",
			"お正月",
			"文化祭",
			"新垣結衣",
			"IT企業",
			"映画",
			"選挙",
			"初恋",
			"冬の味覚",
			"夏休み",
			"遊園地",
			"マンガ",
			"お受験",
			"少年犯罪",
			"ウェブクルー",
			"理想の恋人",
			"YouTube",
			"SMAP",
			"七五三",
			"修学旅行",
			"温泉旅館",
			"平安時代",
			"浮気",
			"お化け屋敷",
			"旅立ちの朝",
			"料理",
			"無人島",
			"ミュージカル",
			"ケーキ屋さん",
			"コンビニ",
			"こたつ",
			"蕎麦",
			"高校生クイズ",
			"休日",
			"虫刺され",
			"二日酔い",
			"誕生日",
			"ゴリラの倒し方",
			"ヤンキー",
			"華金"
		]
	},
	methods:{
		themeChoose:function(){
			const num = Math.floor(Math.random()*this.theme.length);
			this.result = this.theme[num];
		}
	}
});