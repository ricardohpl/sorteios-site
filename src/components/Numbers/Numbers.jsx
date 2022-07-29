import React, { useEffect, useState } from 'react'
import { StyledNumbers } from './StyledNumbers'
import { Container } from '../styles/Container.styled'
import { StyledButton } from '../styles/StyledButton'

import generateNumbers from '../../core/generateNumbers'
import Modal from '../Modal/Modal'
import Logo from '../Logo/Logo'

import BubblesContainer from '../Animations/BubblesContainer'
import BgAnimation from '../Animations/BgAnimation'
import Results from '../Results/Results'
import Counter from '../Counter/Counter'


const Numbers = () => {

    const [quantity, setQuantity] = useState(6)
    const [numIni, setNumIni] = useState(1)
    const [numEnd, setNumEnd] = useState(60)

    const [numbers, setNumbers] = useState(0)
    const [modal, setModal] = useState('none')
    const [loading, setLoading] = useState(true)
    const [render, setRender] = useState(false)
    const [count, setCount] = useState(0)
    const [doCount, setDoCount] = useState(false)
    const [idTimeOut, setIdTimeOut] = useState(0)

    const [allResults, setAllResults] = useState(false)
    const [animations, setAnimations] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            if (modal === 'flex') { setLoading(false) }
        }, [1450])
    }, [modal])

    useEffect(() => {
        if (quantity <= 0) { handleQuantity(1) }
        else { handleQuantity(quantity) }
    }, [numIni, numEnd])

    useEffect(() => {
        clearTimeout(idTimeOut)
        if (doCount) { runCount(count) }
    }, [doCount])

    const handleCount = (numCount) => {
        if (numCount > 0) {
            setCount(current => current - 1)
            runCount(numCount - 1)
        }
    }

    const runCount = (numCount) => {
        let interval
        if (numCount > 0) {
            interval = setTimeout(() => {
                handleCount(numCount)
            }, [1075])
            setIdTimeOut(interval)
        }
        if (numCount === 0) {
            setRender(true)
            setDoCount(false)
        }
    }

    const handleNumbersIni = (number) => {
        if (number >= 999999999) { number = 999999999 }
        setNumIni(+number)
    }

    const minNumbersIni = (number) => {
        if (number >= numEnd) { number = numEnd }
        if (number < 1) { number = 1 }
        setNumIni(+number)
    }

    const handleNumbersEnd = (number) => {
        if (number >= 999999999) { number = 999999999 }
        setNumEnd(+number)
    }

    const minNumbersEnd = (number) => {
        if (number <= numIni) { number = numIni }
        if (number < 1) { number = 1 }
        setNumEnd(+number)
    }

    const handleQuantity = (number) => {
        let total = (numEnd - numIni) + 1
        // if (number <= 1) { number = 1 }
        if (number >= total) { number = total }
        if (number >= 9999) { number = 9999 }
        setQuantity(+number)
    }

    const minQuantity = (number) => {
        if (number < 1) { number = 1 }
        setQuantity(+number)

    }


    const handleAllResults = () => {
        setAllResults(current => !current)
    }

    const handleAnimations = () => {
        setAnimations(current => !current)
    }

    const runLottery = (numIni, numEnd) => {
        if (animations) { setCount(6) }
        setNumbers(generateNumbers(quantity, numIni, numEnd))
        setRender(false)
        setDoCount(true)
        setModal('flex')
    }

    const closeModal = () => {
        setModal('none')
        setCount(0)
        setLoading(true)
        setRender(false)
        setDoCount(false)
        clearTimeout(idTimeOut)
    }


    return (
        <StyledNumbers>
            <div className='center'>
                <Container w='80%' h='85%' minW='480px' minH='550px'>
                    <h2 className='title'>NÚMEROS</h2>
                    <div className='numbers'>
                        <label className='numbersLabel' htmlFor="numbersIni">Número Inicial: </label>
                        <input
                            className='numberArea input'
                            type="number" required value={numIni} 
                            onBlur={e => minNumbersIni(+e.target.value)}
                            onChange={e => handleNumbersIni(+e.target.value)}
                        />
                        <label className='labelHelp' >Número inicial não pode ser maior que número final, mínimo é 1.</label>
                        <label className='labelHelp' >Máximo 9 dígitos.</label>
                    </div>
                    <div className='numbers'>
                        <label className='numbersLabel' htmlFor="numbersEnd">Número Final: </label>
                        <input
                            className='numberArea input'
                            type="number" value={numEnd} 
                            onBlur={e => minNumbersEnd(+e.target.value)}
                            onChange={e => handleNumbersEnd(+e.target.value)}
                        />
                        <label className='labelHelp' >Número final não pode ser menor que número inicial, mínimo é 1.</label>
                    </div>
                    <div className='numbers'>
                        <label className='numbersLabel quantity' htmlFor="numbersLabel">Números Sorteados: </label>
                        <input
                            className='numberArea input'
                            type="number" value={quantity}
                            onBlur={(e) => minQuantity(+e.target.value)}
                            onChange={e => handleQuantity(+e.target.value)}
                            max={numEnd}
                        />
                        <label className='labelHelp' >Mínimo é 1 e máximo é baseado nos números selecionados <br /> (máximo 4 dígitos).</label>
                    </div>
                    <div>
                        <input className='checkbox' type="checkbox" name='allResults' checked={allResults} onChange={() => handleAllResults()} />
                        <label className='checkboxLable' onClick={() => handleAllResults()}>Visualizar os resultados todos de uma vez</label>
                    </div>
                    <div>
                        <input className='checkbox' type="checkbox" name='animations' checked={animations} onChange={() => handleAnimations()} />
                        <label className='checkboxLable' onClick={() => handleAnimations()}>Contagem regressiva</label>
                    </div>
                    <StyledButton onClick={() => runLottery(numIni, numEnd)} >Realizar Sorteio</StyledButton>
                </Container>
            </div>

            <Modal display={modal} >
                {
                    loading ?
                        <div className="loading"> Carregando... </div>
                        :
                        <>
                            <div id='animateContainer'>
                                <BgAnimation />
                                <BubblesContainer />
                            </div>
                            <div className='modal' >
                                <Logo className='logoModalName' />
                                {
                                    render ?
                                        <>
                                            <Results allResults={allResults} dates={numbers} />
                                        </>
                                        :
                                        <div className='center'>
                                            <Counter count={count} />
                                        </div>
                                }
                                <button className='botaoFechar' onClick={() => closeModal()} > X </button>
                                <div>
                                    <StyledButton onClick={() => closeModal()} > Sair </StyledButton>
                                </div>
                            </div>
                        </>
                }
            </Modal>
        </StyledNumbers>
    )
}

export default Numbers