import { environment } from '../environments/environment';
import { WINDOW } from '@ng-toolkit/universal';
// import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild , PLATFORM_ID} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { DOCUMENT, Meta  } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location , isPlatformBrowser} from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    @ViewChild('cookieLaw') private cookieLawEl: any;
    public cookieLawSeen: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(WINDOW) private window: Window, private meta: Meta, private renderer : Renderer, private router: Router, @Inject(DOCUMENT) private document: any, private element : ElementRef, public location: Location,
    // private ccService: NgcCookieConsentService
) {

    // this.meta.addTags([
    //     { name: 'Description', content: 'All your Social Profiles in one calendar' },        
        
    //   ]);
}
    private popupOpenSubscription: Subscription;
    ngOnInit() {
        this.cookieLawSeen = this.cookieLawEl ? this.cookieLawEl.cookieLawSeen : false ;
        // this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
        //     () => {
        //         console.log('good!')
        //       // you can use this.ccService.getConfig() to do stuff...
        //     });
      
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd))
                                        .subscribe((event: NavigationEnd) => {
            if (this.location.path() !== '/sections') {
                if (this.window.outerWidth > 991) {
                    this.window.document.children[0].scrollTop = 0;
                }else{
                    if(this.window.document){
                        this.window.document.activeElement.scrollTop = 0;
                    }
                }
            }
            this.navbar.sidebarClose();

            this.renderer.listenGlobal('window', 'scroll', (event) => {
                const number = this.window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];
                if (this.location.path() !== '/sections') {

                    if (number > 150 || this.window.pageYOffset > 150) {
                        // add logic
                          if (_location !== 'register') {
                                navbar.classList.remove('navbar-transparent');
                          }
                    } else if (_location !== 'addproduct'  && _location !== 'login' && _location !== 'register' && this.location.path() !== '/nucleoicons') {
                        // remove logic
                        navbar.classList.add('navbar-transparent');
                    }
                }
            });
        });

        var ua = this.window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    
    if (!isPlatformBrowser(this.platformId)) {
        let bases = this.document.getElementsByTagName('base');

        if (bases.length > 0) {
            bases[0].setAttribute('href', environment.baseHref);
        }
    }
}
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(titlee === 'signup' || titlee === 'nucleoicons'){
            return false;
        }
        else {
            return true;
        }
    }
}
