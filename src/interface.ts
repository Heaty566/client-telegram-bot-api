export interface TelegramCommonProps {
    chatId: string;
}

export interface SendMessageProps {
    text: string;
}

export interface TelegramBotApiInit extends TelegramCommonProps {
    botToken: string;
}
