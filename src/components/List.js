import React from 'react'


const List = ({ cadeaux }) => (
  cadeaux
    .map(({ node: cadeau }) => (
      <div
        className={"cadeau" + (!!cadeau.frontmatter.achete ? " achete" : "")}
        key={cadeau.id}
      >
        <div className="innerPadding">
          <h1>{cadeau.frontmatter.title}</h1>
          <small className="achete-indicator">
            <i class="far fa-check-circle"></i> Acheté
          </small>
          <div dangerouslySetInnerHTML={{ __html: cadeau.html }} />
        </div>
        <div className="list">
          {cadeau.frontmatter.sites.map(({ link, name, price, desc}) => {
            return link === "#" ? null : <a key={name} href={link} target="_blank" rel="noopener noreferrer">
              <div className="site">
                <span>{name} {price && <b>{price}$</b>} </span>
                <i className="icon fas fa-long-arrow-alt-right"></i>
              </div>
            </a>
          })}
        </div>
        
      </div>
    ))
)

export default List
