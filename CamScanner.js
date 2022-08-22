/*
CamScanner 解锁部分高级特权

***************************
Surge4 or Loon:

[Script]
http-response https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1,max-size=0,script-path=扫描全能王.js

[MITM]
hostname = ap*.intsig.net


**************************/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"2687017600"}}};
$done({body: JSON.stringify(obj)});
