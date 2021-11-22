const TelegramBot = require('node-telegram-bot-api');

const token = "2112262080:AAHfulVH82xaqjNo_4i1jBZ17M5abP6vbPY";
const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
{command:'/start', description:"начало"}
])

let rsdp = [
`
Понедельник
1.Хімія
2.Мистецтво
3.Алгебра
4.Біология
5.Фіз-ра
6.Укр.мова 


`
,
`
Вторник
1.Англ.мова
2.Фіз-ра
3.Укр.літ
4.Геометрія
5.Фізіка
6.Інформатика


`
,
`
Среда
1.Хімія
2.Укр.мова
3.Географія
4.Фіз-ра
5.Зар.літ
6.Музика

`
,
`
Четверг
1.Труд
2.Укр.літ
3.Алгебра
4.Англ.мова
5.Історія
6.Біология



`
,
`
Пятница
1.Англ.мова
2.Осн.здор
3.Геометрія
4.Зар.літ
5.Географія


`

]
bot.onText(/\/start/, function(msg) {
	const id= msg.chat.id;
  bot.sendMessage(id,`
  	Это расписание 7-a
  	Введите:Понедельник,вторник, среда,четверг,пятница 
  	и получете расписание)


  	`)
})



bot.on("message", function(msg){
	
	const id= msg.chat.id;
	const text = msg.text

	if(text.toLowerCase()=="понедельник"){
		bot.sendMessage(id,rsdp[0])
	}
	if(text.toLowerCase()=="вторник"){
		bot.sendMessage(id,rsdp[1])
	}
	if(text.toLowerCase()=="среда"){
		bot.sendMessage(id,rsdp[2])
	}
	if(text.toLowerCase()=="четверг"){
		bot.sendMessage(id,rsdp[3])
	}
	if(text.toLowerCase()=="пятница"){
		bot.sendMessage(id,rsdp[4])
	}
	if(text.toLowerCase()== "кукурудза"){
		bot.sendMessage(id,"Слава нації")
	}
	if(text.toLowerCase() == "1"){
		bot.sendPhoto(id,"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/250px-Flag_of_Ukraine.svg.png")
	}
	

})