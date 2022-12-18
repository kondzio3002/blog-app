export const dateToStr = (publishedDate) => {
  return (
    [
      publishedDate.getMonth() + 1 + '/',
      publishedDate.getDate() + '/',
      publishedDate.getFullYear()
    ]
  )
}