package com.wecp.medicalequipmentandtrackingsystem.repository;


import com.wecp.medicalequipmentandtrackingsystem.entitiy.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface EquipmentRepository extends JpaRepository<Equipment,Long>{
    List<Equipment> findHospitalById(Long HospitalId);
}
