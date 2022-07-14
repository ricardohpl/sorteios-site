import React, { useEffect, useState } from 'react'
import { StyledNumbers } from './StyledNumbers'
import { Container } from '../styles/Container.styled'
import { StyledButton } from '../styles/StyledButton'

import gerarNumeros from '../../core/gerarNumeros'
import Modal from '../Modal/Modal'
import Logo from '../Logo/Logo'

import { Bubbles } from './StyledNumbers'

// import video from '../../assets/video/pexels-cottonbro-cutted.mp4'

const Numbers = () => {

    const [qtde, setQtde] = useState(6)
    const [numIni, setNumIni] = useState(1)
    const [numEnd, setNumEnd] = useState(60)

    const [numeros, setNumeros] = useState(0)
    const [modal, setModal] = useState('none')
    const [loading, setLoading] = useState(true)
    const [render, setRender] = useState(false)
    const [count, setCount] = useState(0)
    const [doCount, setDoCount] = useState(false)
    const [idTimeOut, setIdTimeOut] = useState(0)


    useEffect(() => {
        setTimeout(() => {
            if (modal === 'flex') { setLoading(false) }
        }, [1450])
    }, [modal])

    useEffect(() => {
        handleQuantity(qtde)
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
            }, [1150])
            setIdTimeOut(interval)
        }
        if (numCount === 0) {
            setRender(true)
            setDoCount(false)
        }
        console.log(numCount, count)
    }

    const handleNumbersIni = (number) => {
        if (number >= numEnd) { number = numEnd }
        if (number <= 1) { number = 1 }
        setNumIni(+number)
    }

    const handleNumbersEnd = (number) => {
        if (number <= numIni) { number = numIni }
        setNumEnd(+number)
    }

    const handleQuantity = (number) => {
        let total = (numEnd - numIni) + 1
        if (number <= 1) { number = 1 }
        if (number >= total) { number = total }
        setQtde(+number)
    }

    const runLottery = (numIni, numEnd) => {
        setCount(6)
        setNumeros(gerarNumeros(qtde, numIni, numEnd))
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
                <Container w='80%' h='85%' minW='525px'>
                    <h2 className='title'>NÚMEROS</h2>
                    <div className='numbers'>
                        <label className='numbersLabel' htmlFor="numbersIni">Número Inicial: </label>
                        <input
                            className='numberArea input'
                            type="number" required value={numIni} onChange={e => handleNumbersIni(+e.target.value)}
                        />
                    </div>
                    <div className='numbers'>
                        <label className='numbersLabel' htmlFor="numbersEnd">Número Final: </label>
                        <input
                            className='numberArea input'
                            type="number" value={numEnd} onChange={e => handleNumbersEnd(+e.target.value)}
                        />
                    </div>
                    <div className='numbers'>
                        <label className='numbersLabel' htmlFor="numbersLabel">Quantidade de Números Sorteados: </label>
                        <input
                            className='numberArea input'
                            type="number" value={qtde} onChange={e => handleQuantity(+e.target.value)}
                            max={numEnd}
                        />
                        <label className='labelHelp' >Mínimo é 1 e máximo é baseado nos números selecionados.</label>
                    </div>
                    <div>
                        <input className='checkbox' type="checkbox" name='allResults'></input> <label>Visualizar os resultados todos de uma vez</label>
                    </div>
                    <div>
                        <input className='checkbox' type="checkbox" name='animations' /><label>Animação com contagem regressiva</label>
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
                                <div className="squareContainers">
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                    <div className="square"></div>
                                </div>
                                <div className='bubbleContainer'>
                                    <div className="bubbles">
                                        <Bubbles var='11' />
                                        <Bubbles var='20' />
                                        <Bubbles var='13' />
                                        <Bubbles var='18' />
                                        <Bubbles var='25' />
                                        <Bubbles var='17' />
                                        <Bubbles var='14' />
                                        <Bubbles var='22' />
                                        <Bubbles var='12' />
                                        <Bubbles var='9' />
                                        <Bubbles var='27' />
                                        <Bubbles var='19' />
                                        <Bubbles var='23' />
                                        <Bubbles var='16' />
                                        <Bubbles var='30' />
                                        <Bubbles var='24' />
                                        <Bubbles var='15' />
                                        <Bubbles var='25' />
                                        <Bubbles var='21' />
                                        <Bubbles var='10' />
                                        <Bubbles var='17' />
                                        <Bubbles var='6' />
                                        <Bubbles var='26' />
                                        <Bubbles var='16' />
                                        <Bubbles var='15' />
                                        <Bubbles var='27' />
                                        <Bubbles var='14' />
                                        <Bubbles var='11' />
                                        <Bubbles var='19' />
                                        <Bubbles var='20' />
                                        <Bubbles var='13' />
                                        <Bubbles var='18' />
                                        <Bubbles var='25' />
                                        <Bubbles var='14' />
                                        <Bubbles var='22' />
                                        <Bubbles var='12' />
                                        <Bubbles var='8' />
                                        <Bubbles var='27' />
                                        <Bubbles var='19' />
                                        <Bubbles var='23' />
                                        <Bubbles var='16' />
                                        <Bubbles var='30' />
                                        <Bubbles var='24' />
                                        <Bubbles var='25' />
                                        <Bubbles var='21' />
                                        <Bubbles var='10' />
                                        <Bubbles var='17' />
                                        <Bubbles var='26' />
                                        <Bubbles var='11' />
                                        <Bubbles var='19' />
                                        <Bubbles var='19' />
                                        <Bubbles var='23' />
                                        <Bubbles var='7' />
                                        <Bubbles var='16' />
                                        <Bubbles var='30' />
                                        <Bubbles var='24' />
                                        <Bubbles var='15' />
                                        <Bubbles var='25' />
                                        <Bubbles var='15' />
                                        <Bubbles var='27' />
                                        <Bubbles var='14' />
                                        <Bubbles var='11' />
                                        <Bubbles var='19' />
                                        <Bubbles var='26' />
                                    </div>
                                </div>
                            </div>
                            <div className='modal' >
                                <Logo className='logoModalName' />
                                {
                                    render ?
                                        <>
                                            <p className='text'> Resultado: </p>
                                            <div className='results' >
                                                <span></span>
                                                <h3 className='displayNumbers'>
                                                    {numeros.join(' - ')}
                                                </h3>
                                            </div>
                                        </>
                                        :
                                        <div className='center'>
                                            <div className='countContainer'>
                                                <span></span>
                                                <h3 className='displayCount'> {count} </h3>
                                            </div>
                                        </div>
                                }
                                <button className='botaoFechar' onClick={() => closeModal()} > X </button>
                                <div>
                                    <StyledButton onClick={() => closeModal()} >Sair</StyledButton>
                                </div>
                            </div>
                        </>
                }
            </Modal>

        </StyledNumbers>
    )
}

export default Numbers