import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  View,
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {


  // Framework7 Parameters
  const f7params = {
      name: 'meixi', // App name
      theme: 'auto', // Automatic theme detection



      // App store
      store: store,
      // App routes
      routes: routes,
  };

  f7ready(() => {


    // Call F7 APIs here
  });

  let preUrl = location.href.replace(location.origin, "");
  console.log(location.origin.indexOf("localhost"))
  if(location.origin.indexOf("localhost")>-1){
    console.log("preUrl1:",preUrl);
    preUrl = preUrl.replace("/mx","")
  }
  if(location.origin.indexOf("zhaishengzhang.github.io")>-1){
    console.log("preUrl1:",preUrl);
    preUrl = preUrl.replace("/mxpre","")
  }

  console.log("preUrl:",preUrl);
  return (
    <App { ...f7params } >

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url={preUrl} />

    </App>
  );
}
export default MyApp;