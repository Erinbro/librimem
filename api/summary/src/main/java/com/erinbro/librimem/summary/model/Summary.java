package com.erinbro.librimem.summary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Summary")
@Table(name = "summary")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Summary {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Integer id;
    private String type;

}
