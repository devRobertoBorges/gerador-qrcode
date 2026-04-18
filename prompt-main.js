import chalk from 'chalk';

const mainPrompt = [
    {
        name: "select",
        description: (chalk.greenBright("Escolha a opção: (1- QRCODE) // (2- PASSWORD)")),
        pattern: /^[1-2]+$/,
        message: (chalk.red("Escolha somente [1] ou [2]")),
        require: true,
    }
];

export default mainPrompt;