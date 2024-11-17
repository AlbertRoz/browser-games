import { renderGamesCard, renderChat, renderInfo, renderSignIn, renderSignUp, renderRandomGame } from "./menu/content-menu.js"

export const config = {
    sidebar: {
        games: {
            href: '/games',
            name: 'Games',
            render: renderGamesCard,
        },
        chat: {
            href: '/chat',
            name: 'chat',
            render: renderChat,
        },
        randomeGame: {
            href: '/randomeGame',
            name: 'Randome game',
            render: renderRandomGame
        },
        info: {
            href: '/info',
            name: 'info',
            render: renderInfo,
        },
    },
    header: {
        // logo:{
        //     href: '/main',
        //     name: 'Games',
        //     render: renderLogo,
        // },
        signin: {
            href: '/signIn',
            name: 'Sign in',
            render: renderSignIn,
        },
        signup: {
            href: '/signUp',
            name: 'Sign up',
            render: renderSignUp,
        }
    },
    gameCard: {
        tictactoe: {
            image :'menu/image/tictactoe.png',
            href: '/tictactoe',
            name: 'TicTacToe'
        },
        snake: {
            image : 'menu/image/snake.png',
            href: '/snake',
            name: 'Snake'
        },
        rockpaperscissors: {
            image : 'menu/image/istockphoto-1366199097-612x612.jpg',
            href: '/rock-paper-scissors',
            name: 'Rock-paper-scissors'
        },
        checkers: {
            image : 'menu/image/checkers.png',
            href: '/checkers',
            name: 'Checkers'
        },
        chest: {
            image : 'menu/image/chest.png',
            href: '/chest',
            name: 'Chest'
        },
    }
}