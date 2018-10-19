export const countCartItems = (array) => {
  const result = array.map(item => {
    item['quantity'] = 1
    return item
  }).reduce((prev, curr) => {
    const index = prev.findIndex(obj => obj.id === curr.id)
    if (index !== -1) {
      prev[index].quantity += 1
      return prev
    } else {
      prev.push(curr)
      return prev
    }
  }, [])

  return result;
}