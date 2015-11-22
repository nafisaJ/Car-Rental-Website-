-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 15, 2013 at 09:54 AM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cr`
--

-- --------------------------------------------------------

--
-- Table structure for table `car_details`
--

CREATE TABLE IF NOT EXISTS `car_details` (
  `c_id` int(11) NOT NULL,
  `tot` int(11) NOT NULL,
  `booked_count` int(11) NOT NULL,
  `car_type` varchar(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `car_details`
--

INSERT INTO `car_details` (`c_id`, `tot`, `booked_count`, `car_type`) VALUES
(1, 18, 2, 'Model1'),
(2, 8, 1, 'Model2'),
(3, 10, 0, 'Model3');

-- --------------------------------------------------------

--
-- Table structure for table `car_rent`
--

CREATE TABLE IF NOT EXISTS `car_rent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `p_loc` varchar(20) NOT NULL,
  `p_date` varchar(20) NOT NULL,
  `p_time` varchar(20) NOT NULL,
  `d_date` varchar(20) NOT NULL,
  `d_time` varchar(20) NOT NULL,
  `car_type` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `car_rent`
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
