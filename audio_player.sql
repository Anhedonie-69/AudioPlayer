-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 13, 2026 at 01:30 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `audio_player`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `artist_id` int NOT NULL,
  `cover_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `title`, `artist_id`, `cover_url`, `created_at`) VALUES
(1, 'Babylon By Bus', 1, 'uploads/covers/babylon_by_bus_bob_marley.jpg', '2026-03-09 12:20:06'),
(2, 'Crossroad', 2, 'uploads/covers/bon_jovi_cross_road.jpg', '2026-03-09 11:58:41');

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int NOT NULL,
  `artist_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `artist_name`, `created_at`) VALUES
(1, 'Bob Marley', '2026-03-09 11:56:53'),
(2, 'Bon Jovi', '2026-03-09 11:56:53');

-- --------------------------------------------------------

--
-- Table structure for table `artist_song`
--

CREATE TABLE `artist_song` (
  `song_id` int NOT NULL,
  `artist_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `song_id` int NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `song_id`, `content`, `created_at`) VALUES
(1, 3, 'Quelle chanson !', '2026-03-10 14:05:50'),
(2, 3, 'J\'adore !', '2026-03-10 14:14:20'),
(3, 29, 'Com', '2026-03-11 09:37:50'),
(4, 29, 'Deuxième com', '2026-03-11 09:38:12'),
(5, 1, 'Quel tube', '2026-03-12 09:34:04'),
(6, 29, 'Troisième commentaire un petit peu plus long pour tester le visuel.', '2026-03-13 10:52:04'),
(7, 29, 'Quatrième commentaire car je veux pouvoir encore tester.', '2026-03-13 10:53:20'),
(8, 29, 'Cinquième commentaire :) Oui j\'en met plusieurs.', '2026-03-13 10:53:43'),
(9, 29, 'Et j\'enchaine avec le sixième !!', '2026-03-13 10:54:03'),
(10, 29, 'Septième !!', '2026-03-13 10:54:15'),
(11, 29, 'Et de huit', '2026-03-13 10:55:41'),
(12, 29, '9', '2026-03-13 10:55:59'),
(13, 29, 'Et de 10 !!!', '2026-03-13 12:21:48'),
(14, 29, '11 !!!', '2026-03-13 12:22:39'),
(15, 29, 'Et pis 12 qui devrait être suffisant.', '2026-03-13 12:23:09');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` int NOT NULL,
  `album_id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `file_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `duration` int NOT NULL,
  `track_number` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `album_id`, `title`, `file_url`, `duration`, `track_number`, `created_at`) VALUES
(1, 1, 'Positive Vibration', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 01 Positive Vibration.mp3', 349000, 1, '2026-03-09 13:48:53'),
(2, 1, 'Punky Reggae Party', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 02 Punky Reggae Party.mp3', 350000, 2, '2026-03-09 13:48:53'),
(3, 1, 'Exodus', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 03 Exodus.mp3', 459000, 3, '2026-03-09 13:48:53'),
(4, 1, 'Stir it Up', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 04 Stir It Up.mp3', 320000, 4, '2026-03-09 13:48:53'),
(5, 1, 'Rat Race', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 05 Rat Race.mp3', 218000, 5, '2026-03-09 13:48:53'),
(6, 1, 'Concrete Jungle', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 06 Concrete Jungle.mp3', 339000, 6, '2026-03-09 13:48:53'),
(7, 1, 'Kinky Reggae', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 07 Kinky Reggae.mp3', 288000, 7, '2026-03-09 13:48:53'),
(8, 1, 'Lively Up Yourself', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 08 Lively Up Yourself.mp3', 380000, 8, '2026-03-09 13:48:53'),
(9, 1, 'Rebel Music', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 09 Rebel Music (3 O\'clock Road Block).mp3', 323000, 9, '2026-03-09 13:48:53'),
(10, 1, 'War - No More Trouble', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 10 War - No More Trouble.mp3', 329000, 10, '2026-03-09 13:48:53'),
(11, 1, 'Is This Love', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 11 Is This Love.mp3', 450000, 11, '2026-03-09 13:48:53'),
(12, 1, 'The Heathen', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 12 The Heathen.mp3', 269000, 12, '2026-03-09 13:48:53'),
(13, 1, 'Jamming', 'uploads\\songs\\babylon_by_bus_bob_marley\\Bob Marley - Babylon By Bus - 13 Jamming.mp3', 345000, 13, '2026-03-09 13:48:53'),
(29, 2, 'Livin On A Prayer', 'uploads\\songs\\bon_jovi_crossroad\\01-bon_jovi_-_livin_on_a_prayer-sqr.mp3', 231000, 1, '2026-03-09 14:15:32'),
(30, 2, 'Keep The Faith', 'uploads\\songs\\bon_jovi_crossroad\\02-bon_jovi_-_keep_the_faith-sqr.mp3', 344000, 2, '2026-03-09 14:15:32'),
(31, 2, 'Someday I\'ll Be Saturday Night', 'uploads\\songs\\bon_jovi_crossroad\\03-bon_jovi_-_someday_ill_be_saturday_night-sqr.mp3', 279000, 3, '2026-03-09 14:15:32'),
(32, 2, 'Always', 'uploads\\songs\\bon_jovi_crossroad\\04-bon_jovi_-_always-sqr.mp3', 353000, 4, '2026-03-09 14:15:32'),
(33, 2, 'Wanted Dead or Alive', 'uploads\\songs\\bon_jovi_crossroad\\05-bon_jovi_-_wanted_dead_or_alive-sqr.mp3', 307000, 5, '2026-03-09 14:15:32'),
(34, 2, 'Lay Your Hands On Me', 'uploads\\songs\\bon_jovi_crossroad\\06-bon_jovi_-_lay_your_hands_on_me-sqr.mp3', 358000, 6, '2026-03-09 14:15:32'),
(35, 2, 'You Give Love a Bad Name', 'uploads\\songs\\bon_jovi_crossroad\\07-bon_jovi_-_you_give_love_a_bad_name-sqr.mp3', 224000, 7, '2026-03-09 14:15:32'),
(36, 2, 'Bed of Roses', 'uploads\\songs\\bon_jovi_crossroad\\08-bon_jovi_-_bed_of_roses-sqr.mp3', 395000, 8, '2026-03-09 14:15:32'),
(37, 2, 'Blaze of Glory', 'uploads\\songs\\bon_jovi_crossroad\\09-bon_jovi_-_blaze_of_glory-sqr.mp3', 340000, 9, '2026-03-09 14:15:32'),
(38, 2, 'In These Arms', 'uploads\\songs\\bon_jovi_crossroad\\10-bon_jovi_-_in_these_arms-sqr.mp3', 319000, 10, '2026-03-09 14:15:32'),
(39, 2, 'Bad Medecine', 'uploads\\songs\\bon_jovi_crossroad\\11-bon_jovi_-_bad_medicine-sqr.mp3', 316000, 11, '2026-03-09 14:15:32'),
(40, 2, 'I\'ll be There For You', 'uploads\\songs\\bon_jovi_crossroad\\12-bon_jovi_-_ill_be_there_for_you-sqr.mp3', 341000, 12, '2026-03-09 14:15:32'),
(41, 2, 'In And Out of Love', 'uploads\\songs\\bon_jovi_crossroad\\13-bon_jovi_-_in_and_out_of_love-sqr.mp3', 267000, 13, '2026-03-09 14:15:32'),
(42, 2, 'Runaway', 'uploads\\songs\\bon_jovi_crossroad\\14-bon_jovi_-_runaway-sqr.mp3', 232000, 14, '2026-03-09 14:15:32'),
(43, 2, 'Never Say Goodbye', 'uploads\\songs\\bon_jovi_crossroad\\15-bon_jovi_-_never_say_goodbye-sqr.mp3', 291000, 15, '2026-03-09 14:15:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `get_artist` (`artist_id`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artist_song`
--
ALTER TABLE `artist_song`
  ADD KEY `get_artist_id` (`artist_id`),
  ADD KEY `get_song_id` (`song_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `get_song` (`song_id`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `get_album_id` (`album_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `get_artist` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `artist_song`
--
ALTER TABLE `artist_song`
  ADD CONSTRAINT `get_artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `get_song_id` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `get_song` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `get_album_id` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
