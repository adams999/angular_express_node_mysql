-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2021 a las 21:38:02
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_angular_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `test`
--

CREATE TABLE `test` (
  `test_id` int(11) NOT NULL,
  `test_name` varchar(100) NOT NULL,
  `test_email` varchar(50) NOT NULL,
  `test_edad` int(3) NOT NULL,
  `test_est` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `test`
--

INSERT INTO `test` (`test_id`, `test_name`, `test_email`, `test_edad`, `test_est`) VALUES
(1, 'asdad', 'asd', 1, 1),
(2, 'data dev', 'dev@gmail.com', 2, 1),
(3, 'Adams Contreras', 'Adamspurry@gmail.com', 22, 1),
(4, 'Juhantonny Contreras', 'test_@gmail.com', 33, 1),
(5, 'PC', 'pcemail@gmail.com', 12, 1),
(6, 'laptop', 'laptop@gmail.com', 34, 1),
(7, 'PC', 'pcemail@gmail.com', 65, 1),
(8, 'laptop', 'laptop@gmail.com', 66, 1),
(9, 'data dev', 'dev@gmail.com', 45, 1),
(10, 'Dev', 'test_Adams@gmail.com', 45, 1),
(12, 'Dev', 'test_Adams@gmail.com', 21, 1),
(13, 'adams', 'gmail@gmail.com', 35, 1),
(14, 'adams', 'gmail.com', 25, 0),
(15, 'dev', '123123@gmail.com', 3, 1),
(16, 'Johara', 'pabon@gmail.com', 26, 1),
(17, 'Johara', 'pabon@gmail.com', 26, 1),
(18, 'Johara', 'pabon@gmail.com', 26, 1),
(19, 'dev', 'dev', 12, 1),
(20, 'dev', 'dev', 12, 1),
(21, 'dev', 'dev@gmail.com', 3, 1),
(22, 'testt', 'gmail.com', 12, 1),
(23, 'tesdw221', 'test@gmail.com', 23, 1),
(24, 'asdasd', 'adasd', 0, 1),
(25, 'adsasd', 'adasd', 0, 1),
(26, 'Prueba2', 'prueba@gmail.com', 23, 1),
(27, 'adams2', 'adams@gmail.com', 23, 1),
(28, 'test123', 'test123', 27, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`test_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `test`
--
ALTER TABLE `test`
  MODIFY `test_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
