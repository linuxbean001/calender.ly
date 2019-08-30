import { AppBrowserModule } from '.././src/app/app.browser.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const addGTM = (GTM) => {
  // add Google Analytics script to <head>
  const gtmHead = document.createElement('script');
  gtmHead.innerHTML = GTM.forHead;
  document.head.appendChild(gtmHead);

  // add Google Analytics script to <body>
  const gtmBody = document.createElement('noscript');
  console.log("GTM BODY",GTM.forBody);
  gtmBody.innerHTML = GTM.forBody;
  document.body.prepend(gtmBody);
}

addGTM(environment.GTM);



platformBrowserDynamic().bootstrapModule(AppBrowserModule);
