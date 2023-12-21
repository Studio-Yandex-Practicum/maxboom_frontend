type Breakpoints<T = number> = {
  middle?: T
}

export const breakpoints: Breakpoints = {
  middle: 767
}

export const media = Object.entries(breakpoints).reduce<Breakpoints<string>>((acc, [key, value]) => {
  acc[key as keyof Breakpoints] = `(max-width: ${value}px)`
  return acc
}, {})
