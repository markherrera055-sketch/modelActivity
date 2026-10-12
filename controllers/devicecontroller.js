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
import { Devicemodel, sequelize } from "../models/Devicemodel.js";
await sequelize.sync();
const devicecontroller ={
  index: async (req, res) => {
    const data = await Devicemodel.findAll();
    res.render("home", {data});
  },
  all: async (req,res) => {
    const data = await Devicemodel.findAll();
    res.json(data);
  },
  insert: async (req,res) => {
    const { name, description, category, price, type} = req.body;
      await Devicemodel.create({
      name, description, category, price, type
    });
    res.redirect("/");
  },
  update1: async (req, res) => {
    const {id} = req.params;
    const { name, description, category, price, type} = req.body;
    const rep = await Devicemodel.update({
      name, description, category, price, type
    }, {where: {id}});
    res.json(rep);
  },
  one: async (req, res) => {
    const id = req.params.id;
    const data = await Devicemodel.findByPk(id);

      res.json(data);
  },
  delete1: async (req, res) => {
    const {id} = req.params;
    await Devicemodel.destroy({where:{id}});
    res.json({"message": "deleted"});
  },
  add: (req, res) =>{
    res.render("add");
  },
  edit: async (req, res) =>{
    const {id} = req.params;
    const data = await Devicemodel.findByPk(id);
    res.render("edit", {data});
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price, type } = req.body;
    await Devicemodel.update(
      { name, description, category, price, type }, { where: { id } });
    res.redirect("/");
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await Devicemodel.destroy({ where: { id }});
    res.redirect("/");
  }
};
export { devicecontroller };