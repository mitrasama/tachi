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
// const {tambahProduk} = require('../controllers/produk');

// untuk akses halaman route
router.get('/', function(req, res, next) {

     if(req.session.loggedin) {
        // res.send(req.session.level)
         if (req.session.level == '1'){
            //  res.send('ok')
            res.render('admin/index', {layout: false})
         }else {
             res.redirect('/')
         }
        
    }else {
        res.redirect('/login')
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
router.get('/nota', function(req, res, next) {

  if(req.session.loggedin) {
     // res.send(req.session.level)
      if (req.session.level == '1'){
         //  res.send('ok')
         res.render('admin/nota', {layout: false})
      }else {
          res.redirect('/')
      }
     
 }else {
     res.redirect('/login')
 }

});

router.get('/tambahnota', function(request, response, next) {
  // connection.query('SELECT * FROM tb_pelanggan WHERE nama LIKE "'+request.body.nama+'"', (error, results, fields) => {
  //     if (error) {
  //       throw error;
  //     }else {
  //       if ($result->num_rows > 0) {
  //           $list = array();
  //           $key=0;
  //           while($row = $result->fetch_assoc()) {
  //               $list[$key]['id'] = $row['propinsi_id'];
  //               $list[$key]['text'] = $row['nama']; 
  //           $key++;
  //           }
  //           echo json_encode($list);
  //       } else {
  //           echo "hasil kosong";
  //       }
  //     }
  // })
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