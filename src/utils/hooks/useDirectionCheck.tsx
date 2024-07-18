import { useTranslation } from 'react-i18next'
import { direction as getDirection } from 'lib/I18n'

const useDirectionCheck = (dir: 'rtl' | 'ltr') => {
    const { i18n } = useTranslation()
    const currentDirection = getDirection(i18n.language)
    if (dir === 'ltr') {
        return currentDirection === 'ltr'
    } else {
        return currentDirection === 'rtl'
    }
}

export default useDirectionCheck
