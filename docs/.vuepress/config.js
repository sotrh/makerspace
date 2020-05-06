module.exports = {
    base: '/makerspace/',
    title: 'Makerspace',
    description: 'A resource/code reference for Makerspace Students',
    themeConfig: {
        sidebar: [
            { title: 'Home', path: '/' },
            { 
                title: 'Android', 
                path: '/android/', 
                children: [
                    '/android/weather/'
                ],
            },
            { title: 'Git', path: '/git/' },
        ]
    }
};