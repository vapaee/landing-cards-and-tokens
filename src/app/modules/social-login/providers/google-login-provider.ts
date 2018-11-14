import { BaseLoginProvider } from '../entities/base-login-provider';
import { SocialUser, LoginProviderClass } from '../entities/user';

declare let gapi: any;

export class GoogleLoginProvider extends BaseLoginProvider {

    public static readonly PROVIDER_ID = 'google';
    public loginProviderObj: LoginProviderClass = new LoginProviderClass();
    private auth2: any;

    public signedPromise: Promise<any>;

    constructor(private clientId: string) {
        super();
        this.loginProviderObj.id = clientId;
        this.loginProviderObj.name = 'google';
        this.loginProviderObj.url = 'https://apis.google.com/js/platform.js';
    }

    initialize(): Promise<SocialUser> {
        return new Promise((resolve) => {
            this.signedPromise = new Promise((_res, _rej) => {
                this.loadScript(this.loginProviderObj, () => {
                    gapi.load('auth2', () => {
                        this.auth2 = gapi.auth2.init({
                            client_id: this.clientId,
                            scope: 'email'
                        });

                        this.auth2.then(() => {
                            if (this.auth2.isSignedIn.get()) {
                                resolve(this.drawUser());
                                _res(this.drawUser());
                            } else {
                                _rej(null);
                            }
                        });    
                    });
                });
            });
        });
    }

    drawUser(): SocialUser {
        let user: SocialUser = new SocialUser();
        let profile = this.auth2.currentUser.get().getBasicProfile();
        let authResponseObj = this.auth2.currentUser.get().getAuthResponse(true);
        user.id = profile.getId();
        user.name = profile.getName();
        user.email = profile.getEmail();
        user.image = profile.getImageUrl();
        user.token = authResponseObj.access_token;
        user.idToken = authResponseObj.id_token;
        return user;
    }

    isSignedIn(): Promise<SocialUser> {
        return this.signedPromise;
        /*
        console.log("GoogleProvider.isSignedIn()");
        return this.signedPromise.then(() => {
            console.log("GoogleProvider.isSignedIn()  this.signedPromise OK"); 
            return this.auth2.then(() => {
                console.log("GoogleProvider.isSignedIn()  this.auth2.then OK"); 
                if (this.auth2.isSignedIn.get()) {
                    return this.drawUser();
                } else {
                    console.log("this.auth2.isSignedIn.get() NOOOOOOOP :(");
                }
            });
        });
        */
    }

    signIn(): Promise<SocialUser> {
        return new Promise((resolve, reject) => {
            let promise = this.auth2.signIn();
            promise.then(() => {
                resolve(this.drawUser());
            });
        });
    }

    signOut(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.auth2.signOut().then((err: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

}