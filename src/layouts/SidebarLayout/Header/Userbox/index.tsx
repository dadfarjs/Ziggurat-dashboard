import { useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import {
    Avatar,
    Box,
    Button,
    Collapse,
    Divider,
    Hidden,
    lighten,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    Typography,
} from '@mui/material'

import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone'
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone'
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone'
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'
import StarBorder from '@mui/icons-material/StarBorder'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import useDirectionCheck from 'src/utils/hooks/useDirectionCheck'
import i18n from 'lib/I18n'

const UserBoxButton = styled(Button)(
    ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
)

const MenuUserBox = styled(Box)(
    ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
)

const UserBoxText = styled(Box)(
    ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
)

const UserBoxLabel = styled(Typography)(
    ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
)

const UserBoxDescription = styled(Typography)(
    ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
)

const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
    jobtitle: 'Project Manager',
}

function HeaderUserbox() {
    const { t } = useTranslation()

    const ref = useRef<any>(null)
    const refBtnLang = useRef<any>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isOpenBtnLang, setIsOpenBtnLang] = useState<boolean>(false)

    const handleOpen = (): void => {
        setIsOpen(true)
    }

    const handleClose = (): void => {
        setIsOpen(false)
    }

    const handleClickListItemButtonLang = () => {
        setIsOpenBtnLang(!isOpenBtnLang)
    }

    const handleClickChangeLang = (lang: string) => {
        console.log('teste:', lang)
        lang && i18n.changeLanguage(lang)
    }

    return (
        <>
            <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
                <Avatar variant="rounded" alt={user.name} src={user.avatar} />
                <Hidden mdDown>
                    <UserBoxText>
                        <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                        <UserBoxDescription variant="body2">
                            {user.jobtitle}
                        </UserBoxDescription>
                    </UserBoxText>
                </Hidden>
                <Hidden smDown>
                    <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
                </Hidden>
            </UserBoxButton>
            <Popover
                anchorEl={ref.current}
                onClose={handleClose}
                open={isOpen}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuUserBox sx={{ minWidth: 210 }} display="flex">
                    <Avatar
                        variant="rounded"
                        alt={user.name}
                        src={user.avatar}
                    />
                    <UserBoxText>
                        <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                        <UserBoxDescription variant="body2">
                            {user.jobtitle}
                        </UserBoxDescription>
                    </UserBoxText>
                </MenuUserBox>
                <Divider sx={{ mb: 0 }} />
                <List sx={{ p: 1 }} component="nav">
                    <ListItemButton
                        onClick={handleClickListItemButtonLang}
                        ref={refBtnLang}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Popover
                        anchorEl={refBtnLang.current}
                        onClose={handleClickListItemButtonLang}
                        open={isOpenBtnLang}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: useDirectionCheck('rtl')
                                ? 'right'
                                : 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: useDirectionCheck('rtl')
                                ? 'left'
                                : 'right',
                        }}
                    >
                        <Collapse
                            in={isOpenBtnLang}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                <ListItemButton
                                    sx={{ pl: 4 }}
                                    onClick={() => handleClickChangeLang('en')}
                                >
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={t('english')} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{ pl: 4 }}
                                    onClick={() => handleClickChangeLang('fa')}
                                >
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={t('persian')} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Popover>
                    <ListItem
                        button
                        to="/management/profile/details"
                        component={NavLink}
                    >
                        <AccountBoxTwoToneIcon fontSize="small" />
                        <ListItemText primary="My Profile" />
                    </ListItem>
                    <ListItem
                        button
                        to="/dashboards/messenger"
                        component={NavLink}
                    >
                        <InboxTwoToneIcon fontSize="small" />
                        <ListItemText primary="Messenger" />
                    </ListItem>
                    <ListItem
                        button
                        to="/management/profile/settings"
                        component={NavLink}
                    >
                        <AccountTreeTwoToneIcon fontSize="small" />
                        <ListItemText primary="Account Settings" />
                    </ListItem>
                </List>
                <Divider />
                <Box sx={{ m: 1 }}>
                    <Button color="primary" fullWidth>
                        <LockOpenTwoToneIcon sx={{ mr: 1 }} />
                        Sign out
                    </Button>
                </Box>
            </Popover>
        </>
    )
}

export default HeaderUserbox
