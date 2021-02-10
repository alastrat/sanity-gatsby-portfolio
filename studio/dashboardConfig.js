export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '602406205f22ff683c0215aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bvwc86y1',
                  apiId: '19162cd5-65db-4e47-b059-8de023b468f7'
                },
                {
                  buildHookId: '60240620c77ef4676efec87e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cwny6eea',
                  apiId: 'd77b4eea-1a15-40a5-a92a-733711c1b869'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alastrat/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cwny6eea.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
