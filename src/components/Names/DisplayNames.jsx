import React, { useEffect, useState } from 'react'

const DisplayNames = (props) => {

    const [displayItem, setDisplayItem] = useState(0)

    useEffect(() => {
        setDisplayItem(props.actual)
        console.log(props.actual, props.list[displayItem])
    }, [props.actual])


    return (
        <div className='displayName'>
            <p>
                {props.list[displayItem]}
            </p>
        </div>
    )
}

export default DisplayNames