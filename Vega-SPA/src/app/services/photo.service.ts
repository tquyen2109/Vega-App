import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    constructor(private http: HttpClient) { }
    private baseUrl ='http://localhost:5000';
    upload(vehicleId,file){
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.baseUrl + '/api/vehicles/' + vehicleId + '/photos', formData);
    }
    
}