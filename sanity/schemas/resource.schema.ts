const schema = {
  name: 'resource',
  title: 'title',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      option: {source: 'title'}
    },
    {
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'views',
      title: 'title',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'poster',
      title: 'poster',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      option: {
        hotspot:true
      }
    },
    {
      name: 'category',
      title: 'category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      option: {
        list: ['frontend', 'backend', 'next 13',
         'fullstack', 'other']
      }
    }
  ]
}

export default schema;