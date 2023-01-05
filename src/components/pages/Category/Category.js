import { Link } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";

const Category = () => {

  const categories = useSelector(getAllCategories);

  return (
    <Row xs={1} className="g-4 my-2">
      {categories.map(category => (
        <Col>
          <Card>
            <Card.Body>
              <Link to={"/category/" + category}>{category}</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Category;