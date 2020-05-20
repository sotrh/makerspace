module.exports = {
    base: '/makerspace/',
    title: 'Makerspace',
    description: 'A resource/code reference for Makerspace Students',
    themeConfig: {
        sidebar: [
            { title: 'Home', path: '/' },
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
                        ]
                    },
                ],
            },
            { title: 'Git', path: '/git/' },
        ]
    }
};