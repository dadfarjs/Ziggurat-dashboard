import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const useDirection = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
        const lang = i18n.language
        const dir = i18n.dir(lang)
        document.documentElement.dir = dir
        document.documentElement.lang = lang
    }, [i18n.language])
}

export default useDirection
