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
const {cetakNota} = require('../controllers/nota');
const {kodeNota} = require('../controllers/nota');
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

router.get('/', function(request, response, next) {

  if(request.session.loggedin) {
    if (request.session.level == '2'){
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
            response.render('petugas/index',{layout: false, data: {datajumPelanggan, datajumTransaksi, datajumProduk, datajanuari, datafebruari, datamaret, dataapril, datamei, datajuni, datajuli, dataagustus, dataseptember, dataoktober, datanovember, datadesember}})
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
              let dataKode = await kodeNota(connection, request, response)
              // data ketiga
              // dst
              response.render('petugas/nota',{layout: false, data: {dataProduks, dataPelanggans, dataKode}})
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
router.post('/cetaknota', function(request, response, next) {

  var adr = request.body.no_nota;
  var sql = 'SELECT tbl_nota.id_nota, tbl_pelanggan.alamat, tbl_nota.no_nota, tbl_nota.tanggal, tbl_pelanggan.nama, tbl_detail_nota.nama_produk, tbl_detail_nota.jumlah_beli, tbl_detail_nota.harga_satuan, tbl_detail_nota.diskon FROM tbl_nota, tbl_pelanggan, tbl_detail_nota WHERE tbl_nota.id_pelanggan = tbl_pelanggan.id_pelanggan AND tbl_nota.no_nota = tbl_detail_nota.no_nota AND tbl_nota.no_nota = ? ORDER BY tbl_nota.id_nota';
  connection.query(sql, [adr], function (err, result) {
    if (err) throw err;
    

    var i;
    var newData = []
    var total = 0
    for (i = 0; i < result.length; i++) {
      console.log((result[i].harga_satuan * result[i].jumlah_beli) - (result[i].harga_satuan * result[i].jumlah_beli * result[i].diskon/100));
      newData.push({
        id_nota: result[i].id_nota,
        alamat: result[i].alamat,
        no_nota: result[i].no_nota,
        tanggal: result[i].tanggal,
        nama: result[i].nama,
        nama_produk: result[i].nama_produk,
        jumlah_beli: result[i].jumlah_beli,
        harga_satuan: result[i].harga_satuan,
        diskon: result[i].diskon,
        jumlah: (result[i].harga_satuan * result[i].jumlah_beli) - (result[i].harga_satuan * result[i].jumlah_beli * result[i].diskon/100)
      })
      total += (result[i].harga_satuan * result[i].jumlah_beli) - (result[i].harga_satuan * result[i].jumlah_beli * result[i].diskon/100);
    }
    response.render('petugas/cetaknota',{layout: false, data: newData, total})
  });

});

// untuk hapus nota
router.post('/hapusnota', function(request, response, next) {
  var no_nota = request.body.no_nota;
  var sql = "DELETE tbl_nota, tbl_detail_nota FROM tbl_nota, tbl_detail_nota WHERE tbl_nota.no_nota = tbl_detail_nota.no_nota AND tbl_nota.no_nota = ?";

  connection.query(sql, [no_nota], function(error, results, fields) {
    if (error) {
        throw error;
    }
    response.redirect('/petugas/cetak')
  });
})

module.exports = router;