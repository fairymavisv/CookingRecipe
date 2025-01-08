import React from 'react'
import styles from './index.module.scss'
import { classNameStyled, styled } from '@/utils'

import Button from '@/components/Button'
import Header from '@/components/Header'
import Panel from '@/components/Panel'

const RecipeList = (props) => {

  const {
    recipes,
    selectedRecipeId,
    lastSelectedRecipeId,
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    className
  } = props

  const [newAddRecipe, setNewAddRecipe] = React.useState(false) // 触发器
  const ref = React.useRef()

  const addRecipe = () => {
    handleRecipeAdd()
    setNewAddRecipe(true)
  }

  React.useEffect(() => {
    if (newAddRecipe) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
      })
      setNewAddRecipe(false)
    }
  }, [newAddRecipe])

  return (
    <div className={styled(styles, className, 'container')}>
      <div className={styles['title']}>
        Topcoder Recipe Book
      </div>
      <div className={styles['add']}>
        <Button className="btn-big" onClick={addRecipe}>Add Recipe</Button>
      </div>

      <div>
        {
          recipes.map((recipe, index) => (
            <Recipe
              key={index}
              {...recipe}
              selectedRecipeId={selectedRecipeId}
              lastSelectedRecipeId={lastSelectedRecipeId}
              handleRecipeDelete={handleRecipeDelete}
              handleRecipeSelect={handleRecipeSelect}
            />
          ))
        }
      </div>

      <div className={styles['add']}>
        <Button className="btn-big" onClick={addRecipe}>Add Recipe</Button>
      </div>
      <div className={styles['the-end']} ref={ref}></div>
    </div>
  )
}


const Recipe = (props) => {
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    className,
    selectedRecipeId,
    lastSelectedRecipeId,
    handleRecipeDelete,
    handleRecipeSelect
  } = props

  const [chosen, setChosen] = React.useState('')
  const [lastChosen, setLastChosen] = React.useState('')

  React.useEffect(() => {
    selectedRecipeId === id ? setChosen('chosen') : setChosen('')
  }, [selectedRecipeId])

  React.useEffect(() => {
    lastSelectedRecipeId === id ? setLastChosen('last-chosen') : setLastChosen('')
  }, [lastSelectedRecipeId])

  return (
    <div
      className={styled(styles, className, 'recipe', chosen, lastChosen)}
      onClick={() => {
        handleRecipeSelect(id)
      }}
    >
      <Header
        id={id}
        title={name}
        deleteHandler={handleRecipeDelete}
      />
      <Panel
        id={id}
        cookTime={cookTime}
        servings={servings}
        instructions={instructions}
        ingredients={ingredients}
      />
    </div>
  )
}

export default RecipeList