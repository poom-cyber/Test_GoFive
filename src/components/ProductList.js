import React from 'react'
import Product from '../assets/products';

export const ProductList = (props) => {

  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>Product List (0 items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            Product.map(
              ({ id, name, price, department }, i) => (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{department}</td>
                  <td>{price}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  )
}
