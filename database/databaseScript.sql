/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  tomekwojnar
 * Created: Mar 13, 2018
 */

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ticket
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ticket
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ticket` DEFAULT CHARACTER SET utf8 ;
USE `ticket` ;

-- -----------------------------------------------------
-- Table `ticket`.`tickets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ticket`.`tickets` (
  `ticket_id` INT(11) NOT NULL,
  `ticket_title` VARCHAR(45) NULL DEFAULT NULL,
  `ticket_category` VARCHAR(45) NULL DEFAULT NULL,
  `ticket_description` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ticket_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


