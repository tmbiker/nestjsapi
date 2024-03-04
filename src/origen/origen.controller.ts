import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OrigenService } from './origen.service';

@Controller('origen')
export class OrigenController {

    constructor(private origenService: OrigenService){}
    
    @Get()
    getOrigen(){
        return this.origenService.getOrigen();
    }

}