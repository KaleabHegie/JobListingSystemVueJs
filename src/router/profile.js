export default [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/candidateView/profileView/UserAbout.vue'),
    meta: { layout: 'profile', requiresAuth: true  , roles: ['candidate'] },
  },
  {
    path: '/profile/applied-jobs',
    name: 'AppliedJobs',
    component: () => import('@/views/candidateView/profileView/AppliedJobs.vue'),
    meta: { layout: 'profile', requiresAuth: true , roles: ['candidate']  },
  },
  {
    path: '/profile/bookmarked-jobs',
    name: 'BookmarkedJobs',
    component: () => import('@/views/candidateView/profileView/BookmarkedJobs.vue'),
    meta: { layout: 'profile', requiresAuth: true , roles: ['candidate']  },
  },
  {
    path: '/profile/education',
    name: 'Education',
    component: () => import('@/views/candidateView/profileView/PersonalEducation.vue'),
    meta: { layout: 'profile', requiresAuth: true , roles: ['candidate']  },
  },
  {
    path: '/profile/experience',
    name: 'Experience',
    component: () => import('@/views/candidateView/profileView/PersonalExperience.vue'),
    meta: { layout: 'profile', requiresAuth: true , roles: ['candidate']  },
  },
  {
    path: '/profile/project',
    name: 'Project',
    component: () => import('@/views/candidateView/profileView/PersonalProject.vue'),
    meta: { layout: 'profile', requiresAuth: true , roles: ['candidate']  },
  },
  {
    path: '/profile/skill',
    name: 'Skill',
    component: () => import('@/views/candidateView/profileView/PersonalSkill.vue'),
    meta: { layout: 'profile', requiresAuth: true , roles: ['candidate']  },
  },
  // Uncomment if needed
  // {
  //   path: '/profile/language',
  //   name: 'Language',
  //   component: () => import('@/views/candidateView/profileView/PersonalLanguage.vue'),
  //   meta: { layout: 'profile', requiresAuth: true },
  // },
];
