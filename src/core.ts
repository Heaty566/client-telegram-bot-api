import { SendMessageProps, TelegramBotApiInit, TelegramCommonProps } from './interface';
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

    private getCommonProps = (props: TelegramCommonProps) => {
        return { ...this.commonProps, ...props };
    };

    sendMessage = ({ text, chatId }: SendMessageProps) => {
        return this.http.post('/sendMessage', {
            text,
            ...this.getCommonProps({ chatId }),
        });
    };
}
