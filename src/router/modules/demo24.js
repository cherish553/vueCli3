const meta = { auth: false }
const demo24 = {
    path: '/demo24',
    name: 'demo24',
    meta,
    component: () => import('@/page/demo24'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo24/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo24-')
}
export default demo24