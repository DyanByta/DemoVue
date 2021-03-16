/*
Created by Dyan at 2020.09.30 15:24
 */
//基础显示
let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
// function func() {
//     var a=2
//     console.log(a)
// }
//基础显示2
let app_2 = new Vue({
    el: '#app_2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
})
//点击事件，v-if
let app_3 = new Vue({
    el: '#app_3',
    data: {
        seen: true,
        message_on: '现在你看到我了',
        message_off: '现在我藏起来了',
        counter: 0
    },
    methods: {
        changeView: function () {
            this.seen = !this.seen
            if(this.seen){
                this.message_on = '现在你' + this.againCounter(this.counter++) + '看到我了'
            }
            else{
                this.message_off = '现在我' + this.againCounter(this.counter) + '藏起来了'
            }
        },
        againCounter: function () {
            // let againText = ''
            // for(let count of [...Array(this.counter).keys()]){
            //     againText += '又'}
            // return againText
            return '又'.repeat(this.counter)
        }
    },
    created () {

    },
    mounted () {

    },
})
//动态元素增减
let app_4 = new Vue({
    el: '#app_4',
    data: {
        todos:[
            { text: '学习JavaScript高级程序设计v3'},
            { text: '学习Vue基础'},
            { text: '看论文！！！'}
        ],
        blockStyle: {
            fontSize: '32px'
        },
        iconStyle: {
            fontSize: '32px',
            cursor: 'pointer',
            width: '32px',
            margin: 0,
            float: 'left'
        },
        addStyle: {
            color: 'rgba(60, 60, 240, 0.8)'
        },
        deleteStyle: {
            color: 'rgba(240, 60, 60, 0.8)'
        },
        inputStyle: {
            fontSize: '18px'
        }
    },
    methods: {
        addItems: function () {
            this.todos.push({ text: ''})
        },
        deleteItems: function () {
            let length = this.todos.length - 1
            if(length < 1){
                alert('做个人吧，至少留一个叭→_→')
            }
            else{
                this.todos.splice(length, 1)
            }
        }
    },
    computed: {
        listLength: function () {
            return this.todos.length - 1
        }
    }
})
//反转
let app_5 = new Vue({
    el: '#app_5',
    data: {
        message: 'Hey guys!',
        counter: 0
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
            this.counter++
        }
    }
})
//选择事件及其显示效果
let app_6 = new Vue({
    el: '#app_6',
    data: {
        event_options: [
            { text: 'A letter', value: 'A letter'},
            { text: 'An email', value: 'An email'},
            { text: 'A novel', value: 'A novel'}
        ],
        event_people: [
            { name: '张三'},
            { name: '李四'},
            { name: '王五'}
        ],
        event_months: [
            { month: 'Oct'},
            { month: 'Nov'},
            { month: 'Dec'}
        ],
        selectedEvent: '[事件]',
        checkedPeople: [],
        checkedMonths: '[月份]',
        message: 'Hello'
    },
    computed: {
        peopleText: function () {
            let nameText = ''
            let nameList = this.checkedPeople
            let nameLength = nameList.length
            if(!nameLength){
                nameText = '[名字]'
            }
            else if(nameLength > 1){
                nameText = nameList.slice(0, -1).join('，') + '和' + nameList[nameLength - 1]
            }
            else{
                nameText = nameList[0]
            }
            return nameText
        }
    }
})
//组件化应用构建
Vue.component('todo-item', {
    // props: ['todo'],
    props: {
        todo: Object
    },
    template: '<li>{{ todo.text }}</li>'
})
let app_7 = new Vue({
    el: '#app_7',
    data:{
        groceryList: [
            { id: 0, text: '蔬菜'},
            { id: 1, text: '水果'},
            { id: 2, text: '菌菇'}
        ],
        demoStyle: {
            fontSize: '18px',
            color: 'rgba(0, 0, 0, 1)'
        },
        // tipText: '暂无色彩信息'
    },
    methods: {
        randomColor: function () {
            this.r = Math.floor(Math.random() * 255)
            this.g = Math.floor(Math.random() * 255)
            this.b = Math.floor(Math.random() * 255)
            let variety = 1 - Math.pow(Math.random(), 8)
            return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + variety + ')'
        },
        setRandom: function () {
            this.demoStyle.color = this.randomColor()
        }
    },
    computed: {
        colorGet: function () {
            return '色彩信息：' + this.demoStyle.color
        }
    },
    created: function () {
        this.setRandom()
    }
})
//监听式备注文本，结合新变量tipText使用
// app_7.$watch(
//     function () {
//         return app_7.$data.demoStyle.color
//     },
//     function () {
//         app_7.$data.tipText = '色彩信息：' + app_7.$data.demoStyle.color
//     }
// )
//运行时添加双绑prop
let app_8 = new Vue({
    el: '#app_8',
    data: {
        message: 'app-8',
        addProps: {
        },
    },
    methods: {
        onBindClick: function () {
            this.$set(this.addProps, 'addMessage', 'Success')
            this.$set(this.addProps, 'addMessage2', '!')
            this.addProps = Object.assign({}, this.addProps, {'add_1': 'Hey', 'add_2': 'duel!'})
            this.newMessageText()
        },
        newDataChange: function () {
            this.addProps.addMessage2 = 'again!'
            this.addProps.add_1 = 'It'
            this.addProps.add_2 = 'worked!'
            this.newMessageText()
        },
        newMessageText: function () {
            for(let propName in this.addProps){
                if(this.addProps.hasOwnProperty(propName)){
                    this.message += ' ' + this.addProps[propName]
                }
            }
        }
    }

})
//测试功能
let app_99 = new Vue({
    el: '#app_99',
    data: {
        message: '这里是测试区',
        testProp: '',
        testArray: [],
        testAddProps: {},
        timeRecorder: 0,
    },
    created () {
        console.log('创建于：' + this.timeNow())
    },
    mounted () {
        console.log('挂载于：' + this.timeNow())
        this.setHeight()
    },
    methods: {
        testFunc () {
            this.message = '点击测试'
            console.log('点击于：' + this.timeNow())
        },
        timeNow () {
            let timeNow = new Date()
            return timeNow.toLocaleString() + ':' + timeNow.getMilliseconds()
        },
        setHeight () {
            console.log(document.getElementById('test_99').textContent)
            // console.log(window.getComputedStyle(document.getElementById('app_99'), null))
        }
    },
    computed: {
        calculatedFunc () {
            console.log('测试开始')
        }
    },
})

