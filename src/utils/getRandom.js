export const getRandom = (e) => {
    const random = Math.floor(Math.random() * (e.length))
    return e[random]
  }
