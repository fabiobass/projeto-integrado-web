package com.code.like.cesmac.dto;

import java.io.Serializable;

import com.code.like.cesmac.entities.News;

public class NewsDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String description;
	private String url;

	public NewsDTO() {

	}

	public NewsDTO(Long id, String name, String description, String url) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.url = url;
	}

	public NewsDTO(News entity) {
		id = entity.getId();
		name = entity.getName();
		description = entity.getDescription();
		url = entity.getUrl();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
