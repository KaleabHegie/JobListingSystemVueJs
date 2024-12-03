export default [
    {
      path: '/recruiter/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/recruiterView/Dashboard.vue'),
      meta : {layout : 'recruiter'},
    },
    {
      path: '/recruiter/jobs-posted',
      name: 'JobPosted',
      component: () => import('@/views/recruiterView/JobPosted.vue'),
      meta : {layout : 'recruiter'},
    },
    {
        path: '/recruiter/candidates',
        name: 'Candidates',
        component: () => import('@/views/recruiterView/Candidates.vue'),
        meta : {layout : 'recruiter'},
    },
      {
        path: '/recruiter/applications',
        name: 'Applications',
        component: () => import('@/views/recruiterView/Applications.vue'),
        meta : {layout : 'recruiter'},
      },
      {
        path: '/recruiter/job-sectors',
        name: 'JobSectors',
        component: () => import('@/views/recruiterView/JobSectors.vue'),
        meta : {layout : 'recruiter'},
      },
    
  ];
  