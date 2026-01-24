export function CheckoutPage() {
   return  <>
        <div clasName ="checkout-header">
            <div clasName ="header-content">
                <div clasName ="checkout-header-left-section">
                    <a href="index.html">
                        <img clasName ="logo" src="images/logo.png" />
                        <img clasName ="mobile-logo" src="images/mobile-logo.png" />
                    </a>
                </div>

                <div clasName ="checkout-header-middle-section">
                    Checkout (<a clasName ="return-to-home-link"
                        href="index.html">3 items</a>)
                </div>

                <div clasName ="checkout-header-right-section">
                    <img src="images/icons/checkout-lock-icon.png" />
                </div>
            </div>
        </div>

        <div clasName ="checkout-page">
            <div clasName ="page-title">Review your order</div>

            <div clasName ="checkout-grid">
                <div clasName ="order-summary">
                    <div clasName ="cart-item-container">
                        <div clasName ="delivery-date">
                            Delivery date: Tuesday, June 21
                        </div>

                        <div clasName ="cart-item-details-grid">
                            <img clasName ="product-image"
                                src="images/products/athletic-cotton-socks-6-pairs.jpg" />

                            <div clasName ="cart-item-details">
                                <div clasName ="product-name">
                                    Black and Gray Athletic Cotton Socks - 6 Pairs
                                </div>
                                <div clasName ="product-price">
                                    $10.90
                                </div>
                                <div clasName ="product-quantity">
                                    <span>
                                        Quantity: <span clasName ="quantity-label">2</span>
                                    </span>
                                    <span clasName ="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span clasName ="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <div clasName ="delivery-options">
                                <div clasName ="delivery-options-title">
                                    Choose a delivery option:
                                </div>
                                <div clasName ="delivery-option">
                                    <input type="radio" checked
                                        clasName ="delivery-option-input"
                                        name="delivery-option-1" />
                                    <div>
                                        <div clasName ="delivery-option-date">
                                            Tuesday, June 21
                                        </div>
                                        <div clasName ="delivery-option-price">
                                            FREE Shipping
                                        </div>
                                    </div>
                                </div>
                                <div clasName ="delivery-option">
                                    <input type="radio"
                                        clasName ="delivery-option-input"
                                        name="delivery-option-1" />
                                    <div>
                                        <div clasName ="delivery-option-date">
                                            Wednesday, June 15
                                        </div>
                                        <div clasName ="delivery-option-price">
                                            $4.99 - Shipping
                                        </div>
                                    </div>
                                </div>
                                <div clasName ="delivery-option">
                                    <input type="radio"
                                        clasName ="delivery-option-input"
                                        name="delivery-option-1" />
                                    <div>
                                        <div clasName ="delivery-option-date">
                                            Monday, June 13
                                        </div>
                                        <div clasName ="delivery-option-price">
                                            $9.99 - Shipping
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div clasName ="cart-item-container">
                        <div clasName ="delivery-date">
                            Delivery date: Wednesday, June 15
                        </div>

                        <div clasName ="cart-item-details-grid">
                            <img clasName ="product-image"
                                src="images/products/intermediate-composite-basketball.jpg" />

                            <div clasName ="cart-item-details">
                                <div clasName ="product-name">
                                    Intermediate Size Basketball
                                </div>
                                <div clasName ="product-price">
                                    $20.95
                                </div>
                                <div clasName ="product-quantity">
                                    <span>
                                        Quantity: <span clasName ="quantity-label">1</span>
                                    </span>
                                    <span clasName ="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span clasName ="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <div clasName ="delivery-options">
                                <div clasName ="delivery-options-title">
                                    Choose a delivery option:
                                </div>

                                <div clasName ="delivery-option">
                                    <input type="radio" clasName ="delivery-option-input"
                                        name="delivery-option-2" />
                                    <div>
                                        <div clasName ="delivery-option-date">
                                            Tuesday, June 21
                                        </div>
                                        <div clasName ="delivery-option-price">
                                            FREE Shipping
                                        </div>
                                    </div>
                                </div>
                                <div clasName ="delivery-option">
                                    <input type="radio" checked clasName ="delivery-option-input"
                                        name="delivery-option-2" />
                                    <div>
                                        <div clasName ="delivery-option-date">
                                            Wednesday, June 15
                                        </div>
                                        <div clasName ="delivery-option-price">
                                            $4.99 - Shipping
                                        </div>
                                    </div>
                                </div>
                                <div clasName ="delivery-option">
                                    <input type="radio" clasName ="delivery-option-input"
                                        name="delivery-option-2" />
                                    <div>
                                        <div clasName ="delivery-option-date">
                                            Monday, June 13
                                        </div>
                                        <div clasName ="delivery-option-price">
                                            $9.99 - Shipping
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div clasName ="payment-summary">
                    <div clasName ="payment-summary-title">
                        Payment Summary
                    </div>

                    <div clasName ="payment-summary-row">
                        <div>Items (3):</div>
                        <div clasName ="payment-summary-money">$42.75</div>
                    </div>

                    <div clasName ="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div clasName ="payment-summary-money">$4.99</div>
                    </div>

                    <div clasName ="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div clasName ="payment-summary-money">$47.74</div>
                    </div>

                    <div clasName ="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div clasName ="payment-summary-money">$4.77</div>
                    </div>

                    <div clasName ="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div clasName ="payment-summary-money">$52.51</div>
                    </div>

                    <button clasName ="place-order-button button-primary">
                        Place your order
                    </button>
                </div>
            </div>
        </div>
    </>
};
