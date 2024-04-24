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
        if (n < 2) {
            return 0;
        }
        boolean[] ehPrimo = new boolean[n + 1];
        for (int i = 2; i <= n; i++) {
            ehPrimo[i] = true;
        }

        for (int p = 2; p * p <= n; p++) {
            if (ehPrimo[p]) {
                for (int i = p * p; i <= n; i += p) {
                    ehPrimo[i] = false;
                }
            }
        }

        int contador = 0;
        for (int i = 2; i <= n; i++) {
            if (ehPrimo[i]) {
                contador++;
            }
        }

        return contador;
    }

    public boolean ehPrimo(int n) {
        if (n <= 1) {
            return false;
        }
        if (n <= 3) {
            return true;
        }
        if (n % 2 == 0 || n % 3 == 0) {
            return false;
        }
        int limite = (int) Math.sqrt(n);
        for (int i = 5; i <= limite; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }

}
