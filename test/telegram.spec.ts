import { TelegramBotApi } from '../index';

describe('TelegramBotApi', () => {
    describe('Pass', () => {
        it('pass', async () => {
            const hello = new TelegramBotApi({
                botToken: '1922841476:AAHHkpNqcANlO252GcthXKF-qXhlE2EL2yY',
                chatId: '-712616515',
            });
            try {
                const res = await hello.sendMessage({ text: 'test' });
                console.log(res);
            } catch (error) {
                console.log(error.response);
            }
        });
    });
});
