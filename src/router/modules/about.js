const meta = { auth: false }
const about = {
    path: '/about',
    name: 'about',
    meta,
    component: () => import('@/views/About.vue'),
    children: (pre => [
        { path: 'demo', name: `${pre}demo`, component: () => import('@/page/demo'), meta: { ...meta, title: 'sb' } },
    ])('about-')
}
export default about