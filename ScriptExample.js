var obj = JSON.parse($response.body);

obj =  {
  "status": "ok",
  "is_valid": true,
  "expiration_date": "2023-07-25T12:41:23Z",
  "expiration_date_unix": 1690046947,
  "is_trial": true,
  "processing_count": 0,
  "is_introductory_used": true,
  "product_id": "",
  "promotional_offer_id": "",
  "is_grace_period": false,
  "auto_renew_enabled": true,
  "is_in_billing_retry_period": false,
  "subscription_type": "annual",
  "platform": "ios",
  "device_user_info": {
    "auth_type": "",
    "subscription_valid": true
  }
}
$done({body: JSON.stringify(obj)});
