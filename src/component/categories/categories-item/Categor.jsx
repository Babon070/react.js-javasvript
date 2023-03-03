import React from "react";
import Container from "../../../utilis/Container";

export default function categor() {
  return (
    <section>
      <Container>
        <div className="category_header--wrap">
          <div className="category_header--wrap-block">
            <ul>
              <li>Home</li>
              <li>
                <span></span>
                Saved
              </li>
              <li>Motors</li>
              <li>Electronics</li>
              <li>Collectibles</li>
              <li>Home & Garden</li>
              <li>Fashion</li>
              <li>Toys</li>
              <li>Sporting Goods</li>
              <li>Business & Industrial</li>
              <li>Jewelry & Watches</li>
              <li>eBay Live</li>
              <li>Refurbished</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
