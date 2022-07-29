import React, { useEffect } from 'react'
import DisplayItens from './DisplayItens'
import { StyledResults } from './StyledResults'
import { StyledButton } from '../styles/StyledButton'
import Border from '../Animations/Border'

import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { useState } from 'react'

const Results = (props) => {

    const [actual, setActual] = useState(0)

    useEffect(() => {
        setActual(0)
    }, [props.dates])

    const nextItem = () => {
        let item = actual
        item = item + 1
        if (item >= props.dates.length) {
            item = props.dates.length - 1
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


    return (
        <StyledResults>
            <p className='text'> Resultado: </p>
            {
                props.allResults ?
                    <div className='results' >
                        <Border>
                            <h3 className='displayNumbers'>
                                {props.dates.join(' - ')}
                            </h3>
                        </Border>
                    </div>
                    :
                    <div className='results' >
                        <Border>
                            <div className='center'>
                                <DisplayItens list={props.dates} actual={actual} />
                                <div className='buttonsContainer'>
                                    <StyledButton onClick={() => backItem()} > <FaAngleDoubleLeft /> </StyledButton>
                                    <StyledButton onClick={() => nextItem()} > <FaAngleDoubleRight /> </StyledButton>
                                </div>
                            </div>
                        </Border>
                    </div>
            }
        </StyledResults>
    )
}

export default Results