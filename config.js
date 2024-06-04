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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_52_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICA3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNXhQSjRpN3FlcVlIbTJvS2xBY3VLVnRyR2I2eHBkQWRnZW1JeTlZN0NTQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ4ODg5MjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NjdDRUJFOTJGRTE3QTdFMDhDNTFFOEUzMzFFMkRDOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc0OTQ3MjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiei1VTlVrbkVRZnFMY0pIQzVINjlmZ1wiLFxuICBcInBob25lSWRcIjogXCJkNjI3NTMzYi0xMTQ2LTQzOWEtOTk3Zi04M2Y2NWU5ZDIwMDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgNDYsXG4gICAgICA5MixcbiAgICAgIDEzOCxcbiAgICAgIDE4NixcbiAgICAgIDg2LFxuICAgICAgNDEsXG4gICAgICAxMjYsXG4gICAgICAxMjMsXG4gICAgICAxMjAsXG4gICAgICAxNjMsXG4gICAgICAxMzAsXG4gICAgICAxMjgsXG4gICAgICAxMixcbiAgICAgIDg0LFxuICAgICAgOTcsXG4gICAgICA4NCxcbiAgICAgIDQxLFxuICAgICAgMTUzLFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDg3LFxuICAgICAgOTQsXG4gICAgICAxMTksXG4gICAgICAyLFxuICAgICAgMTU4LFxuICAgICAgMCxcbiAgICAgIDQxLFxuICAgICAgMjM4LFxuICAgICAgMjMxLFxuICAgICAgMTU5LFxuICAgICAgNjcsXG4gICAgICAxNTIsXG4gICAgICAxOTIsXG4gICAgICAxOTIsXG4gICAgICA2NSxcbiAgICAgIDIxLFxuICAgICAgMTE4LFxuICAgICAgMjEyLFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zRk05QzRCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4ODg5MjI2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODEwODQ1OTU3Mjg1NDU6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVR1eW9JREVMckgrN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3Q3NyanBuTitJZTNlQi9lbG9XVWxXaVJ0VDdwbnBhUm1PS3NBelR3RUQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlcvd0tlNDZNcVZIS0tPL3B5VEFYT0RHL25XNk0rL3hxdkhrQnpXaFNMS1hFNWp5V1FrbmJpUzhQNUpQTXBLUDRQZXJ2Z0FDdTMvWFhzRWNubHJuYUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlplbTA2WXQ5WnJyT0lLcFpVK2p1ZkJGNFRmSDNWd3NvZFZvM0E4RE02S1JUZmhOYTZpeHpPK3pkL1RZWFRyRTdRdGhrRTk5Y1BmOVpvYXZhYTFYcWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDg4ODkyMjY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0OTQ3MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdVZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ1Vi5qc29uIjogIntcImtleURhdGFcIjpcIlE4ajFaTDh4TW5pVXh1c3IyRVFhSHdrcjBqTUNROFVjZXVkTktPaUs5STQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODEwNzI3MTY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
