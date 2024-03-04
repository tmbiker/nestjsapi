import { Controller, Post, HttpStatus, Param, Res, Body } from '@nestjs/common';
import { WappService } from './wapp.service';
import { Logger } from '@nestjs/common';
import { WappRequestDto } from './dto/wapp.request.dto';

@Controller('wapp')
export class WappController {

    private readonly logger = new Logger("wapp");
    constructor( private wappService: WappService ) {}

    @Post()
    textMessage(@Body() request: WappRequestDto, @Res() response){
        
        this.logger.warn('textMessage');

        this.wappService.textMessage(request).then( res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch((err) => {
            console.log(err.response.data.console.error);
            response.status(HttpStatus.BAD_REQUEST).json(err.response.data.console.error);
        })
    }
}
