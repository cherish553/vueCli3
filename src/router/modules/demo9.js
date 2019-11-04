const meta = { auth: false }
const demo9 = {
    path: '/demo9',
    name: 'demo9',
    meta,
    component: () => import('@/page/demo9')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo9/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo9-')
}
export default demo9