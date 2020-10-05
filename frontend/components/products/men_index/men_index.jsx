import React from 'react';
import MenIndexItem from './men_index_item';

class MenIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const men = products.filter(product => product.gender === "Men's");

        return (
          <div className="index-body">
            <div className="product-filter">
              <div>
                <div className="mini-header">Men's / Shoes</div>
                <div className="max-header">All Shoes</div>
              </div>

              <div className="sort">
                <div className="collection-sort">
                  <div>Filter</div>
                </div>
              </div>
            </div>

            <div className="products">
              {men.map((product) => (
                <MenIndexItem key={product.id} product={product} />
              ))}
            </div>

            <div className="footer-main-review2">
              <div className="kobe">In memory of Kobe Bryant.</div>
              <div className="social-icons">
                <a href="https://github.com/albert-d-chen" target={"_blank"}>
                  <i
                    className="fab fa-github fa-2x footer-icon"
                    style={{ color: "white" }}
                  ></i>
                </a>
                <a href="https://linkedin.com/in/albertdchen" target={"_blank"}>
                  <i
                    className="fab fa-linkedin fa-2x footer-icon"
                    style={{ color: "white" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default MenIndex;