package com.andres.contadorprimos.resposta;

import jakarta.persistence.*;

import java.beans.ConstructorProperties;

@Entity
@Table(name = "pessoa")
public class Resposta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "numero")
    private int numero;

    @Column(name = "contagem_primos")
    private int contagemPrimos;

    @Column(name = "tempo_calculo")
    private long tempoCalculo;

    public Resposta() {
    }

    @ConstructorProperties({"numero", "contagemPrimos", "tempoCalculo"})
    public Resposta(int numero, int contagemPrimos, long tempoCalculo) {
        this.numero = numero;
        this.contagemPrimos = contagemPrimos;
        this.tempoCalculo = tempoCalculo;
    }

    public Long getId() {
        return id;
    }
    public int getNumero() {
        return numero;
    }

    public int getContagemPrimos() {
        return contagemPrimos;
    }

    public long getTempoCalculo() {
        return tempoCalculo;
    }
}
