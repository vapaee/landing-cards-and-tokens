import { Injectable } from '@angular/core';
import { Locals, LocalString } from './datatypes.service';
import { HttpClient } from '@angular/common/http';

declare var navigator:any;

@Injectable()
export class LocalStringsService {
    public waitReady:Promise<any>;
    public string: LocalString;
    locals:Locals;
    localKey:string;

    constructor(private http: HttpClient) {
        this.localKey = "en_US";
        this.string = {};
        this.locals = {};
        this.waitReady = this.fetchLocals(this.localKey);

        var userLang = navigator.language || navigator.userLanguage;
        switch (userLang.substr(0,2)) {
            case "es":
                this.localKey = "es_ES";
            default:
                // broadcast event unknown lang

        }
        if (userLang.substr(0,2) == "es") {

        }
    }

    fetchLocals(localKey:string) {
        return this.http.get<any>("assets/locals/" + localKey + ".json").toPromise().then((response) => {
            this.string = response;
            this.locals[this.localKey] = this.string;
        });
    }
}