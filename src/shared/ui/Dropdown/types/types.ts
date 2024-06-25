export interface ICategoryFiltersSchema {
  filterProducts: IFilterSchema
  productQuantityFilter: IFilterSchema
}

export type IFilterSchema = {
  name: string
  value: string
}
