var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();
var multer = require('multer');
const bcrypt = require('bcrypt');
require('../models/connection').connection();
const {tampilProduk, tambahProduk} = require('../controllers/produk');
const {tampilPelanggan} = require('../controllers/pelanggan');
const {tampilPengguna} = require('../controllers/pengguna');
const {tampilNota} = require('../controllers/nota');
const {tampiljumPelanggan} = require('../controllers/index');
const {tampiljumTransaksi} = require('../controllers/index');
const {tampiljumProduk} = require('../controllers/index');

const {tampiljanuari} = require('../controllers/index');
const {tampilfebruari} = require('../controllers/index');
const {tampilmaret} = require('../controllers/index');
const {tampilapril} = require('../controllers/index');
const {tampilmei} = require('../controllers/index');
const {tampiljuni} = require('../controllers/index');
const {tampiljuli} = require('../controllers/index');
const {tampilagustus} = require('../controllers/index');
const {tampilseptember} = require('../controllers/index');
const {tampiloktober} = require('../controllers/index');
const {tampilnovember} = require('../controllers/index');
const {tampildesember} = require('../controllers/index');

// untuk akses halaman route
router.get('/', function(request, response, next) {

  if(request.session.loggedin) {
    if (request.session.level == '1'){
        (tampilDataProdPel = async () => {
          try {
            let datajumPelanggan = await tampiljumPelanggan(connection, request, response)
            let datajumTransaksi = await tampiljumTransaksi(connection, request, response)
            let datajumProduk = await tampiljumProduk(connection, request, response)
            let datajanuari = await tampiljanuari(connection, request, response)
            let datafebruari = await tampilfebruari(connection, request, response)
            let datamaret = await tampilmaret(connection, request, response)
            let dataapril = await tampilapril(connection, request, response)
            let datamei = await tampilmei(connection, request, response)
            let datajuni = await tampiljuni(connection, request, response)
            let datajuli = await tampiljuli(connection, request, response)
            let dataagustus = await tampilagustus(connection, request, response)
            let dataseptember = await tampilseptember(connection, request, response)
            let dataoktober = await tampiloktober(connection, request, response)
            let datanovember = await tampilnovember(connection, request, response)
            let datadesember = await tampildesember(connection, request, response)
            response.render('admin/index',{layout: false, data: {datajumPelanggan, datajumTransaksi, datajumProduk, datajanuari, datafebruari, datamaret, dataapril, datamei, datajuni, datajuli, dataagustus, dataseptember, dataoktober, datanovember, datadesember}})
          } catch (error) {
            console.log(error)
          }
        })()         
    }else {
      response.redirect('/')
    }    
  }else {
      response.redirect('/login')
  }

});

// untuk akses halaman produk
router.get('/produk', function(request, response, next) {

  if(request.session.loggedin) {
     // res.send(req.session.level)
      if (request.session.level == '1'){
        //  res.render('admin/produk', {layout: false})
        tampilProduk(connection, request, response).then((dataProduks) => {
            console.log(dataProduks)
            response.render('admin/produk',{layout: false, data: dataProduks})
        }).catch(err => {
            console.log(err)
        }) 
        
      }else {
          response.redirect('/')
      }
     
  }else {
      response.redirect('/login')
  }

});

// untuk akses halaman produk
router.post('/simpanproduk', function(request, response) {

  // tambahProduk(connection,request,response)
  // response.send('ok')

    // if(request.session.loggedin) {
    //     // res.send(req.session.level)
    //     if (request.session.level == '1'){
    //         //  res.render('admin/produk', {layout: false})
            
    //         tambahProduk(connection, request, response).then((dataProduks) => {
    //           console.log(dataProduks)
    //           response.render('admin/produk',{layout: false, data: dataProduks})
    //         }).catch(err => {
    //             console.log(err)
    //         }) 
            
    //     }else {
    //         response.redirect('/')
    //     }
        
    // }else {
    //     response.redirect('/login')
    // }
    let data = {
      nama: request.body.nama, 
      jenis: request.body.jenis,
      harga: request.body.harga,
      stok: request.body.stok,
      deskripsi: request.body.deskripsi
    };

    connection.query('INSERT INTO tbl_produk SET ?', data, (error, results, fields) => {
        if (error) {
        reject(error)
        }else {
          response.redirect('/admin/produk');
        }
    })   

});

// untuk ubah produk
router.post('/ubahproduk', function(request, response) {

    connection.query('UPDATE tbl_produk SET nama="'+request.body.nama+'", jenis="'+request.body.jenis+'", harga="'+request.body.harga+'", stok="'+request.body.stok+'", deskripsi="'+request.body.deskripsi+'" WHERE id_produk="'+request.body.id_produk+'"', (error, results, fields) => {
        if (error) {
          throw error;
        }else {
          response.redirect('/admin/produk');
        }
    })   

});

// untuk hapus produk
router.post('/hapusproduk', function(request, response) {

    connection.query('DELETE FROM tbl_produk WHERE id_produk="'+request.body.id_produk+'"', (error, results, fields) => {
        if (error) {
          throw error;
        }else {
          response.redirect('/admin/produk');
        }
    })   

});

// untuk tambah stok produk
router.post('/stokproduk', function(request, response) {

    let stokawal = request.body.stokawal;
    let stok = request.body.stok;

    let x = parseInt(stokawal)
    let y = parseInt(stok)

    let stokakhir = x+y;

    // response.send(String(stokakhir));
    let hasil = (String(stokakhir));

    connection.query('UPDATE tbl_produk SET stok="'+hasil+'" WHERE id_produk="'+request.body.id_produk+'"', (error, results, fields) => {
        if (error) {
          throw error;
        }else {
          response.redirect('/admin/produk');
        }
    })   

});

// --------------------------------------------------------------------------------------------------------------------------- 

// untuk akses halaman pelanggan
router.get('/pelanggan', function(request, response, next) {

  if(request.session.loggedin) {
      // res.send(req.session.level)
      if (request.session.level == '1'){
        //  res.render('admin/produk', {layout: false})
        tampilPelanggan(connection, request, response).then((dataPelanggan) => {
            console.log(dataPelanggan)
            response.render('admin/pelanggan',{layout: false, data: dataPelanggan})
        }).catch(err => {
            console.log(err)
        }) 
        
      }else {
          response.redirect('/')
      }
      
  }else {
      response.redirect('/login')
  }

});

// untuk simpan pelanggan
router.post('/simpanpelanggan', function(request, response) {

    let data = {
      nama: request.body.nama, 
      telepon: request.body.telepon,
      alamat: request.body.alamat
    };

    connection.query('INSERT INTO tbl_pelanggan SET ?', data, (error, results, fields) => {
        if (error) {
          reject(error)
        }else {
          response.redirect('/admin/pelanggan');
        }
    })   

});

// untuk ubah pelanggan
router.post('/ubahpelanggan', function(request, response) {

  connection.query('UPDATE tbl_pelanggan SET nama="'+request.body.nama+'", telepon="'+request.body.telepon+'", alamat="'+request.body.alamat+'" WHERE id_pelanggan="'+request.body.id_pelanggan+'"', (error, results, fields) => {
      if (error) {
        throw error;
      }else {
        response.redirect('/admin/pelanggan');
      }
  })   

});

// untuk hapus pelanggan
router.post('/hapuspelanggan', function(request, response) {

  connection.query('DELETE FROM tbl_pelanggan WHERE id_pelanggan="'+request.body.id_pelanggan+'"', (error, results, fields) => {
      if (error) {
        throw error;
      }else {
        response.redirect('/admin/pelanggan');
      }
  })   

});

// --------------------------------------------------------------------------------------------------------------------------- 

// untuk akses halaman nota
router.get('/nota', function(request, response, next) {

  if(request.session.loggedin) {
    if (request.session.level == '1'){
      tampilNota(connection, request, response).then((dataNota) => {
          console.log(dataNota)
          response.render('admin/nota',{layout: false, data: dataNota})
      }).catch(err => {
        console.log(err)
      })         
    }else {
      response.redirect('/')
    }      
  }else {
    response.redirect('/login')
  }

});

// --------------------------------------------------------------------------------------------------------------------------- 

// untuk akses halaman pengguna
router.get('/pengguna', function(request, response, next) {

    if(request.session.loggedin) {
        // res.send(req.session.level)
        if (request.session.level == '1'){
          //  res.render('admin/produk', {layout: false})
          tampilPengguna(connection, request, response).then((dataPengguna) => {
              console.log(dataPengguna)
              response.render('admin/pengguna',{layout: false, data: dataPengguna})
          }).catch(err => {
              console.log(err)
          }) 
          
        }else {
            response.redirect('/')
        }
        
    }else {
        response.redirect('/login')
    }

});

// untuk simpan pelanggan
router.post('/simpanpengguna', function(request, response) {

  let data = {
    nama: request.body.nama, 
    username: request.body.username,
    password: bcrypt.hashSync(request.body.password, 10),
    level: request.body.level
  };

  connection.query('INSERT INTO tbl_login SET ?', data, (error, results, fields) => {
      if (error) {
        reject(error)
      }else {
        response.redirect('/admin/pengguna');
      }
  })   

});

// untuk ubah pengguna
router.post('/ubahpengguna', function(request, response) {

  let pass = bcrypt.hashSync(request.body.password, 10);

  connection.query('UPDATE tbl_login SET nama="'+request.body.nama+'", username="'+request.body.username+'", password="'+pass+'" WHERE id_login="'+request.body.id_login+'"', (error, results, fields) => {
      if (error) {
        throw error;
      }else {
        response.redirect('/admin/pengguna');
      }
  })   

});

// untuk hapus pelanggan
router.post('/hapuspengguna', function(request, response) {

  connection.query('DELETE FROM tbl_login WHERE id_login="'+request.body.id_login+'"', (error, results, fields) => {
      if (error) {
        throw error;
      }else {
        response.redirect('/admin/pengguna');
      }
  })   

});

module.exports = router;