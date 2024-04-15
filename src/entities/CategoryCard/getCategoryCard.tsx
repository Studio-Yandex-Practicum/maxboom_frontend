import axios from 'axios'
import { useEffect, useState } from 'react'

import { ApiRoutes } from '@/shared/api/types'

function getCatgoryCard() {
  const [categoryState, setCategoryState] = useState()

  useEffect(() => {
    const apiUrlCategory = `api/${ApiRoutes.CATEGORIES}`
    axios.get(apiUrlCategory).then(resp => {
      const allCards = resp.data
      setCategoryState(allCards)
    })
  }, [setCategoryState])

  useEffect(() => {
    console.log(categoryState)
  })

  return <div className="category-card"></div>
}

export default getCatgoryCard
