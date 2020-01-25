import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {XhrFactory} from '@angular/common/http';

@Injectable()
export class ProgressService {
    uploadProgress: Subject<any> = new Subject();
    downloadProgress: Subject<any> = new Subject();
}

//XMLHttpRequest
//Browser

@Injectable()
export class BrowserXhrWithProgress extends XhrFactory {
    constructor(private service: ProgressService) {  super(); }
    build(): XMLHttpRequest {
        var xhr: XMLHttpRequest = this.build();
        xhr.onprogress = (event) => {
            this.service.downloadProgress.next(this.createProgress(event));
        };
        xhr.upload.onprogress = (event) => {
            this.service.uploadProgress.next(this.createProgress(event));
        };
        return xhr;
    }
    private createProgress(event){
        return {
            total: event.total,
                    percentage: Math.round(event.loaded / event.total * 100),
        }
    
    }
}

