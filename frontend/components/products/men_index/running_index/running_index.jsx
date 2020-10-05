import React from 'react';
import RunningIndexItem from './running_index_item';

class RunningIndex extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        const running = products.filter(product => product.gender === "Men's" && product.category === 'Running');


        return (
          <div className="index-body">
            <div className="product-filter">
              <div>
                <div className="mini-header">Mens' / Shoes</div>
                <div className="max-header">Running Shoes</div>
              </div>

              <div className="sort">
                <div className="collection-sort">
                  <div>Filter</div>
                </div>
              </div>
            </div>

            <div className="products">
              {running.map((product) => (
                <RunningIndexItem key={product.id} product={product} />
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

export default RunningIndex;