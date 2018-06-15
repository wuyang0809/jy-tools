import Vue from 'vue'
import Router from 'vue-router'
import Report from '@/page/report-export.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/report',
            component: Report
        }
    ]
})
