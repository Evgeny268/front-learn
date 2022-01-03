import React, {useState} from 'react';
import "./style.scss";

type CalculatorBtn = "1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"0"|"+"|"-"|"*"|"/"|"C"|"=";

const Calculator = () => {

    const [result, setResult] = useState("");

    const onButtonClick = (btn: CalculatorBtn) => {
        navigator.vibrate(5)
        if (btn === "C") {
            setResult("");
        } else {
            setResult(result + btn)
        }
    }

    return (
        <div>
            <div className="appWindow">
                <div className="resultWindow">
                    <p className="resultText">{result}</p>
                </div>
                <div style={{height: 15}}/>
                <div className="buttonsArea">
                    <div className="buttonsRow">
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("1")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">1</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("2")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">2</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("3")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">3</span>
                        </button>
                        <button className="calcButtonOperation calcButton" onClick={() => onButtonClick("+")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">+</span>
                        </button>
                    </div>
                    <div className="buttonsRow">
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("4")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">4</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("5")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">5</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("6")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">6</span>
                        </button>
                        <button className="calcButtonOperation calcButton" onClick={() => onButtonClick("-")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">-</span>
                        </button>
                    </div>
                    <div className="buttonsRow">
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("7")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">7</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("8")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">8</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("9")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">9</span>
                        </button>
                        <button className="calcButtonOperation calcButton" onClick={() => onButtonClick("/")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">/</span>
                        </button>
                    </div>
                    <div className="buttonsRow">
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("*")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">*</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("0")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">0</span>
                        </button>
                        <button className="calcButtonDigit calcButton" onClick={() => onButtonClick("C")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">C</span>
                        </button>
                        <button className="calcButtonOperation calcButton" onClick={() => onButtonClick("=")}>
                            <span className="calcButton__height"/>
                            <span className="calcButton__content">=</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Calculator;