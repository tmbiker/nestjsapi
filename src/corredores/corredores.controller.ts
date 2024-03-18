import { Controller, Param, Body, Post, Put, Header, Get, ParseIntPipe, ValidationPipe, UsePipes} from '@nestjs/common';
import { CorredoresService } from './corredores.service';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto';

@Controller('corredores')
export class CorredoresController {
    constructor(private readonly corredoresService: CorredoresService){ 

    }


}