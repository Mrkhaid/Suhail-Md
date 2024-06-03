uhiconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_54_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVpTndtcVZrRVRMWEpQc05HTy9CZzlhRXBCTVVvc3RqNCt1aEhMWFhhY2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0ODg4OTIyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDg2MEJGM0E2NjAzMEYzM0ZENDhDNTZBOEJENTk1NDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MzkwNDcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImU4dS02VXl1UkllSjhGaENHTTJmX3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzRkMGQyYzUtNWU5Ny00YjI5LWJiOWUtN2M2NTMyNmY5MzQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDE4NSxcbiAgICAgIDY2LFxuICAgICAgMjM1LFxuICAgICAgMTAyLFxuICAgICAgMTYzLFxuICAgICAgNzIsXG4gICAgICA2NixcbiAgICAgIDU2LFxuICAgICAgMjQxLFxuICAgICAgMjEzLFxuICAgICAgMTkzLFxuICAgICAgMjIyLFxuICAgICAgMTAyLFxuICAgICAgMTUyLFxuICAgICAgMTkxLFxuICAgICAgMjE3LFxuICAgICAgMTQ2LFxuICAgICAgOTcsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgNDEsXG4gICAgICA0NSxcbiAgICAgIDExMCxcbiAgICAgIDIsXG4gICAgICAxMDUsXG4gICAgICAxNjYsXG4gICAgICAyNixcbiAgICAgIDIwMSxcbiAgICAgIDY3LFxuICAgICAgODQsXG4gICAgICAxMjUsXG4gICAgICAxNyxcbiAgICAgIDIzMyxcbiAgICAgIDk4LFxuICAgICAgMyxcbiAgICAgIDU4LFxuICAgICAgMTc2LFxuICAgICAgMTk4LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjJUUE45VEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDg4ODkyMjY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTA4NDU5NTcyODU0NToxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLaGFsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUHV5b0lERVAyWTliSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndDc3JqcG5OK0llM2VCL2Vsb1dVbFdpUnRUN3BucGFSbU9Lc0F6VHdFRDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzZZUE56Um9lZzcxa2MwWG93TGhyYlRwS211N1plTFc4dkNid010VlltNy9ud2pYSFpMOS9xbllEakhCR3RUOXdpVEp4TlB6WE81ZE82L1JMbGxtQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRFBNMDFTYytMY01adzhhT3B2a25BMmlXVkhkdE1LQkhrZEtvT3ZFcDVEVnNnVEJJOHo0Vk9NV01qMWkwbE5ueHIvTk9lMm9IbWJGL2xNYldwNGQwQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0ODg4OTIyNjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzM5MDQ2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ1VlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnVWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUThqMVpMOHhNbmlVeHVzcjJFUWFId2tyMGpNQ1E4VWNldWROS09pSzlJND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTA3MjcxNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
