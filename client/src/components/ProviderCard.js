import React from 'react'

const ProviderCard = ({ title, provider, bgColor = "red", handleLink, handleUnlink, handleLogin }) => {

    const values = provider && Object.keys(provider).map((key) => {
        const value = provider[key]

        return (<p key={key}>{key}: {value} </p>)
    })

    const info = (
        <div>
            {values}
            <button onClick={handleUnlink}> Unlink account</button>
        </div>
    )

    const link = (
        <div>
            Not connected
            {handleLogin}
        </div>
    )

    return (
        <div style={{ 'backgroundColor': bgColor }}>
            <h2>{title}</h2>

            {
                provider ? info : link
            }
        </div>
    )
}

export default ProviderCard;