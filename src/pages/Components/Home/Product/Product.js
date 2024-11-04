import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../Product/Product.module.css";

const product = () => {
  const { products = [] } = useContext(ProductContext);

  return (
    <div className={styles.container}>
      <Row className="g-4" style={{ margin: "0" }}>
        {products.map((product, index) => (
          <Col key={index} sm={8} md={6} lg={2} className="d-flex">
            <Card className={`${styles.productCard} shadow-sm`}>
              {product.image && (
                <div className={styles.imageContainer}>
                  <Card.Img
                    src={product.image}
                    alt="Product"
                    className={styles.productImage}
                  />
                </div>
              )}
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                  {product.Title}
                </Card.Title>
                <Card.Text className={styles.cardPrice}>
                  Rs. {product.Price}
                </Card.Text>
              </Card.Body>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "5px 15px ",
                }}
              >
                <Button variant="primary" className={styles.viewButton}>
                  See Product
                </Button>
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faCartArrowDown}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default product;
