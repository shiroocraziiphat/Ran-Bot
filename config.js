
let path = require('path')
let fs = require('fs')
let tum = fs.readFileSync('./src/elaina2.jpeg')
let tum2 = fs.readFileSync('./src/emror.jpeg')
let tum3 = fs.readFileSync('./ah1.jpeg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `Runtime\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
global.owner = ['6282361160044', '0' ] // Put your number here
global.fake = ['6282361160044']
global.fakeNum = ['6282361160044','0' ]
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  lol: 'https://api.lolhuman.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://api.ichikaa.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'KingOfBear',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4'
}

// Sticker WM
global.packname =  `hiro`
global.author = `akemi`
global.wait = 'Wait a minute'
global.dga = 'Jika Ingin Membeli Limit\nSilahkan Ketik #buy 1'
global.thumb = tum
global.thumb2 = tum2
global.thumb3 = tum3
global.wm = `hiro-akemi`

global.runtime = teks
global.multiplier = 69 // The higher, The harder levelup
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
