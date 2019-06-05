import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProductByAsin } from '../actions';
import { Form,
         Button,
         Container,
         Row, 
         Col, 
        Card} from 'react-bootstrap';

const Product = (props) => {
    const { name, rank, category, product_dimensions, url} = props.product;
    console.log(props.product)
    
    if (Object.entries(props.product).length === 0) {
        return null
    }
    return (
        <Card style={{ width: '34rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                { product_dimensions && 
                    ( <Card.Text>Product dimensions: {product_dimensions}</Card.Text>) }
                { url && <Card.Link href={url}>Find on Amazon</Card.Link>} 
            </Card.Body>
        </Card>
    )
        
};

const ProductForm = ({ asinValue, handleChange, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Enter Product ASIN</Form.Label>
            <Form.Control type="text" value={asinValue} onChange={handleChange} />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

class ProductFormConnected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {asinValue: ''};
    }
    
    handleChange = (event) => {
        this.setState({asinValue: event.target.value});
    }

    handleSubmit = (event) => {
        this.props.fetchProductByAsin(this.state.asinValue);
        event.preventDefault();
    }

    render() {
        const { products } = this.props;
        const currentProduct = products[this.state.asinValue] || {};
        console.log(currentProduct);
        return (
            <Container>
                <Row className="justify-content-lg-center">
                    <Col md="6">
                        <ProductForm 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            asinValue={this.state.asinValue}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Product product={currentProduct} />
                </Row>
            </Container>        )
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.productInStore.products,
      error: state.productInStore.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProductByAsin: (asin) => dispatch(fetchProductByAsin(asin)),
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormConnected);