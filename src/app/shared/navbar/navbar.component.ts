import { Component, OnInit, ElementRef, Inject, HostListener } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { WINDOW } from '@ng-toolkit/universal';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    public navIsFixed: boolean = false;

    constructor(public location: Location, private element : ElementRef, @Inject(WINDOW) private window: Window,@Inject(DOCUMENT) private document: Document) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];    
    }

    @HostListener("window:scroll", [])

    onWindowScroll() {
        let rtop = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
       
        if (rtop > 150) {
          this.navIsFixed = true;
        } else if (this.navIsFixed && rtop < 150) {
          this.navIsFixed = false;
        }
      }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
