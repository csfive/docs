export default function () {
    return [
        { text: '公开课', link: '/cs/path' },
        {
            text: '资料',
            activeMatch: '/sicp-python/ch1/1-1',
            items: [
                { text: 'SICP Python 翻译', link: '/sicp-python/ch1/1-1' },
                { text: 'C 速查表', link: '/cheatsheets/c' },
                { text: 'Python 速查表', link: '/cheatsheets/py' },
                { text: 'Python 速查表【2】', link: '/cheatsheets/py2' },
                { text: '正则速查表', link: '/cheatsheets/regex' },
            ]
        },
        {
            text: '关于',
            activeMatch: '/about/contributing',
            items: [
                { text: '项目简介', link: '/about/project' },
                { text: '贡献指南', link: '/about/contributing' },
                // { text: '团队成员', link: '/about/team' },
                {
                    items: [
                        { text: 'Markdown', link: '/about/markdown' },
                    ]
                }
            ]
        }
    ]
}