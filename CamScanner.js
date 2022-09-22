/*
CamScanner 解锁部分高级特权
2022-9-20
***************************
Surge4 or Loon:

[Script]
http-response https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1,max-size=0,script-path=扫描全能王.js

[MITM]
hostname = ap*.intsig.net
**************************/
let body = JSON.parse($response.body);
    body.data.ocr_balance = 100;
body.data.watermarks_balance = 100;
body.data.pdfword_balance = 100;
body.data.immt_expy_points = 100;
body.data.no_login_ocr_balance = 20;
   
 $done({body:JSON.stringify(body)})

    
/***************
    body.data.psnl_vip_property = {"renew_method": "appstore",
      "initial_tm": "1614867690",
      "svip": 1,
      "auto_renewal": true,
      "ms_first_pay": 0,
      "pending": 0,
      "group2_paid": 0,
      "inherited_flag": 0,
      "nxt_renew_tm": "9915126887",
      "level_info": {
        "level": 1,
        "days": 1,
        "end_days": 30
      },
      "group1_paid": 1,
      "ys_first_pay": 0,
      "renew_type": "year",
      "expiry": 9915130487,
      "grade": 2,
      "last_payment_method": "appstore",
      "product_id": "com.intsig.camscanner.premiums.oneyear.autorenewable.svip.low"};

************/


   
