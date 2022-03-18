import { SendMessageProps, TelegramBotApiInit } from './interface';
import axios, { AxiosInstance } from 'axios';

export class TelegramBotApi {
    private TELEGRAM_API_URL = 'https://api.telegram.org/bot';
    private commonProps: Record<string, any>;
    private http: AxiosInstance;

    constructor({ chatId, botToken }: TelegramBotApiInit) {
        this.commonProps = {
            chat_id: chatId,
        };
        this.http = axios.create({
            baseURL: `${this.TELEGRAM_API_URL}${botToken}`,
        });
    }

    sendMessage = ({ text }: SendMessageProps) => {
        return this.http.post('/sendMessage', {
            text,
            ...this.commonProps,
        });
    };
}
