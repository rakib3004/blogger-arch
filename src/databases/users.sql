-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2023 at 01:19 PM
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
('2ed99fff-e742-4a26-b840-c2a7248f351a', 'rakib', 'rakib@cefalo.com', '$2b$10$0kt4je7utedw35pWtvbffeutK1Q33eizc9MB.pB/ZbjRe..853Spa', '2023-03-31 05:04:01', '2023-05-03 05:45:58'),
('2f0dbeb9-2596-4196-99d9-68f1d7dd581b', 'zerin', 'zerin@cefalo.com', '$2b$10$6w00ctHFq9qmYfztrNDbF..X/sXrWXSD8GdbLnJ19UjZ4vFf/F6GK', '2023-05-03 10:21:34', '2023-05-03 10:21:34'),
('36de48d1-ae43-402f-a50c-dd84f953771e', 'miran', 'miran@cefalo.com', '$2b$10$X3MBGPp1yaYjQYOAeNrKnOAtlu13WYSeAqkz.wJqMALCqbHasYoie', '2023-04-03 09:45:46', '2023-04-03 09:45:46'),
('4269af63-06ba-48a8-9e50-c96743af6ad9', 'jagonmoy', 'jagonmoy@cefalo.com', '$2b$10$gnJjEBtkPPEAP3IPNAbIje55sZbYLOCPZGJPJbCESOfHosQwWFIQa', '2023-04-03 02:30:21', '2023-04-03 02:30:21'),
('5ca32cb8-5c35-4f77-96c3-517007593328', 'inan', 'inan@cefalo.com', '$2b$10$6YWz/p7aio1LyRS3TWpgp.Xlr5Mq5vpt4b/TuGdE4Yxl4LOftJhIa', '2023-04-03 09:03:43', '2023-04-03 09:03:43'),
('63334c2a-9767-4ebc-9f64-29d327e918ff', 'tahmid', 'tahmid@cefalo.com', '$2b$10$HwLgGEUK.oL28OE1vYGAn.dX1JVHh5IsmbvPx99eKnYjNcL7/gZRe', '2023-04-04 01:55:22', '2023-04-04 01:55:22'),
('76fcf668-2421-4ec6-9c33-b136d4d5213d', 'ranak', 'ranak@cefalo.com', '$2b$10$qpqwB2QHr6hhSk8DcPs/h.LHzXHdjMGPwhAbATaIOtTlGJZIzuHHu', '2023-04-18 06:41:26', '2023-04-18 06:41:26'),
('7f6d86fa-9e82-40f4-be95-7829f0bd27e3', 'ashraf', 'ashraf@cefalo.com', '$2b$10$fYnKCf9c.Pr01CMtipYZ2u/y5KA/CbG6mmXcABvNYfZvQhnVQKyZq', '2023-05-03 10:20:02', '2023-05-03 10:20:02'),
('985f441e-de46-47aa-8f7d-74d28d9e11a2', 'tasmia', 'tasmia@cefalo.com', '$2b$10$tpHgaFeSDMgQKLgxqN23XerSprT1BIMn1SeXKWITxmaZqaSUt3nMG', '2023-04-26 03:36:55', '2023-04-26 03:36:55'),
('9a0dfb08-a302-4d63-b855-972661b503af', 'turja', 'turja@cefalo.com', '$2b$10$35pdG7/RIyNAt/7WsLCbP.wX/MeGX4y9aXfOtroJE1ihqBLtwyNhu', '2023-04-28 02:47:44', '2023-04-28 02:47:44'),
('a41c8259-f65c-4990-934d-c0ddcc3ae2ac', 'ryan', 'ryan@cefalo.com', '$2b$10$yh5NH/4GKMT2Jmbrd2ciMuGqDs2y.hgsrF1JjODq2xjQxks81WOKe', '2023-05-03 10:18:24', '2023-05-03 10:18:24'),
('a72d26e5-c36d-4351-993e-43491a3ad017', 'trofder', 'trofder@cefalo.com', '$2b$10$71HpkaVwcxsVBqUr8YmW2./ISYOPoFqg2JBwxVs0FSEac8CewXlJC', '2023-04-18 06:19:09', '2023-04-18 06:19:09'),
('acd6f5ae-5c57-47aa-996d-5a877f9bf0fb', 'tahmeed', 'tahmeed@cefalo.com', '$2b$10$utnwOW1SSLJGdf9OeV2oz.YeHv2FUXX7h6av2hWgpLjkm7o.iO/xq', '2023-04-03 02:29:44', '2023-04-03 02:29:44'),
('c4264fcd-78d4-4a4c-bc5c-b1ca191e0517', 'nadim', 'nadim@cefalo.com', '$2b$10$yt0dU1L.VonPWWJ7H.F2WuuUrKRZJeJVGOcLWZYXOhWQQzzRSWwGS', '2023-04-04 01:47:43', '2023-04-04 01:47:43'),
('e64265fe-107b-4cbf-8aaa-41cdba403f2e', 'abdullah', 'abdullah@cefalo.com', '$2b$10$f5yIygInyjGZOKA9r.4NLelw02eOISC3j1Si7ttW52e2c6y/PT0bi', '2023-05-03 10:40:32', '2023-05-03 10:58:35'),
('e7ea10bb-a191-4996-a881-562c2c780a90', 'ragib', 'ragib@cefalo.com', '$2b$10$qK2bGjwTrUWiYRJDamDSzeEQSuBpDsMVu/h4aooqkxf4HwTGDq0vK', '2023-05-02 03:32:12', '2023-05-02 03:32:12');

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
