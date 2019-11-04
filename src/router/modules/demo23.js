const meta = { auth: false }
const demo23 = {
    path: '/demo23',
    name: 'demo23',
    meta,
    component: () => import('@/page/demo23'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo23/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo23-')
}
export default demo23