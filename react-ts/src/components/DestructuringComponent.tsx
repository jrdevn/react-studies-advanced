import React from 'react'

interface Props {
    title: string
    content: string
    commentQuantity: number
    tags: string[]
    // enum
    category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  PY = "Python" 
}
 
const DestructuringComponent = ({title, content, commentQuantity, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentarios: {commentQuantity} </p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default DestructuringComponent