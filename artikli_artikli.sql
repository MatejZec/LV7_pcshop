-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: artikli
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artikli`
--

DROP TABLE IF EXISTS `artikli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artikli` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `Proizvodac` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `Model` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `Cijena` float NOT NULL,
  `Kolicina` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artikli`
--

LOCK TABLES `artikli` WRITE;
/*!40000 ALTER TABLE `artikli` DISABLE KEYS */;
INSERT INTO `artikli` VALUES (1,'Procesor','AMD','Ryzen 7 5600X',1499.99,3),(2,'USB','Seagate','F10',123.99,13),(3,'Monitor','AOC','Q32',2229.99,3),(4,'Tipkovnica','Logitech','Hyper 9',179.99,20),(5,'Mis','Trust','GxT25',125.99,15),(6,'Mobitel','Apple','iPhone 12',6999.99,5),(7,'Sat','Casio','Illuminator',859.99,3);
/*!40000 ALTER TABLE `artikli` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-21 20:46:46
