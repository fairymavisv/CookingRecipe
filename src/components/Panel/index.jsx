import React from 'react'
import { styled } from '@/utils'
import styles from './index.module.scss'
import Instruction from '@/components/Instruction'
import Ingredient from '@/components/Ingredient'

const Panel = (props) => {
  const {
    id,
    cookTime,
    servings,
    instructions,
    ingredients,
    className
  } = props

  return (
    <div className={styled(styles, 'panel', className)}>

      <div>
        <span className={styled(styles, 'title')}>Cook Time: </span>
        <span className={styled(styles, 'info')}>{cookTime}</span>
      </div>

      <div>
        <span className={styled(styles, 'title')}>Servings: </span>
        <span className={styled(styles, 'info')}>{servings}</span>
      </div>

      <Instruction instructions={instructions} />
      <Ingredient ingredients={ingredients} />

    </div>
  )
}

export default Panel