package org.doit.wscalcconverter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalcController {

    //
    //  Number theory
    @GetMapping("/prime-factors")
    public String primeFactors(){
        return "calc/numberTheory/primeFactors";
    }
    @GetMapping("/hcf")
    public String hcf(){
        return "calc/numberTheory/hcf";
    }
    @GetMapping("/lcm")
    public String lcm(){
        return "calc/numberTheory/lcm";
    }


    //
    //  Roots, Power, Logarithms
    @GetMapping("/power")
    public String degree(){
        return "calc/roots-power-logarithms/power";
    }


    //
    //  Fractions, Percentages
    @GetMapping("/reduction-fraction")
    public String reductionFraction(){
        return "calc/fractions-percentages/reductionFractions";
    }
    @GetMapping("/common-denominator")
    public String commonDenominator(){
        return "calc/fractions-percentages/commonDenominator";
    }


    //
    //  Trigonometry
    @GetMapping("/trigonometry")
    public String trigonometry() {
        return "calc/trigonometry/trigonometry";
    }
}
