import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { Container } from '../styles/Container.styled'
import DisplayNames from './DisplayNames'
import { StyledNames } from './StyledNames'
import { StyledButton } from '../styles/StyledButton'
import generateNamesArray from '../../core/generateNamesArray'

import Logo from '../Logo/Logo'

// import video from '../../assets/video/pexels-cottonbro-cutted.mp4'

import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useEffect } from 'react'


const Names = () => {

  const [names, setNames] = useState('')
  const [listNames, setListNames] = useState([])
  const [modal, setModal] = useState('none')
  const [actual, setActual] = useState(0)

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
  
  const handleChange = (e) => {
    setNames(e.target.value);

  }

  const runLottery = () => {
    let newList = names.trim().split(/\r?\n/) // split para o Enter
    let newSplitList = newList.toString().split(',') // split para a vírgula
    let list = newSplitList.filter(i => i.trim())
    console.log(newSplitList, list)
    setListNames(generateNamesArray(list))
    setCount(6)
    setModal('flex')
    
    setRender(false)
    setDoCount(true)

  }

  const nextItem = () => {
    let item = actual
    item = item + 1
    if (item >= listNames.length) {
      item = listNames.length - 1
    }
    setActual(item)

  }


  const backItem = () => {
    let item = actual
    item = item - 1
    if (item <= 0) {
      item = 0
    }
    setActual(item)

  }

  const cleanNames = () => {
    setNames('')

  }

  const closeModal = () => {
    setModal('none')
    setCount(0)
    setActual(0)
    setLoading(true)
    setRender(false)
    setDoCount(false)
    clearTimeout(idTimeOut)

  }

  return (
    <StyledNames>
      <div className='center'>
        <Container w='80%' h='80%' minW='575px'>
          <h2 className='title'>NOMES</h2>
          <div className='namesContainer'>
            <textarea className='namesArea' type="text" required value={names} onChange={(e) => handleChange(e)} />
            <label className='namesLabel'> Digite os nomes para realizar o sorteio e tecle "Enter" ou "vírgula" para separar cada nome.</label>
          </div>
          <div>
            <input className='checkbox' type="checkbox" name='allResults'></input> <label>Visualizar os resultados todos de uma vez</label>
          </div>
          <div>
            <input className='checkbox' type="checkbox" name='animations' /><label>Animação com contagem regressiva</label>
          </div>
          <div >
            <StyledButton onClick={() => runLottery()} >Realizar Sorteio</StyledButton>
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
              <div> </div>
              {/* <video loop autoPlay id='videoModal'>
                <source
                  src={video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> */}
              <div className='modal' >
                {/* <Logo className='logoModalName' /> */}
                <Logo />
                {
                  render ?
                    <>
                      <p className='text'> Resultado: </p>
                      <div className='results' >
                        <DisplayNames list={listNames} actual={actual} />
                        <div className='modalButtons'>
                          <StyledButton onClick={() => backItem()} > <FaAngleDoubleLeft /> </StyledButton>
                          <StyledButton onClick={() => nextItem()} > <FaAngleDoubleRight /> </StyledButton>
                        </div>
                      </div>
                    </>
                    :
                    <h3 className='displayCount'> {count} </h3>
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