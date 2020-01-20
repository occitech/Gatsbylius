//You can face an issue with checkout infos checkout this topic https://github.com/Sylius/ShopApiPlugin/issues/241
const axios = require("axios");
const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

export const getCheckoutSummary = async (storeState, checkoutState, checkoutDispatch) => {
  if (storeState.cartKey) {
    await axios
      .get(`${SYLIUS_URL}/shop-api/checkout/${storeState.cartKey}`, {})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error("Error on cart creation ", error);
      });
  }
};