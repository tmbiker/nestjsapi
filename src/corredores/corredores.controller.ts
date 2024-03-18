import { Controller, Param, Body, Post, Put, Header, Get, ParseIntPipe, ValidationPipe, UsePipes} from '@nestjs/common';
import { CorredoresService } from './corredores.service';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto';

const express = require('express')
const router = express.Router()

router.post('/nuevo', (req, res) => {
    res.send('About Corredores')
})
