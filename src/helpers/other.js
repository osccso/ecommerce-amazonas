export const getCategories = (products) => {
  let categories = [];
  products.forEach(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return categories;
}

export const firstToUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const isInCart = (id,cart) => {
  let isInCart = false;
  cart?.forEach(item => {
    if (item.id === id) {
      isInCart = true;
    }
  });
  return isInCart;
}

export const totalCart = (cart) => {
  let total = 0;
  cart?.forEach(item => {
    total += Number(item.price) * Number(item.quantity) + Number(item.shipping ? item.shipping : 0);
    console.log(total,"this is the total")
    console.log(item,"this is the item")
  });
  return total;
}