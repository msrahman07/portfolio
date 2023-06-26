import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About Me',
      type: 'text',
    }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'aboutSite',
      title: 'About Site',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      // media: 'image',
    },
  },
})
