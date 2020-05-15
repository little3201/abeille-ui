export default [
  {
    path: '/',
    component: () => import('@/layouts/home/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Index.vue')
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/blog/Index.vue'),
        meta: { src: require('@/assets/about.jpg') }
      },
      {
        path: 'photos',
        name: 'Photos',
        component: () => import('@/views/photo/Index.vue'),
        meta: { src: require('@/assets/about.jpg') }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/Index.vue'),
        meta: { src: require('@/assets/about.jpg') }
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/contact-us/Index.vue'),
        meta: { src: require('@/assets/contact.jpg') }
      },
      {
        path: '*',
        name: 'FourOhFour',
        component: () => import('@/views/404/Index.vue')
      }
    ]
  },
  {
    path: 'detail/:budinessId',
    name: 'Detail',
    component: () => import('@/views/detail/Index.vue'),
    props: true
  },
  {
    path: 'signin',
    name: 'signin',
    component: () => import('@/views/sign/SignIn.vue')
  },
  {
    path: 'signup',
    name: 'signup',
    component: () => import('@/views/sign/SignUp.vue')
  }
]
