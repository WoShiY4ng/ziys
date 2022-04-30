/*88888
这是开机启动脚本  家到 开机后启动的脚本里面
/media/AiDisk_a1/vmess/xray &
logger -t "【xray】" "脚本完成"

cd /media/AiDisk_a1/kuwo/ && /opt/bin/node index.js >> ./uk.log 2>&1

logger -t "【kuwo】" "脚本完成"
*/


// rewrite ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice)

//使用express 搭建服务器  用于返回body
//监听80端口  直接配合host使用192.168.1.1   vip1.kuwo.cn

var express = require("express");
var app = express();  
var hostName = '0.0.0.0';
var port = 80;



app.get("/vip/v2/user/vip",function(req,res){
	let obj = {};
    obj.data["isNewUser"] = "2";
	obj.data["vipLuxuryExpire"] = "1835312949000";
	obj.data["time"] = "1961170340993";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "1835312949000";
	obj.data["vipOverSeasExpire"] = "1835312949000";
	obj.data["vipExpire"] = "1835312949000";
	obj.data["vip3Expire"] = "1835312949000";
	body = JSON.stringify(obj);
    res.send(body);
})

app.get("/vip/spi/mservice",function(req,res){
	let obj = {};
    obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
    res.send(body);
})


app.listen(port,hostName,function(){

   console.log(`服务器运行在http://${hostName}:${port}`);

});





