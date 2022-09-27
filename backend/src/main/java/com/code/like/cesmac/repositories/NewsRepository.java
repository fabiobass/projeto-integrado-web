package com.code.like.cesmac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.code.like.cesmac.entities.News;

public interface NewsRepository extends JpaRepository<News, Long>{

}
