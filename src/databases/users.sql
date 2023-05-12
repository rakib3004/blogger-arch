-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2023 at 12:57 PM
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
('2ed99fff-e742-4a26-b840-c2a7248f351a', 'rakib', 'rakib@cefalo.com', '$2b$10$MGLWOJD8UFvADj7rI2kHWuWIUgHeF78PCACFDd0nrP2X/xHFc8Qg2', '2023-03-31 05:04:01', '2023-05-05 04:51:37'),
('63334c2a-9767-4ebc-9f64-29d327e918ff', 'tahmid', 'tahmid@cefalo.com', '$2b$10$HwLgGEUK.oL28OE1vYGAn.dX1JVHh5IsmbvPx99eKnYjNcL7/gZRe', '2023-04-04 01:55:22', '2023-04-04 01:55:22'),
('76fcf668-2421-4ec6-9c33-b136d4d5213d', 'ranak', 'ranak@cefalo.com', '$2b$10$qpqwB2QHr6hhSk8DcPs/h.LHzXHdjMGPwhAbATaIOtTlGJZIzuHHu', '2023-04-18 06:41:26', '2023-04-18 06:41:26'),
('985f441e-de46-47aa-8f7d-74d28d9e11a2', 'tasmia', 'tasmia@cefalo.com', '$2b$10$tpHgaFeSDMgQKLgxqN23XerSprT1BIMn1SeXKWITxmaZqaSUt3nMG', '2023-04-26 03:36:55', '2023-04-26 03:36:55'),
('9a0dfb08-a302-4d63-b855-972661b503af', 'turja', 'turja@cefalo.com', '$2b$10$35pdG7/RIyNAt/7WsLCbP.wX/MeGX4y9aXfOtroJE1ihqBLtwyNhu', '2023-04-28 02:47:44', '2023-04-28 02:47:44'),
('a41c8259-f65c-4990-934d-c0ddcc3ae2ac', 'ryan', 'ryan@cefalo.com', '$2b$10$yh5NH/4GKMT2Jmbrd2ciMuGqDs2y.hgsrF1JjODq2xjQxks81WOKe', '2023-05-03 10:18:24', '2023-05-03 10:18:24'),
('a72d26e5-c36d-4351-993e-43491a3ad017', 'trofder', 'trofder@cefalo.com', '$2b$10$71HpkaVwcxsVBqUr8YmW2./ISYOPoFqg2JBwxVs0FSEac8CewXlJC', '2023-04-18 06:19:09', '2023-04-18 06:19:09'),
('acd6f5ae-5c57-47aa-996d-5a877f9bf0fb', 'tahmeed', 'tahmeed@cefalo.com', '$2b$10$utnwOW1SSLJGdf9OeV2oz.YeHv2FUXX7h6av2hWgpLjkm7o.iO/xq', '2023-04-03 02:29:44', '2023-04-03 02:29:44'),
('cc798387-4081-4924-9645-06f6fb459f08', 'fuad', 'fuad@cefalo.com', '$2b$10$EnVIxZxHUPneFzjNsJHVCeibCt3wZcozss68PIeWf/F.81FKljZJe', '2023-05-05 03:12:04', '2023-05-05 03:12:04'),
('f8314091-eb19-408e-951f-75c683950026', 'adnan', 'adnan@cefalo.com', '$2b$10$DYiNbtbBeam/0apQHiBLgOVji2pHvr4N/H/.euvAdBSyjFhc6NrPm', '2023-05-05 03:33:57', '2023-05-05 03:33:57');

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
