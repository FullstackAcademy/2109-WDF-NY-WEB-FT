// Just a quick utility component to map over a list.
export const List = ({forEachOfThese, doThis, unlessEmpty}) => {
  return forEachOfThese.length ? forEachOfThese.map(doThis) : unlessEmpty()
}
