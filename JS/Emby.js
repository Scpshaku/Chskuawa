if ($request.url.indexOf('mb3admin.com/admin/service/registration/validateDevice') != -1) {
      if($response.status!=200){
          $notification.post("EmbyPremiere撌脫�瘣鳴��蠘陝�㗇𥋘�格��臬蔣銝�", "", "");
          $done({status: 200, headers: $response.headers, body: '{"cacheExpirationDays":999,"resultCode":"GOOD","message":"Device Valid"}' })
      }else{
          $done({})
      }
  }else{
      $done({})
  }
