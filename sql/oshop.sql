-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 23, 2018 at 02:18 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `cartId`, `product_id`, `createdAt`, `updatedAt`) VALUES
(1, 13, 11, '2018-04-23 12:17:45', '2018-04-23 12:17:45'),
(2, 13, 12, '2018-04-23 12:18:07', '2018-04-23 12:18:07');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `category`, `price`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(11, 'Bread', 'bread', '12', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsKFdv1JoG-boI2h2zyPq3LBaCFnO6U51ceIkUqFNkNRI6tXg', '2018-04-21 06:25:37', '2018-04-21 06:25:37'),
(12, 'vegitable', 'vegitables', '12', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXme4nq1It48md9W9B9qqeXnCa6LTR-9elxB3J2AZYn8SXzta', '2018-04-21 06:26:08', '2018-04-21 06:26:08'),
(13, 'Onion', 'vegitables', '5.2', 'http://cdn.shopify.com/s/files/1/1537/5553/products/00613_15abd93a-e239-45df-acdb-8485b40d546a_grande.jpg?v=1486440965', '2018-04-23 06:27:04', '2018-04-23 06:27:04'),
(14, 'cheery', 'bread', '55', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0JWncHy0JCdV6cwcKdRuse169jo-eybP5fv_we78Ycec83IZ', '2018-04-23 07:24:24', '2018-04-23 07:24:47');

-- --------------------------------------------------------

--
-- Table structure for table `Pros`
--

CREATE TABLE `Pros` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20180418101847-create-user.js'),
('20180419065210-create-products.js'),
('20180423101147-create-shopping-carts.js'),
('20180423105509-create-pro.js'),
('20180423105657-create-cart-items.js');

-- --------------------------------------------------------

--
-- Table structure for table `shoppingCarts`
--

CREATE TABLE `shoppingCarts` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shoppingCarts`
--

INSERT INTO `shoppingCarts` (`id`, `createdAt`, `updatedAt`) VALUES
(13, '2018-04-23 12:15:15', '2018-04-23 12:15:15');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  `isAdmin` int(11) DEFAULT NULL,
  `isActive` int(11) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `firstName`, `lastName`, `email`, `password`, `isAdmin`, `isActive`, `createdAt`, `updatedAt`) VALUES
(11, 'pardeep', 'kumar', 'pardeep.kumar@antechindia.com', 'Pardeep123', 1, NULL, '2018-04-18 12:55:34', '2018-04-18 12:55:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Pros`
--
ALTER TABLE `Pros`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `shoppingCarts`
--
ALTER TABLE `shoppingCarts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `Pros`
--
ALTER TABLE `Pros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `shoppingCarts`
--
ALTER TABLE `shoppingCarts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
