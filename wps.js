
/*

#!name=WPS会员
#!desc=WPS解锁本地会员,支持大陆版以及非大陆版(2022.07.10)
#!openUrl=https://github.com/I-am-R-E/Functional-Store-Hub/tree/Master/WPSOffice
#!author=@R·E https://t.me/Functional_Store_Hub

[Script]
WPS会员 = type=http-response,pattern=^https?:\/\/.*?account\.wps\.(com|cn)(:\d+)?\/api\/users\/\w+\/overview$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/WoShiY4ng/ziys/main/wps.js,script-update-interval=0

[MITM]
hostname = %APPEND% account.wps.cn,*account.wps.com





脚本功能：解锁WPS本地会员
脚本作者：R·E
支持版本：商店最新 11.24.0(US) 11.26.1(CN)
更新时间：2022.07.10
问题反馈：https://t.me/Functional_Store_Hub
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，禁止转载与贩卖！⚠️⚠️⚠️
*/
var a='{\x22result\x22:\x22ok\x22,\x22privilege\x22:[],\x22total_cost\x22:0,\x22level\x22:88,\x22wealth\x22:0,\x22exp\x22:0,\x22vip\x22:{\x22has_ad\x22:0,\x22enabled\x22:[]},\x22total_buy\x22:0}';var b=JSON['parse'](a);const c=new Array('data_recover','ocr','pdf2doc','pdf_merge','pdf_sign','pdf_split');const d=new Array(['超级会员',0x28],['WPS会员',0x14],['稻壳会员',0xc]);const e=0x70db6800;b['server_time']=e;b['userid']=e;b['vip']['name']=d[0x0][0x0];b['vip']['memberid']=d[0x0][0x1];b['vip']['expire_time']=e;for(i=0x0;i<c['length'];i++){b['privilege'][i]={'times':0x0,'expire_time':e,'spid':c[i]};}for(o=0x0;o<d['length'];o++){b['vip']['enabled'][o]={'name':d[o][0x0],'expire_time':e,'memberid':d[o][0x1]};}console['log']('\x0aR·E\x20WPS\x20Script\x20Log:\x0aWPS已解锁到2030年\x0a😎可享受'+c['length']+'+项会员服务');$done({body : JSON['stringify'](b)});
