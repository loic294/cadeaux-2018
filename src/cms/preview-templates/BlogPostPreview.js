import React from 'react'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <div>
    {entry.getIn(['data', 'title'])}
    {entry.getIn(['data', 'description'])}
    {widgetFor('body')}
  </div>
)

export default BlogPostPreview
