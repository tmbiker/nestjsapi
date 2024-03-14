import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../inscriptos/dto/createinscriptos.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async userLogin(@Body() userLoginDto: UserLoginDto, @Res() res: Response){

        const{token, biker} = await this.authService.login(userLoginDto);

        res.cookie('IsAuthenticated', true, { maxAge: 2000*60*60*1000 })
        res.cookie('Authentication', token, {
            httpOnly: true,
            maxAge: 2000*60*60*1000
        });

        return res.send({success: true, biker});
    }

}
