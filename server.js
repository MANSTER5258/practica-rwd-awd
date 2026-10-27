const express = require('express');
const useragent = require('express-useragent');
const app = express();

app.set('view engine', 'ejs');
app.use(useragent.express());

const productos = [
  { id: 1, nombre: "Laptop HP Pavilion", precio: "$12,000", marca: "HP", ram: "8GB", cpu: "Intel", img: "https://mx-media.hptiendaenlinea.com/catalog/product/3/0/308Z3LA-1_T1679638785.png" },
  { id: 2, nombre: "Apple MacBook Air", precio: "$18,000", marca: "Apple", ram: "8GB", cpu: "Apple M", img: "https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png?202610070729" },
  { id: 3, nombre: "Laptop Dell Inspiron", precio: "$15,000", marca: "Dell", ram: "16GB", cpu: "Intel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZdC1kf5q6ATXtVfQ651SO7AUt62TjqpvpZp3_w5ixg&s=10" },
  { id: 4, nombre: "Lenovo ThinkPad", precio: "$14,000", marca: "Lenovo", ram: "16GB", cpu: "Intel", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80" },
  { id: 5, nombre: "Acer Nitro 5 Gaming", precio: "$17,000", marca: "Acer", ram: "16GB", cpu: "AMD", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=700&q=80" },
  { id: 6, nombre: "Asus ROG Strix", precio: "$22,000", marca: "Asus", ram: "32GB", cpu: "AMD", img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=700&q=80" },
  { id: 7, nombre: "HP Envy x360", precio: "$11,000", marca: "HP", ram: "16GB", cpu: "AMD", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80" },
  { id: 8, nombre: "Apple MacBook Pro", precio: "$25,000", marca: "Apple", ram: "32GB", cpu: "Apple M", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80" },
  { id: 9, nombre: "Dell Latitude 14", precio: "$9,500", marca: "Dell", ram: "8GB", cpu: "Intel", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80" },
  { id: 10, nombre: "Lenovo IdeaPad 3", precio: "$8,500", marca: "Lenovo", ram: "8GB", cpu: "AMD", img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=700&q=80" },
  { id: 11, nombre: "Samsung Galaxy Book", precio: "$16,000", marca: "Samsung", ram: "16GB", cpu: "Intel", img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=700&q=80" },
  { id: 12, nombre: "Surface Laptop", precio: "$19,000", marca: "Microsoft", ram: "16GB", cpu: "Intel", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80" }
];

const camposFiltro = ['marca', 'ram', 'cpu'];
const opcionesFiltros = Object.fromEntries(
  camposFiltro.map(campo => [campo, [...new Set(productos.map(producto => producto[campo]))]])
);

function obtenerDatosCatalogo() {
  return { productos, opcionesFiltros };
}

app.get('/responsive', (req, res) => {
  res.render('responsive', obtenerDatosCatalogo());
});

app.get('/tablet', (req, res) => {
  res.render('tablet', obtenerDatosCatalogo());
});

app.get('/adaptive', (req, res) => {
  const ua = req.get('User-Agent') || '';
  
  // Detección manual directa (infalible en emuladores)
  if (/iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobi/i.test(ua))) {
    res.render('tablet', obtenerDatosCatalogo());
  } else if (/Mobi|iPhone|Android/i.test(ua)) {
    res.render('mobile', obtenerDatosCatalogo());
  } else {
    res.render('desktop', obtenerDatosCatalogo());
  }
});

app.listen(3000, () => console.log('Servidor corriendo. Entra a http://localhost:3000/responsive'));