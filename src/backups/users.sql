-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2023 at 06:58 AM
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
('17863d6a-586c-40bb-813a-c93cc06789a9', 'arif', 'arif@cefalo.com', '$2b$10$hxO8XhqAV9/5rF0HTWNVS.O1yow2uXBDqjKql4XOS7pjsQTmEOmDu', '2023-05-15 02:40:58', '2023-05-15 02:40:58'),
('2bc3957d-a924-4797-8939-cfb3450f72e3', 'bashir', 'bashir@cefalo.com', '$2b$10$inwU6YQP5TXUOdmvXW58.uU1z.W0SStnBzV/GTzgaIofDYsgETxFu', '2023-05-15 02:46:11', '2023-05-15 02:46:11'),
('2ed99fff-e742-4a26-b840-c2a7248f351a', 'rakib', 'rakib@cefalo.com', '$2b$10$MGLWOJD8UFvADj7rI2kHWuWIUgHeF78PCACFDd0nrP2X/xHFc8Qg2', '2023-03-31 05:04:01', '2023-05-05 04:51:37'),
('63334c2a-9767-4ebc-9f64-29d327e918ff', 'tahmid', 'tahmid@cefalo.com', '$2b$10$HwLgGEUK.oL28OE1vYGAn.dX1JVHh5IsmbvPx99eKnYjNcL7/gZRe', '2023-04-04 01:55:22', '2023-04-04 01:55:22'),
('76fcf668-2421-4ec6-9c33-b136d4d5213d', 'ranak', 'ranak@cefalo.com', '$2b$10$qpqwB2QHr6hhSk8DcPs/h.LHzXHdjMGPwhAbATaIOtTlGJZIzuHHu', '2023-04-18 06:41:26', '2023-04-18 06:41:26'),
('7b637ade-3e8f-4501-bbeb-fce2ae703e1f', 'adnan', 'adnan@cefalo.com', '$2b$10$rvYKSPEtRGHrzSkGxp5R0eKQvCU3sXbGZ5NtQiglWmb/8u/CM5azu', '2023-05-15 03:06:16', '2023-05-15 03:06:16'),
('94fcccba-47b4-4441-8c22-073f6b7d9175', 'shafiq', 'shafiq@cefalo.com', '$2b$10$mSOl2UjvaXVOVI4G9W5kjOVShWOMn4DRf.hWNhXSu3p5kUyAuDiJu', '2023-05-15 05:12:34', '2023-05-15 05:12:34'),
('985f441e-de46-47aa-8f7d-74d28d9e11a2', 'tasmia', 'tasmia@cefalo.com', '$2b$10$tpHgaFeSDMgQKLgxqN23XerSprT1BIMn1SeXKWITxmaZqaSUt3nMG', '2023-04-26 03:36:55', '2023-04-26 03:36:55'),
('9a0dfb08-a302-4d63-b855-972661b503af', 'turja', 'turja@cefalo.com', '$2b$10$35pdG7/RIyNAt/7WsLCbP.wX/MeGX4y9aXfOtroJE1ihqBLtwyNhu', '2023-04-28 02:47:44', '2023-04-28 02:47:44'),
('9e4d62f4-cef2-48d5-891f-a880d862946b', 'jitesh', 'jitesh@cefalo.com', '$2b$10$FRLLJkQkzjUnHGphZ8MdMuYP7SPqcukcvW6fk18IFXgCfznXNhm2C', '2023-05-15 05:16:49', '2023-05-15 05:16:49'),
('a41c8259-f65c-4990-934d-c0ddcc3ae2ac', 'ryan', 'ryan@cefalo.com', '$2b$10$yh5NH/4GKMT2Jmbrd2ciMuGqDs2y.hgsrF1JjODq2xjQxks81WOKe', '2023-05-03 10:18:24', '2023-05-03 10:18:24'),
('a72d26e5-c36d-4351-993e-43491a3ad017', 'trofder', 'trofder@cefalo.com', '$2b$10$71HpkaVwcxsVBqUr8YmW2./ISYOPoFqg2JBwxVs0FSEac8CewXlJC', '2023-04-18 06:19:09', '2023-04-18 06:19:09'),
('acd6f5ae-5c57-47aa-996d-5a877f9bf0fb', 'tahmeed', 'tahmeed@cefalo.com', '$2b$10$utnwOW1SSLJGdf9OeV2oz.YeHv2FUXX7h6av2hWgpLjkm7o.iO/xq', '2023-04-03 02:29:44', '2023-04-03 02:29:44'),
('cc798387-4081-4924-9645-06f6fb459f08', 'fuad', 'fuad@cefalo.com', '$2b$10$EnVIxZxHUPneFzjNsJHVCeibCt3wZcozss68PIeWf/F.81FKljZJe', '2023-05-05 03:12:04', '2023-05-05 03:12:04'),
('d940ae64-5c29-470d-881f-4bb64a8aa450', 'shoaib', 'shoaib@cefalo.com', '$2b$10$JzuhF/Q1OuSa11gh7WG/9.TMtqzRpGn8HqrJogZf8wMzLwsQ.9GzS', '2023-05-15 02:49:52', '2023-05-15 02:49:52');

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
