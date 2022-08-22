/*
洪恩双语绘本 


[Script]
http-response https:\/\/bookapi\.ihuman\.com\/(v1\/get\_user\_info|v1\/get\_purchase\_list) requires-body=1,max-size=0,script-path=hnsyhb.js
[MITM]
hostname = bookapi.ihuman.com

*/

const path1 = "/v1/get_purchase_list";
const path2 = "/v1/get_user_info";

let key = {"expire_time":9955110875,"vip_type":1,"last_product_id":"com.ihuman.book.sub.vip1y"};

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.result["vip_status"] = key;	
}
if ($request.url.indexOf(path2) != -1){
	obj.result.userinfo["vip_status"] = key;
	
}


$done({body: JSON.stringify(obj)});
