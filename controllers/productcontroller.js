/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Product, sequelize } from "../models/Product.js";
await sequelize.sync();
const productcontroller ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert: async(req,res)=>{
      const {productId,name,description,price,stocks} = req.body;
      const getProduct = await Product.create({
         productId,name,description,price,stocks,
      });
      res.status(201).json({
        "status": "successfully",
        "data": getProduct
      });
    },
    all: async(req,res)=> {
      const data = await Product.findAll();
      res.json({
        "data":data
      })
    },
  getById: async (req, res) => {
      const id = req.params.id;
  
      const data = await Product.findByPk(id);
  
      if (!data) {
          return res.status(404).json({
              status: "error",
              message: "Product not found"
          });
      }
  
      res.json({
          data: data
      });
  }
};
export { productcontroller };