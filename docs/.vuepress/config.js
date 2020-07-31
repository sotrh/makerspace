module.exports = {
    base: '/makerspace/',
    title: 'Makerspace',
    description: 'A resource/code reference for Makerspace Students',
    themeConfig: {
        sidebar: [
            { title: 'Home', path: '/' },
            { 
                title: 'Programming 101', 
                path: '/programming-101/',
                children: [
                    '/programming-101/',
                    '/programming-101/vocab.md',
                    '/programming-101/vuejs/',
                    '/programming-101/web-recipes/',
                    { title: 'Git', path: '/programming-101/git/' },
                ]
            },
            {
                title: 'Game Dev Resources',
                path: '/game-dev-resources/',
                children: [
                    '/game-dev-resources/',
                ]
            },
            {
                title: 'Kotlin',
                path: '/kotlin/',
                children: [
                    '/kotlin/',
                    '/kotlin/types/',
                    '/kotlin/operators/',
                    '/kotlin/functions/',
                    '/kotlin/lambdas/',
                    '/kotlin/classes/',
                ],
            },
            { 
                title: 'Android', 
                path: '/android/', 
                children: [
                    {
                        title: 'Weather App',
                        path: '/android/weather/',
                        children: [
                            '/android/weather/',
                            '/android/weather/start/',
                            '/android/weather/mvvm/',
                            '/android/weather/location/',
                            '/android/weather/git/',
                            '/android/weather/forecast/',
                            '/android/weather/more-views/',
                        ]
                    },
                ],
            },
        ]
    }
};