package com.code.like.cesmac.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.code.like.cesmac.dto.NewsDTO;
import com.code.like.cesmac.entities.News;
import com.code.like.cesmac.repositories.NewsRepository;
import com.code.like.cesmac.services.exceptions.DatabaseException;
import com.code.like.cesmac.services.exceptions.ResourceNotFoundException;

@Service
public class NewsService {

	@Autowired
	private NewsRepository repository;

	@Transactional(readOnly = true)
	public Page<NewsDTO> findAll(Pageable pageable) {
		Page<News> page = repository.findAll(pageable);
		return page.map(x -> new NewsDTO(x));
	}

	@Transactional(readOnly = true)
	public NewsDTO findById(Long id) {
		Optional<News> obj = repository.findById(id);
		News entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada"));
		return new NewsDTO(entity);
	}

	@Transactional
	public NewsDTO insert(NewsDTO dto) {
		News entity = new News();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new NewsDTO(entity);
	}

	@Transactional
	public NewsDTO update(Long id, NewsDTO dto) {
		try {
			News entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new NewsDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("id não encontrado" + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("id não encontrado " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade");
		}

	}

	public void copyDtoToEntity(NewsDTO dto, News entity) {

		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		entity.setUrl(dto.getUrl());

	}

}
