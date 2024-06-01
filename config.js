const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_05_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJyR0k2Vi9PQWtPbnBRVWd4VDdQVk1qYXIyclVjSGMrSGFuZG5meTN4UnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0ODg4OTIyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjVDNTc1RjIxQUREOTk5ODRGRDk4MTYyN0E3Nzk3NkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MjI5MTUyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkMwMjR6a3FVU2dPUzZkMFRsWEVCM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmUzZjQ5NmUtMGZkMC00Yzk5LWIyMzItMTc2ZDIzMzlmMTBjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMjQ3LFxuICAgICAgMjE1LFxuICAgICAgMTg4LFxuICAgICAgNzksXG4gICAgICAxMTYsXG4gICAgICAyNTUsXG4gICAgICAxNzMsXG4gICAgICA2MSxcbiAgICAgIDEzOSxcbiAgICAgIDY4LFxuICAgICAgOSxcbiAgICAgIDEyNCxcbiAgICAgIDIyMyxcbiAgICAgIDI0NixcbiAgICAgIDE0OCxcbiAgICAgIDEsXG4gICAgICAxMDksXG4gICAgICAyMjUsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxOSxcbiAgICAgIDE3NCxcbiAgICAgIDE0MSxcbiAgICAgIDI1NSxcbiAgICAgIDE4NCxcbiAgICAgIDE0MCxcbiAgICAgIDE4MSxcbiAgICAgIDE3MSxcbiAgICAgIDc3LFxuICAgICAgMTIzLFxuICAgICAgMTkzLFxuICAgICAgMTM2LFxuICAgICAgOTIsXG4gICAgICAzNyxcbiAgICAgIDc0LFxuICAgICAgNjMsXG4gICAgICAxNTAsXG4gICAgICAxNTIsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVpOWktXU01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDg4ODkyMjY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMDg0NTk1NzI4NTQ1OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2hhbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHZ0eW9JREVOaXM2N0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3Q3NyanBuTitJZTNlQi9lbG9XVWxXaVJ0VDdwbnBhUm1PS3NBelR3RUQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhVNTc3bWZBektnL25ubjNiWTlKenpzejVMNzZ1YWZrTG5GanAva3BZSW41LzVyVzJJMmJmM0R2cWxSUFlxVU1lbEE0MFV4bk1rVWd0ME5JY1BwREN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllMUm5kZ3ZVdDdJcWxYak1Lckt3RnBwZTRseHErZy95OC9TUzh3U0dTMU0zRHJqMkpicWtoSGM2cnJYSTJpcWljbmJaaFU1WlI2LzFFeTZOd2ZkTUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDg4ODkyMjY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzIyOTE0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ1VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnVVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTk2elh6NUdjZlBMbXFscGFCOWM0MjA3azBYaytxeDZxeWxSVmszcHFRST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTA3MjcxNjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzIyOTE0OTgzN1wifSIKfQ=="  // PUT your SESSION_ID 


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
