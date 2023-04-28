-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2023 at 10:33 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogger`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(60) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('019cfe13-ee98-4071-82f8-4f90ca9ec54c', 'shihab', 'shihab@cefalo.com', '$2b$10$j6FDE37J184qnOaqskWHFuxVshJTqWdKgmz8Eum98DRddzQVZCRtu', '2023-04-17 09:51:08', '2023-04-17 09:51:08'),
('0a9556be-3703-4ce6-835f-73754737642e', 'khalil', 'khalil@cefalo.com', '$2b$10$1w7lhEbCGIjn4yLyR1cn5eI4Z.l7zW8Lsve88pAy1vC2eyuEU8Y4W', '2023-04-17 09:06:55', '2023-04-17 09:06:55'),
('2ed99fff-e742-4a26-b840-c2a7248f351a', 'rakib', 'rakib@cefalo.com', '$2b$10$GvkpEHzm3R6hpq1TLr.kLeDC7bHyIlGJtFIy5GCQGSkF4kq8Ugc1u', '2023-03-31 05:04:01', '2023-04-18 02:16:14'),
('36de48d1-ae43-402f-a50c-dd84f953771e', 'miran', 'miran@cefalo.com', '$2b$10$X3MBGPp1yaYjQYOAeNrKnOAtlu13WYSeAqkz.wJqMALCqbHasYoie', '2023-04-03 09:45:46', '2023-04-03 09:45:46'),
('4269af63-06ba-48a8-9e50-c96743af6ad9', 'jagonmoy', 'jagonmoy@cefalo.com', '$2b$10$gnJjEBtkPPEAP3IPNAbIje55sZbYLOCPZGJPJbCESOfHosQwWFIQa', '2023-04-03 02:30:21', '2023-04-03 02:30:21'),
('5ca32cb8-5c35-4f77-96c3-517007593328', 'inan', 'inan@cefalo.com', '$2b$10$6YWz/p7aio1LyRS3TWpgp.Xlr5Mq5vpt4b/TuGdE4Yxl4LOftJhIa', '2023-04-03 09:03:43', '2023-04-03 09:03:43'),
('63334c2a-9767-4ebc-9f64-29d327e918ff', 'tahmid', 'tahmid@cefalo.com', '$2b$10$HwLgGEUK.oL28OE1vYGAn.dX1JVHh5IsmbvPx99eKnYjNcL7/gZRe', '2023-04-04 01:55:22', '2023-04-04 01:55:22'),
('6c56373c-4a3d-47c9-9bb5-df4e168d6054', 'shaishab', 'shaishab@cefalo.com', '$2b$10$.x6U2NmtMIuYA/mhej1sLek5MMR0lqzq5TxH0nul0Zvd6OsuzuQK2', '2023-04-04 04:18:15', '2023-04-04 04:18:15'),
('76fcf668-2421-4ec6-9c33-b136d4d5213d', 'ranak', 'ranak@cefalo.com', '$2b$10$qpqwB2QHr6hhSk8DcPs/h.LHzXHdjMGPwhAbATaIOtTlGJZIzuHHu', '2023-04-18 06:41:26', '2023-04-18 06:41:26'),
('8cefeb54-314e-4cbe-bedb-97fa93f1d6d7', 'saidul', 'saidul@cefalo.com', '$2b$10$6lLQ4NuF4ExdPkYjfD0aGOhhRdA.zW2OMqpJ8QS.qQT6pZYrz4uti', '2023-04-14 10:20:20', '2023-04-14 10:20:20'),
('985f441e-de46-47aa-8f7d-74d28d9e11a2', 'tasmia', 'tasmia@cefalo.com', '$2b$10$tpHgaFeSDMgQKLgxqN23XerSprT1BIMn1SeXKWITxmaZqaSUt3nMG', '2023-04-26 03:36:55', '2023-04-26 03:36:55'),
('9a0dfb08-a302-4d63-b855-972661b503af', 'turja', 'turja@cefalo.com', '$2b$10$35pdG7/RIyNAt/7WsLCbP.wX/MeGX4y9aXfOtroJE1ihqBLtwyNhu', '2023-04-28 02:47:44', '2023-04-28 02:47:44'),
('a72d26e5-c36d-4351-993e-43491a3ad017', 'trofder', 'trofder@cefalo.com', '$2b$10$71HpkaVwcxsVBqUr8YmW2./ISYOPoFqg2JBwxVs0FSEac8CewXlJC', '2023-04-18 06:19:09', '2023-04-18 06:19:09'),
('acd6f5ae-5c57-47aa-996d-5a877f9bf0fb', 'tahmeed', 'tahmeed@cefalo.com', '$2b$10$utnwOW1SSLJGdf9OeV2oz.YeHv2FUXX7h6av2hWgpLjkm7o.iO/xq', '2023-04-03 02:29:44', '2023-04-03 02:29:44'),
('bced7494-b4e2-488c-8f79-8e1cc0b29883', 'raghib', 'raghib@cefalo.com', '$2b$10$ptf0CdcGC0XbH4.ytvL6BOrEGHd3LgtiyTgTCitJM7HEzPD.BMEBO', '2023-04-03 02:30:27', '2023-04-03 02:30:27'),
('c4264fcd-78d4-4a4c-bc5c-b1ca191e0517', 'nadim', 'nadim@cefalo.com', '$2b$10$yt0dU1L.VonPWWJ7H.F2WuuUrKRZJeJVGOcLWZYXOhWQQzzRSWwGS', '2023-04-04 01:47:43', '2023-04-04 01:47:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
