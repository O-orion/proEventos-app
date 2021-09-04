import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode(); //habilita modo de produção
}

platformBrowserDynamic().bootstrapModule(AppModule) //start o projeto utilizando o AppModule
  .catch(err => console.error(err));
