import { FC, useState, useEffect, useCallback } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { checkTinyURL } from '../../API'

interface Params {
    shorthash: string,
}

const RedirectPage: FC = () => {
    const { shorthash } = useParams<Params>()
    const [existsTinyURL, setExistsTinyURL] = useState<boolean>(true)

    const checkIfExistsTinyURL = useCallback(async () => {
        try {
            await checkTinyURL(shorthash)
        } catch (error) {
            const errorMessage = (error as Error).message
            const isTinyURL = !errorMessage.includes('404')
            if (isTinyURL) {
                window.location.assign(`https://tinyurl.com/${shorthash}`)
                return
            }
            setExistsTinyURL(false)
        }
    }, [shorthash])

    useEffect(() => {
        checkIfExistsTinyURL()
    }, [checkIfExistsTinyURL])
    return (
        <>
            {!existsTinyURL && <Redirect to="/" />}
        </>
    )
}

export default RedirectPage;