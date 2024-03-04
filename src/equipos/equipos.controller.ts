import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EquiposService } from './equipos.service';


@Controller('equipos')
export class EquiposController {

    constructor(private equiposService: EquiposService){}
    
    @Get()
    getEquipos(){
        return this.equiposService.getEquipos();
    }
}