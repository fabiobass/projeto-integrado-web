package com.code.like.cesmac.dto;

import java.io.Serializable;
import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.code.like.cesmac.entities.Event;

public class EventDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank(message = "Campo requerido")
	private String name;

	//@FutureOrPresent(message = "A data do evento não pode ser passada")
	private LocalDate date;
	private String imgUrl;

	public EventDTO() {
	}

	public EventDTO(Long id, String name, LocalDate date, String imgUrl) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.imgUrl = imgUrl;
	}

	public EventDTO(Event entity) {
		id = entity.getId();
		name = entity.getName();
		date = entity.getDate();
		imgUrl = entity.getImgUrl();

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

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

}
