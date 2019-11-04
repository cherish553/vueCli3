const meta = { auth: false }
const demo22 = {
    path: '/demo22',
    name: 'demo22',
    meta,
    component: () => import('@/page/demo22'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo22/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo22-')
}
export default demo22