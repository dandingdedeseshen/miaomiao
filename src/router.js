import VueRouter from 'vue-router';
import movie from './pages/movie.vue';
import ciema from './pages/ciema.vue';
import city from './pages/city.vue';
import serch from './pages/serch.vue';
import hotPlay from './pages/hotPlay.vue';
import willPlay from './pages/willPlay.vue'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/movie'
        },
        {
            path: '/movie',
            component: movie,
            children: [{
                    path: '/',
                    redirect: 'city'
                }, {
                    path: 'city',
                    component: city,
                }, {
                    path: 'serch',
                    component: serch,
                }, {
                    path: 'willPlay',
                    component: willPlay
                },
                {
                    path: 'hotPlay',
                    component: hotPlay
                }
            ]
        },
        {
            path: '/ciema',
            component: ciema,
        }
    ]
})

export default router;