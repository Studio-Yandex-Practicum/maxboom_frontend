export const TEXT_STORIES: string = 'Истории'
export const TEXT_BLOG: string = 'Блог'
export const TEXT_NEWS: string = 'Новости'
export const TEXT_POPULAR_CATEGORIES: string = 'Популярные категории'
export const TEXT_CUSTOMERS_ABOUT_US: string = 'Наши клиенты о нас'
export const TEXT_OUR_BRANDS: string = 'Наши бренды'
export const TEXT_ALL_BRANDS: string = 'Все бренды'

export const SEARCH_CATEGORY: string = 'category'
export const SEARCH_PRODUCT: string = 'product'
export const LEFT_POSITION: string = 'left'
export const RIGHT_POSITION: string = 'right'

export const TEXT_PROMO = '% Акция'

export const LINK_SHOW_ALL = 'Показать все'
export const LINK_NEWS_ALL = 'Все новости'
export const LINK_REVIEWS_ALL = 'Все отзывы'

export const VIEWED_PRODUCTS_COUNT_ON_MAIN = 4

//mock for BlogMainItem component
export const fromSS = 378

//link messenger for me messengerArray component
export const WHATSAPP_LINK = '//wa.me/79778480228'
export const VIBER_LINK = 'viber://chat?number=79778480228'
export const TELEGRAM_LINK = '//t.me/79778480228'
export const EMAIL_LINK = 'mailto:mail@mail.ru'
export const MAX_PRODUCTS_NUMBER: number = 99

//for BrandBlock component
export const BRANDS_FOR_MAIN_NUMBER: number = 6

// Actions
export const ACTION_GET_SHOP_NEWS = 'get-shop-news'
export const ACTION_GET_BLOG_POSTS = 'get-blog-posts'

export const ACTION_GET_PRODUCTS_OF_CATEGORY = 'get-products-of-category'
export const ACTION_GET_CATEGORY_BRANCHES = 'get-category-branches'
export const ACTION_GET_CATEGORIES = 'get-categories'

// Reducers
export const REDUCER_SHOP_NEWS = 'shopNews'
export const REDUCER_BLOG_POSTS = 'shopBlogPosts'

export const REDUCER_CATEGORY_BRANCHES = 'getCategoryBranches'
export const REDUCER_CATEGORIES = 'getCategories'
export const REDUCER_CATEGORIES_PRODUCTS = 'shopCategoriesProducts'

//Product page
export const VIEWED_PRODUCTS_LIMIT = 10

//Favorite page
export const FAVORITE_PRODUCTS_LIMIT = 10

//Feedback form
export const NAME_LENGTH_MIN_LIMIT = 2
export const NAME_LENGTH_MAX_LIMIT = 30
export const FEEDBACK_LENGTH_MIN_LIMIT = 25
export const FEEDBACK_LENGTH_MAX_LIMIT = 1000

//Filters for ProductsPage
export enum SORT_NAMES {
  NAMES_A_YA = 'Название А-Я',
  NAMES_YA_A = 'Название Я-А',
  PRICE_TO_MORE = 'Сначала дешевые',
  PRICE_TO_LESS = 'Сначала дорогие',
  MODEL_A_YA = 'Модель А-Я',
  MODEL_YA_A = 'Модель Я-А'
}

export enum SORT_VALUES {
  NAMES_A_YA = 'name',
  NAMES_YA_A = '-name',
  PRICE_TO_MORE = 'price',
  PRICE_TO_LESS = '-price',
  /* eslint-disable */
  MODEL_A_YA = 'name',
  MODEL_YA_A = '-name'
}

export const SORT_OPTION = [
  { name: SORT_NAMES.NAMES_A_YA, value: SORT_VALUES.NAMES_A_YA },
  { name: SORT_NAMES.NAMES_YA_A, value: SORT_VALUES.NAMES_YA_A },
  { name: SORT_NAMES.PRICE_TO_MORE, value: SORT_VALUES.PRICE_TO_MORE },
  { name: SORT_NAMES.PRICE_TO_LESS, value: SORT_VALUES.PRICE_TO_LESS },
  { name: SORT_NAMES.MODEL_A_YA, value: SORT_VALUES.MODEL_A_YA },
  { name: SORT_NAMES.MODEL_YA_A, value: SORT_VALUES.MODEL_YA_A }
]

export const ITEMS_PER_PAGE_OPTION = [
  { name: '15', value: '15' },
  { name: '25', value: '25' },
  { name: '50', value: '50' },
  { name: '75', value: '75' },
  { name: '100', value: '100' }
]

//For Skeleton
export const NUMBER_OF_CATEGORY_LINES = 15
export const NUMBER_OF_PRODUCTS = 15
