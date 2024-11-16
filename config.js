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
            href: '/tictactoe',
            name: 'TicTacToe'
        },
        snake: {
            href: '/snake',
            name: 'Snake'
        },
        rockpaperscissors: {
            href: '/rock-paper-scissors',
            name: 'Rock-paper-scissors'
        },
        checkers: {
            href: '/checkers',
            name: 'Checkers'
        },
        chest: {
            href: '/chest',
            name: 'Chest'
        },
    }
}