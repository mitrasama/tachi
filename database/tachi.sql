-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 28 Bulan Mei 2019 pada 06.39
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
('SJS0', 'LPG 12 Kg Baja', 2, 500000, 0),
('SJS0', 'Bright Gas 12 Kg Baja', 3, 500000, 0),
('SJS01', 'Bright Gas 12 Kg Refill', 3, 160000, 0),
('SJS01', 'Bright Gas 5,5 Kg Refill', 5, 75000, 0),
('SJS02', 'LPG 12 Kg Baja', 2, 500000, 50),
('SJS02', 'Bright Gas 12 Kg Baja', 2, 500000, 10),
('SJS03', 'LPG 12 Kg Baja', 34, 500000, 0),
('SJS03', 'Bright Gas 12 Kg Baja', 5, 500000, 0),
('SJS04', 'Bright Gas 5,5 Kg Refill', 23, 75000, 0),
('SJS04', 'LPG 50 Kg Refill', 22, 700000, 0),
('SJS05', 'LPG 12 Kg Baja', 2, 500000, 0),
('SJS06', 'Bright Gas 12 Kg Baja', 2, 500000, 0),
('SJS07', 'LPG 12 Kg Refill', 2, 160000, 0),
('SJS08', 'Bright Gas 12 Kg Baja', 2, 500000, 0),
('SJS09', 'Bright Gas 5,5 Kg Baja', 4, 300000, 0),
('SJS010', 'Bright Gas 12 Kg Refill', 4, 160000, 0),
('SJS011', 'Bright Gas 5,5 Kg Baja', 4, 300000, 0),
('SJS012', 'Bright Gas 12 Kg Refill', 4, 160000, 0),
('SJS013', 'Bright Gas 12 Kg Refill', 4, 160000, 0),
('SJS014', 'Bright Gas 12 Kg Refill', 4, 160000, 0),
('SJS015', 'LPG 12 Kg Refill', 4, 160000, 0),
('SJS016', 'LPG 12 Kg Baja', 2, 500000, 10),
('SJS016', 'LPG 50 Kg Baja', 2, 1600000, 50),
('SJS017', 'LPG 12 Kg Refill', 3, 160000, 10),
('SJS017', 'Bright Gas 12 Kg Refill', 5, 160000, 5),
('SJS017', 'LPG 50 Kg Baja', 15, 1600000, 10);

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
(1, 'SJS0', '2019-05-25', '1'),
(2, 'SJS01', '2019-05-27', '2'),
(3, 'SJS02', '2019-05-27', '3'),
(4, 'SJS03', '2019-05-27', '2'),
(5, 'SJS04', '2019-05-29', '3'),
(6, 'SJS05', '2019-01-02', '1'),
(7, 'SJS06', '2019-02-04', '2'),
(8, 'SJS07', '2019-03-07', '2'),
(9, 'SJS08', '2019-04-05', '2'),
(10, 'SJS09', '2019-06-12', '3'),
(11, 'SJS010', '2019-07-11', '3'),
(12, 'SJS011', '2019-08-08', '3'),
(13, 'SJS012', '2019-09-17', '2'),
(14, 'SJS013', '2019-10-10', '2'),
(15, 'SJS014', '2019-11-06', '2'),
(16, 'SJS015', '2019-12-12', '2'),
(17, 'SJS016', '2019-05-28', '1'),
(18, 'SJS017', '2019-05-29', '3');

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
  MODIFY `id_nota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
