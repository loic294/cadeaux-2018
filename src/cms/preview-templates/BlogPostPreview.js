import React from 'react'
import { BlogPostTemplate } from '../../templates/cadeaux'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <div>
    {entry.getIn(['data', 'title'])}
    {entry.getIn(['data', 'description'])}
    {widgetFor('body')}
  </div>
)

export default BlogPostPreview
