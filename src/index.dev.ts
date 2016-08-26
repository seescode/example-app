import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppDevModule } from './module.dev';

platformBrowserDynamic().bootstrapModule(AppDevModule);