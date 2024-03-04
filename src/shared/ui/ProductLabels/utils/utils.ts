export const getStylesForCurrentLayout = (element: string, styles: Record<string, string>) => {
  return {
    grid: styles[`${element}_type_grid`],
    list: styles[`${element}_type_list`],
    compact: styles[`${element}_type_compact`]
  }
}
