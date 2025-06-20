import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%', 
  minHeight: '450px'
};

const ProductCard = ({ product, onEdit, onDelete }) => {
  const { title, image, description, price } = product;

  return (
    <Card style={cardStyle}>
      <Card.Img 
        variant="top" 
        src={image} 
        style={{ 
          height: '200px', 
          objectFit: 'contain', 
          padding: '1rem',
          backgroundColor: '#f8f9fa'
        }} 
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title 
          className="mb-2" 
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.4em',
            maxHeight: '2.8em',
          }}
        >
          {title}
        </Card.Title>
        <Card.Text 
          className="text-muted flex-grow-1"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.5em',
            maxHeight: '6em'
          }}
        >
          {description}
        </Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Card.Text className="fw-bold mb-0">${price}</Card.Text>
          <div>
            <Button variant="outline-success" size="sm" className="me-2" onClick={() => onEdit(product)}>
              <FaEdit />
            </Button>
            <Button variant="outline-danger" size="sm" onClick={() => onDelete(product)}>
              <FaTrash />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;