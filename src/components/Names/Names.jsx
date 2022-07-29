import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { Container } from '../styles/Container.styled'
import { StyledNames } from './StyledNames'
import { StyledButton } from '../styles/StyledButton'
import generateNamesArray from '../../core/generateNamesArray'

import Logo from '../Logo/Logo'

import { useEffect } from 'react'
import BgAnimation from '../Animations/BgAnimation'
import BubblesContainer from '../Animations/BubblesContainer'

import Results from '../Results/Results'
import Counter from '../Counter/Counter'

const Names = () => {

  const [names, setNames] = useState('')
  const [tempNames, setTempNames] = useState('')
  const [listNames, setListNames] = useState([])
  const [modal, setModal] = useState('none')

  const [loading, setLoading] = useState(true)
  const [render, setRender] = useState(false)
  const [count, setCount] = useState(0)
  const [doCount, setDoCount] = useState(false)
  const [idTimeOut, setIdTimeOut] = useState(0)

  const [quantity, setQuantity] = useState(1)
  const [allResults, setAllResults] = useState(false)
  const [animations, setAnimations] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      if (modal === 'flex') { setLoading(false) }
    }, [1450])
  }, [modal])

  useEffect(() => {
    clearTimeout(idTimeOut)
    if (doCount) { runCount(count) }
  }, [doCount])

  useEffect(() => {
    let number = tempNames.length
    handleQuantity(number)
  }, [tempNames])

  useEffect(() => {
    let newList = names.trim().split(/\r?\n/) // split para o Enter
    let newSplitList = newList.toString().split(',') // split para a vírgula
    let list = newSplitList.filter(i => i.trim())
    
    setTempNames(list)
  }, [names])

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
  }

  const handleChange = (e) => {
    setNames(e.target.value);

  }

  const runLottery = () => {
    setListNames(generateNamesArray(tempNames, quantity))
    if (animations) { setCount(6) }
    setModal('flex')
    setRender(false)
    setDoCount(true)

  }

  const validateLottery = () => {
    return ( tempNames.length < 1 )
  }

  const handleQuantity = (number) => {
    let total = tempNames.length
    if (number >= total) { number = total }
    // if (number <= 1) { number = 1 }
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

  const cleanNames = () => {
    setNames('')
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
    <StyledNames>
      <div className='center'>
        <Container w='75%' h='85%' minW='525px' minH='575px'>
          <h2 className='title'>NOMES</h2>
          <div className='namesContainer'>
            <textarea className='namesArea' type="text" required value={names} onChange={(e) => handleChange(e)} />
            <label className='namesLabel'> Digite os nomes para realizar o sorteio e tecle "Enter" ou "vírgula" para separar cada nome.</label>
          </div>
          <div>
            <label>Nomes Sorteados: </label>
            <input className='quantity' type="number" onBlur={(e) => minQuantity(e.target.value)} required value={quantity} onChange={(e) => handleQuantity(e.target.value)} />
            <label className='labelHelp' >Mínimo é 1 e máximo é baseado nos nomes digitados.</label>
          </div>
          <div>
            <input className='checkbox' type="checkbox" name='allResults' checked={allResults} onChange={() => handleAllResults()}></input>
            <label className='checkboxLabel' onClick={() => handleAllResults()}>Visualizar os resultados todos de uma vez</label>
          </div>
          <div>
            <input className='checkbox' type="checkbox" name='animations' checked={animations} onChange={() => handleAnimations()} />
            <label className='checkboxLabel' onClick={() => handleAnimations()}>Contagem regressiva</label>
          </div>
          <div>
            <StyledButton onClick={() => runLottery()} disabled={validateLottery()} >Realizar Sorteio</StyledButton>
            <StyledButton onClick={() => cleanNames()} >Limpar Nomes</StyledButton>
          </div>
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
                      <Results allResults={allResults} dates={listNames} />
                    </>
                    :
                    <div className='center'>
                      <Counter count={count} />
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
    </StyledNames>
  )
}

export default Names