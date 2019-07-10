export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d2355abc09ad5a3fdaed254',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-43ow9uoz',
                  apiId: 'b237a9e2-5a73-4ce3-b2bc-bbdde91391ea'
                },
                {
                  buildHookId: '5d2355abb8ccf2edbc6cedec',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yrqnwtbp',
                  apiId: '868e465c-117f-4aa0-ae0c-8ffab83c80b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peeke/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yrqnwtbp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
