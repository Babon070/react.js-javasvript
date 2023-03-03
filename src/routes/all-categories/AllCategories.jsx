import React from "react";
import UseFetchData from "../../hook/useFetchData";
import Container from "../../utilis/Container";
import { Link, useParams } from "react-router-dom";
import "./All-Categories.scss";
import AllProducts from "../all-products/AllProducts";

export default function AllCategories() {
  const [data] = UseFetchData("/categories?offset=0&limit=6");

  function trimDescription(str) {
    return;
  }

  
  return (
    <section>
      <Container>
        <div className="all__categories">
          {data.map((category) => (
            <div key={category.id} className="category__card">
              <Link
                key={category.id}
                className="category__link"
                to={`/allproducts/${category.id}`}
              >
                <div key={category.id}>
                  <img className="category__img" src={category.image} alt="" />
                </div>
                <h3>{category.name}</h3>
              </Link>
            </div>
          ))}
        </div>
       
       <AllProducts/>
      </Container>
    </section>
  );
}
