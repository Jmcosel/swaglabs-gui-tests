import GeneralPage from './general.page.js';

class ItemPage extends GeneralPage {
  constructor() {
    super('Inventory Item Detail', 'div.inventory_item_container');
  }

  get backButton() {
    return $('button[data-test="back-to-products"]');
  }

  get itemName() {
    return $('div.inventory_details_name');
  }

  get itemDescription() {
    return $('div.inventory_details_desc');
  }

  get itemPrice() {
    return $('div.inventory_details_price');
  }

  get itemImage() {
    return $('img.inventory_details_img');
  }

  get addToCartButton() {
    return $('button[data-test="add-to-cart"]');
  }

  get removeFromCartButton() {
    return $('button[data-test="remove"]');
  }

  /**
   * Adds the specified item name to the shopping cart.
   * @param itemId The item's id
   */
  async clickAddToCart() {
    await this.addToCartButton.waitForAndClick();
  }

  /**
   * Removes the specified item name from the shopping cart.
   * @param itemId The item's id
   */
  async clickRemoveFromCart() {
    await this.removeFromCartButton.waitForAndClick();
  }

  async open(itemId: string) {
    await super.open(`inventory-item.html?id=${itemId}`);
    await this.waitForElements();
  }

  async waitForElements(visibility?: boolean) {
    const elements = [this.itemName, this.itemDescription, this.itemPrice, this.itemImage];
    await browser.waitForElements(elements, visibility);
  }
}

export default new ItemPage();
