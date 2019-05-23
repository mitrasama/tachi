var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();
var multer = require('multer');
const bcrypt = require('bcrypt');
require('../models/connection').connection();
const {tampilProduk, tambahProduk} = require('../controllers/produk');
const {tampilPelanggan} = require('../controllers/pelanggan');
const {tampilNota} = require('../controllers/nota');
// const {tambahProduk} = require('../controllers/produk');

router.get('/', function(req, res, next) {

    if(req.session.loggedin) {
        // res.send(req.session.level)
         if (req.session.level == '2'){
            //  res.send('ok')
            res.render('petugas/index', {layout: false})
         }else {
             res.redirect('/')
         }
        
    }else {
        res.redirect('/login')
    }

});

// --------------------------------------------------------------------------------------------------------------------------- 

// untuk akses halaman produk
router.get('/produk', function(request, response, next) {

  if(request.session.loggedin) {
     // res.send(req.session.level)
      if (request.session.level == '2'){
        //  res.render('admin/produk', {layout: false})
        tampilProduk(connection, request, response).then((dataProduks) => {
            console.log(dataProduks)
            response.render('petugas/produk',{layout: false, data: dataProduks})
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

// untuk akses halaman pelanggan
router.get('/pelanggan', function(request, response, next) {

  if(request.session.loggedin) {
      // res.send(req.session.level)
      if (request.session.level == '2'){
        //  res.render('admin/produk', {layout: false})
        tampilPelanggan(connection, request, response).then((dataPelanggan) => {
            console.log(dataPelanggan)
            response.render('petugas/pelanggan',{layout: false, data: dataPelanggan})
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
        response.redirect('/petugas/pelanggan');
      }
  })   

});

// untuk ubah pelanggan
router.post('/ubahpelanggan', function(request, response) {

  connection.query('UPDATE tbl_pelanggan SET nama="'+request.body.nama+'", telepon="'+request.body.telepon+'", alamat="'+request.body.alamat+'" WHERE id_pelanggan="'+request.body.id_pelanggan+'"', (error, results, fields) => {
      if (error) {
        throw error;
      }else {
        response.redirect('/petugas/pelanggan');
      }
  })   

});

// untuk hapus pelanggan
router.post('/hapuspelanggan', function(request, response) {

  connection.query('DELETE FROM tbl_pelanggan WHERE id_pelanggan="'+request.body.id_pelanggan+'"', (error, results, fields) => {
      if (error) {
        throw error;
      }else {
        response.redirect('/petugas/pelanggan');
      }
  })   

});

// --------------------------------------------------------------------------------------------------------------------------- 

// untuk akses halaman nota
router.get('/nota', function(request, response, next) {

  if(request.session.loggedin) {
     // res.send(req.session.level)
      if (request.session.level == '2'){

          (tampilDataProdPel = async () => {
            try {
              let dataProduks = await tampilProduk(connection, request, response)
              let dataPelanggans = await tampilPelanggan(connection, request, response)
              // data ketiga
              // dst
              response.render('petugas/nota',{layout: false, data: {dataProduks, dataPelanggans}})
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

// untuk simpan nota
router.post('/simpannota', function(request, response) {

  function data1(){
    return new Promise((resolve, reject) => {
      var data1 = JSON.parse(request.body.dataProduk);
      data1.forEach(prod => {
        connection.query('INSERT INTO tbl_detail_nota(no_nota, nama_produk, jumlah_beli, harga_satuan, diskon) VALUES ("'+prod.noNota+'","'+prod.namaProduk+'","'+prod.jumProduk+'","'+prod.hargaProduk+'","'+prod.disProduk+'")', (error, results, fields) => {
          if(error){
            reject(error)
          }else{
            resolve(results)
          }
        })
      });
    })
  }

  function data2(){
    return new Promise((resolve, reject) => {
      var data2 = JSON.parse(request.body.dataTransaksi);
      data2.forEach(prod => {
        connection.query('INSERT INTO tbl_nota(no_nota, tanggal, id_pelanggan) VALUES ("'+prod.nonotaTransaksi+'","'+prod.tanggalTransaksi+'","'+prod.pelangganTransaksi+'")',(error, results, fields) => {
          if(error){
            reject(error)
          }else{
            resolve(results)
          }
        })
      })
    })
  }

  let insertTwoData = async () => {
    try {
      await data1()
      await data2()

      response.send({succes: "ok"});
    }catch (error) {
      console.log(error)
    }
  }
  insertTwoData()

});

// --------------------------------------------------------------------------------------------------------------------------- 

// untuk menampilkan daftar nota
router.get('/cetak', function(request, response, next) {

  if(request.session.loggedin) {
      if (request.session.level == '2'){
        tampilNota(connection, request, response).then((dataNota) => {
            console.log(dataNota)
            response.render('petugas/cetak',{layout: false, data: dataNota})
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

// untuk cetak nota
router.post('/cetaknota', function(req, res, next) {

  if(req.session.loggedin) {
      // res.send(req.session.level)
       if (req.session.level == '2'){
          //  res.send('ok')
          res.render('petugas/cetaknota', {layout: false})
       }else {
           res.redirect('/')
       }
      
  }else {
      res.redirect('/login')
  }

});

module.exports = router;