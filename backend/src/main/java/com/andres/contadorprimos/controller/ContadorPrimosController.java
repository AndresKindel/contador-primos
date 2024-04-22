package com.andres.contadorprimos.controller;

import com.andres.contadorprimos.resposta.Resposta;
import com.andres.contadorprimos.resposta.RespostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContadorPrimosController {

    private final RespostaRepository respostaRepository;

    @Autowired
    public ContadorPrimosController(RespostaRepository respostaRepository) {
        this.respostaRepository = respostaRepository;
    }

    public Resposta adicionarResposta(@RequestBody Resposta resposta) {
        return respostaRepository.save(resposta);
    }

    @DeleteMapping("/respostas")
    public void limparHistorico() {
        respostaRepository.deleteAll();
    }

    @GetMapping("/contarPrimos")
    public Resposta getNumeroPrimos(@RequestParam("n") int n) {
        long tempoInicial = System.currentTimeMillis();
        int resultado = contarPrimos(n);
        long tempoFinal = System.currentTimeMillis();
        long tempoCalculo = tempoFinal - tempoInicial;
        Resposta resposta = new Resposta(n, resultado, tempoCalculo);
        adicionarResposta(resposta);
        return resposta;
    }

    @GetMapping("/respostas")
    public List<Resposta> getTodos() {
        return respostaRepository.findAll();
    }

    public int contarPrimos(int n) {
        int contador = 0;
        for (int i = 2; i <= n; i++) {
            if (ehPrimo(i)) {
                contador++;
            }
        }
        return contador;
    }

    public boolean ehPrimo(int n) {
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
