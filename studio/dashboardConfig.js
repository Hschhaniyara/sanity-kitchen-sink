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
                  buildHookId: '60d245c5d17c661b8139b0ff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7hb2mevh',
                  apiId: '9e6e3196-a191-435c-a8b6-b43f692f81bc'
                },
                {
                  buildHookId: '60d245c5e83a63191e759d6a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o8ft7uud',
                  apiId: '7a0dc1d7-9a44-40b8-9bd2-d6aba9179d9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Hschhaniyara/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o8ft7uud.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
