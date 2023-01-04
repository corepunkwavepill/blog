import * as React from "react"
import { Link } from "gatsby"

const PostListing = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <Link to={post.fields.slug} itemProp="url">
          <h4>{title}</h4>
        </Link>
        <p>{post.frontmatter.date}</p>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
      <hr/>
    </article>
  )
}

export default PostListing