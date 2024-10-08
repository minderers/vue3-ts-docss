import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: '段蕾的学习博客',
    description: '记录学习过程',
    themeConfig: {
        siteTitle: '段蕾的学习博客',
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'vue学习', link: '/vue/' },
            { text: 'linux学习', link: '/linux/' },
            { text: 'springboot学习', link: '/springboot/' },
            { text: '关于我', link: '/about/' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/minderers/vue3-ts-docss' }
        ],
        sidebar: {
            '/vue/': [
                {
                    text: 'vue学习',
                    items: [
                        { text: '主要内容', link: '/vue/' },
                        { text: 'Vue3语法', link: '/vue/grammar' }
                    ]
                }
            ],
            '/linux/': [
                {
                    text: 'linux学习',
                    items: [
                        { text: '主要内容', link: '/linux/' },
                        { text: 'Linux基础命令', link: '/linux/command' },
                        { text: 'Linux在Windows使用', link: '/linux/windows-use' },
                    ]
                }
            ],
            '/springboot/': [
                {
                    text: 'springboot学习',
                    items: [
                        { text: '主要内容', link: '/springboot/' },
                        { text: 'SpringBoot基础', link: '/springboot/base' },
                        { text: 'SpringBoot整合', link: '/springboot/integration' },
                    ]
                }
            ],
            'about': [
                {
                    text: '关于我',
                    items: [
                        { text: '个人简介', link: '/about/' },
                        { text: '联系方式', link: '/about/contact' },
                    ]
                }
            ],
        },
        footer: {
            message: '用心学习编程',
            copyright: 'Copyright © 2024-minder'
        }
    }
})