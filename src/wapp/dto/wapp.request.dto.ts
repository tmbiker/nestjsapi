export interface WappRequestDto {
    messaging_product: string;
    to:                string;
    type:              string;
    template:          Template;
}

export interface Template {
    name:     string;
    language: Language;
}

export interface Component {
    type:     string;
    parameters: Parameter[];
}

export interface Parameter {
    type: string;
    image?: Image;
    document?: Document;
    video?: string;
    datetime?: DateTime;
    currency?: Currency;
}

export interface DateTime{
    fallback_value: string;
    day_of_month: number;
    year: number;
    month: number;
    hour: number;
    minute: number;
}

export interface Image{
    link: string;
}

export interface Video{
    link: string;
}

export interface Document{
    link: string;
    filename: string;
}

export interface Currency{
    fallback_value: string;
    code: string;
    amount_1000: number;
}

export interface Language {
    code: string;
}