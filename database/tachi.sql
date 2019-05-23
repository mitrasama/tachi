-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 23 Bulan Mei 2019 pada 10.41
-- Versi server: 10.1.30-MariaDB
-- Versi PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tachi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_detail_nota`
--

CREATE TABLE `tbl_detail_nota` (
  `no_nota` varchar(100) NOT NULL,
  `nama_produk` varchar(255) NOT NULL,
  `jumlah_beli` int(20) NOT NULL,
  `harga_satuan` int(20) NOT NULL,
  `diskon` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_detail_nota`
--

INSERT INTO `tbl_detail_nota` (`no_nota`, `nama_produk`, `jumlah_beli`, `harga_satuan`, `diskon`) VALUES
('19051701', 'LPG 12 Kg Baja', 78, 500000, 0),
('19051701', 'Bright Gas 12 Kg Baja', 67, 500000, 0),
('19051701', 'LPG 12 Kg Refill', 23, 160000, 0),
('19051701', 'Bright Gas 12 Kg Refill', 65, 160000, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_login`
--

CREATE TABLE `tbl_login` (
  `id_login` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `level` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_login`
--

INSERT INTO `tbl_login` (`id_login`, `username`, `password`, `nama`, `level`) VALUES
(1, 'admin', '$2b$10$WqaNqIWoDwy/G7ejCimo8.HHAkscMhgJ7rerQip8bQ9pNQbLD8GUG', 'Budi Waseso', '1'),
(2, 'petugas', '$2b$10$7eg3GnYR8W8Y/5i0OH/lR.Z5oaxkQDq0fEDTYO13ol7FM5b1IDwqa', 'Aisyah Putri', '2'),
(3, 'hadiw', '$2b$10$1k/GxB9OecUuHyujFmq7mu46hgw45Wbkx9f/1GM3e31le0B.qLorm', 'Hadi Wijaya', '2'),
(4, 'abdul', '$2b$10$4jcYOKAp6ZHwMXZb0hf1FueqeP8M2CqsmviH1Z.cl6MqDQe25Tdh2', 'Abdul Aziz', '2'),
(6, 'wangi', '$2b$10$wGX1vEGpS.3W1U90yl..5eyLuUEYtO4yQM/jA8r2wE.lOlCuEMMMS', 'Wangi Dewi', '1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_nota`
--

CREATE TABLE `tbl_nota` (
  `id_nota` int(11) NOT NULL,
  `no_nota` varchar(100) NOT NULL,
  `tanggal` date NOT NULL,
  `id_pelanggan` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_nota`
--

INSERT INTO `tbl_nota` (`id_nota`, `no_nota`, `tanggal`, `id_pelanggan`) VALUES
(1, '19051701', '2019-05-23', '1'),
(2, '19051702', '2019-05-24', '4');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_pelanggan`
--

CREATE TABLE `tbl_pelanggan` (
  `id_pelanggan` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `telepon` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_pelanggan`
--

INSERT INTO `tbl_pelanggan` (`id_pelanggan`, `nama`, `alamat`, `telepon`) VALUES
(1, 'UD. Makmur Jaya', 'Jl. Gatot Subroto Cilacap Tengah Kabupaten Cilacap', '028215478'),
(2, 'CV. Jaya Sentosa', 'Jl. Pandawa No 7 RT 2 RW 4 Desa Tritih Wetan Kabupaten Cilacap', '023158785'),
(3, 'UD. Inti Cahaya', 'Jl. Sumatera Sidanegara Cilacap Selatan Kabupaten Cilacap.', '021457857'),
(4, 'CV. Arun Energy', 'Jl Pandawa No 7 RT 2 RW 4 Desa Tritih Wetan Kab. Cilacap', '023158454');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_produk`
--

CREATE TABLE `tbl_produk` (
  `id_produk` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `harga` int(20) NOT NULL,
  `stok` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_produk`
--

INSERT INTO `tbl_produk` (`id_produk`, `nama`, `jenis`, `deskripsi`, `harga`, `stok`) VALUES
(1, 'LPG 12 Kg Baja', 'Baja', 'Tabung dan Isi', 500000, 11),
(2, 'LPG 12 Kg Refill', 'Refill', 'Hanya isi', 160000, 10),
(3, 'Bright Gas 12 Kg Baja', 'Baja', 'Tabung dan Isi', 500000, 10),
(4, 'Bright Gas 12 Kg Refill', 'Refill', 'Hanya Isi', 160000, 10),
(5, 'Bright Gas 5,5 Kg Baja', 'Baja', 'Tabung dan Isi', 300000, 10),
(6, 'Bright Gas 5,5 Kg Refill', 'Refill', 'Hanya Isi', 75000, 10),
(7, 'LPG 50 Kg Baja', 'Baja', 'Tabung dan Isi', 1600000, 10),
(8, 'LPG 50 Kg Refill', 'Refill', 'Hanya Isi', 700000, 16);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_login`
--
ALTER TABLE `tbl_login`
  ADD PRIMARY KEY (`id_login`);

--
-- Indeks untuk tabel `tbl_nota`
--
ALTER TABLE `tbl_nota`
  ADD PRIMARY KEY (`id_nota`);

--
-- Indeks untuk tabel `tbl_pelanggan`
--
ALTER TABLE `tbl_pelanggan`
  ADD PRIMARY KEY (`id_pelanggan`);

--
-- Indeks untuk tabel `tbl_produk`
--
ALTER TABLE `tbl_produk`
  ADD PRIMARY KEY (`id_produk`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_login`
--
ALTER TABLE `tbl_login`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `tbl_nota`
--
ALTER TABLE `tbl_nota`
  MODIFY `id_nota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `tbl_pelanggan`
--
ALTER TABLE `tbl_pelanggan`
  MODIFY `id_pelanggan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `tbl_produk`
--
ALTER TABLE `tbl_produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
