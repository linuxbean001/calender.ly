import { SignupService } from './../signup.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import { NgForm } from '@angular/forms';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {

    mailchimpListID = environment.mailchimpListID;

    form1: any = {
        FNAME: '',
        EMAIL: '',
        MMERGE2: 'I want to receive emails with Calendarly News, Content Ideas and related advertising',
        PRIVACYPOL: 'I accept the Privacy Policy'
    }

    form2: any = {
        FNAME: '',
        EMAIL: '',
        MMERGE2: 'I want to receive emails with Calendarly News, Content Ideas and related advertising',
        PRIVACYPOL: 'I accept the Privacy Policy'
    }
    params = {
        u: 'c8aaf42a2cdc814b8adc67ecc',
        id: this.mailchimpListID,
        c: 'jQuery190039383082586131857_1527274686658',        
        subscribe: 'Subscribe',
        _: '1527274686662'
    }
    url = 'https://us10.list-manage.com/subscribe/post-json';
    constructor(private dataService: SignupService, private dialog: NgxCoolDialogsService) { }

    ngOnInit() {
        console.log('environment',environment);
    }
    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    submitForm1() {

        if (!this.form1.FNAME.length || !this.form1.EMAIL.length || !this.form1.MMERGE2.length || !this.form1.PRIVACYPOL.length) {
            return this.dialog.alert('Please fill the complete form!', {
                theme: 'material',
                color: 'red',
                okButtonText: 'Ok',
                title: 'Hey!'
            });
        }

        console.log(this.form1, 'value')
        var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if (!this.validateEmail(this.form1.EMAIL)) {
            return this.dialog.alert('Enter a valid email!', {
                theme: 'material',
                color: 'red',
                okButtonText: 'Ok',
                title: 'Hey!'
            });
        }
        this.form1.submitting = true;
        this.dataService.signup(this.form1).subscribe((res: any) => {
            var dataLayer = (<any>window).dataLayer || [];
            this.form1.submitting = false;
            if (res.result == 'error') {
                this.dialog.alert('You have been already subscribed!', {
                    theme: 'material',
                    color: 'red',
                    okButtonText: 'Ok',
                    title: 'Hey!'
                });

                dataLayer.push({
                    'event': 'eventTracking',
                    'category': 'Subscription',
                    'action': 'Top submission from',
                    'label': 'fail'
                });

            }
            else {
                console.log(res, 'res')
                this.dialog.alert('Congrats! You are in the list! Check your inbox soon for more news.', {
                    theme: 'material',
                    okButtonText: 'Ok',
                    title: 'Yay!'
                });
                this.form1 = {}

                dataLayer.push({
                    'event': 'eventTracking',
                    'category': 'Subscription',
                    'action': 'Top submission from',
                   'label': 'success'
                });

            }

        })
    }


    submitForm2() {
        if (!this.form2.FNAME.length || !this.form2.EMAIL.length || !this.form2.MMERGE2.length || !this.form2.PRIVACYPOL.length) {
            return this.dialog.alert('Please fill the complete form!', {
                theme: 'material',
                color: 'red',
                okButtonText: 'Ok',
                title: 'Hey!'
            });
        }
        console.log(this.form2, 'value')
        var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if (!this.validateEmail(this.form2.EMAIL)) {
            return this.dialog.alert('Enter a valid email!', {
                theme: 'material',
                color: 'red',
                okButtonText: 'Ok',
                title: 'Hey!'
            });
        }
        this.form2.submitting = true;
        this.dataService.signup(this.form2).subscribe((res: any) => {
            this.form2.submitting = false;
            var dataLayer = (<any>window).dataLayer || [];
            if (res.result == 'error') {
                this.dialog.alert('You have been already subscribed!', {
                    theme: 'material',
                    color: 'red',
                    okButtonText: 'Ok',
                    title: 'Hey!'
                });

                dataLayer.push({
                    'event': 'eventTracking',
                    'category': 'Subscription',
                    'action': 'Bottom submission from',
                    'label': 'fail'
                });
            }
            else {
                console.log(res, 'res')
                this.dialog.alert('Congrats! You are in the list! Check your inbox soon for more news.', {
                    theme: 'material',
                    okButtonText: 'Ok',
                    title: 'Yay!'
                });
                this.form2 = {}
                dataLayer.push({
                    'event': 'eventTracking',
                    'category': 'Subscription',
                    'action': 'Bottom submission from',
                    'label': 'success'
                });
            }
        })
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        body.classList.remove('navbar-transparent');
    }
}
