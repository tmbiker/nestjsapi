import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { BASEURL } from '../commom/api-resource';
import { firstValueFrom } from 'rxjs';
import { WappRequestDto } from './dto/wapp.request.dto';
import { WappResponseDto } from './dto/wapp.response.dto';

@Injectable()
export class WappService {
    constructor (private httpService: HttpService ) {}

    baseUrl = BASEURL.baseUrlWhatsapp;

    async textMessage(request: WappRequestDto): Promise<AxiosResponse<WappResponseDto>> {
        const { data } = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log( data );
        return data;

    }
    
}
